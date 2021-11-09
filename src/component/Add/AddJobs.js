import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_JOB } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'
import Companies from './Companies'

import Swal from 'sweetalert2'
import './Forms.css'

const initialState = {
  position: '',
  link: '',
  category: '',
  city: '',
  remote: false

}
const AddJobs = () => {
  const [jobs, setJobs] = useState(initialState)
  const [isRemote, setRemote] = useState(false)
  const [company, setCompany] = useState('')
  const { user } = useContext(AuthContext)

  const clearState = () => {
    setCompany({ ...initialState })
  }

  const [newJob] = useMutation(ADD_JOB)

  const updateState = (e) => {
    setJobs({
      ...jobs,
      [e.target.name]: e.target.value
    })
  }

  const changeHandler = () => {
    setRemote(!isRemote)
  }

  const Addingjobs = (e) => {
    e.preventDefault()

    let companyData
    if (company) {
      // eslint-disable-next-line array-callback-return
      company.map(comp => {
        companyData = comp
      })
    }

    newJob({
      variables: {
        input: {
          position: jobs.position,
          link: jobs.link,
          category: jobs.category,
          city: jobs.city,
          remote: isRemote,
          company: {
            name: companyData.name,
            logo: companyData.logo
          },
          username: {
            email: user.email
          }
        }
      }
    }).then(
      clearState()
    ).then(
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Un nuevo empleo se ha publicado',
        showConfirmButton: false,
        timer: 1500
      })
    )
  }
  return (
    <div className="card">
      <h3>Agregar un nuevo trabajo</h3>
      <form onSubmit={e => Addingjobs(e)}>
        <Companies
          user={user.email}
          onChange={value => setCompany(value)}
        />
        <div className="form__group">
          <label>Cargo disponible</label>
          <input
            onChange={updateState}
            name="position"
            placeholder="Ej: Frontend Developer..."
            value={jobs.name}
            required
          />
        </div>
        <div className="form__group">
          <label>Enlace para postular</label>
          <input
            onChange={updateState}
            name="link"
            placeholder="Enlace donde se postulará el interesado."
            value={jobs.name}
            required
          />
        </div>
        <div className="form__group">
          <label>Categoria</label>
          <select name="category" onChange={updateState}>
            <option value="">Elegir...</option>
            <option value="SOFTWARE_DEVELOP">Software Develop</option>
            <option value="SOCIAL_MEDIA">Social Media</option>
            <option value="DESIGNER">Diseño</option>
            <option value="SALES">Comercial</option>
          </select>
        </div>
        <div className="form__group">
          <label>Ciudad</label>
          <select name="city" onChange={updateState}>
            <option value="">Elegir...</option>
            <option value="SANTA_CRUZ">Santa Cruz</option>
            <option value="LA_PAZ">La Paz</option>
            <option value="COCHABAMBA">Cochabamba</option>
            <option value="TARIJA">Tarija</option>
            <option value="ORURO">Oruro</option>
            <option value="POTOSI">Potosi</option>
            <option value="CHUQUISACA">Chuquisaca</option>
            <option value="BENI">Beni</option>
            <option value="PANDO">Pando</option>
          </select>
        </div>
        <div className="form__group">
          <label className="remote">
            <span className="">Trabajo Remoto?</span>
            <input
              className=""
              name="remote"
              type="checkbox"
              checked={isRemote}
              onChange={changeHandler}
            />
            <span
              className={
                isRemote ? 'btn remote-btn btn-blue' : 'btn remote-btn false'
              }
            >
              {isRemote ? 'SI' : 'NO'}
            </span>
          </label>
        </div>

        <button type="submit" className="btn">
          {' '}
          Enviar publicación
        </button>
      </form>
    </div>
  )
}

export default AddJobs
