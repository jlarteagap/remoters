import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_JOB } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'
import Companies from './Companies'

import { useHistory } from 'react-router-dom'
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

  const history = useHistory()

  const clearState = () => {
    setCompany({ ...initialState })
  }

  const [newJob] = useMutation(ADD_JOB)

  const updateState = e => {
    setJobs({
      ...jobs,
      [e.target.name]: e.target.value
    })
  }

  const changeHandler = () => {
    setRemote(!isRemote)
  }

  const Addingjobs = e => {
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
    })
      .then(clearState())
      .then(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Un nuevo empleo se ha publicado',
          showConfirmButton: false,
          timer: 1500
        }).then(
          setTimeout(() => {
            history.push('/dashboard')
          }, 4000)
        )
      )
  }
  return (
    <div className="box p-5">
      <h3 className="title is-4">Agregar un nuevo trabajo</h3>
      <form onSubmit={e => Addingjobs(e)}>
        <div className="field">
          <div className="control">
            <label className="label">Cargo disponible</label>
            <input
              className="input"
              onChange={updateState}
              name="position"
              placeholder="Ej: Frontend Developer..."
              value={jobs.name}
              required
            />
          </div>
        </div>
        <Companies user={user.email} onChange={value => setCompany(value)} />
        <div className="control">
          <div className="field">
            <label className="label">Enlace para postular</label>
            <input
              className="input"
              onChange={updateState}
              name="link"
              placeholder="Enlace donde se postulará el interesado."
              value={jobs.name}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Categoria</label>
          <div className="select is-fullwidth">
            <select name="category" onChange={updateState}>
              <option value="">Elegir...</option>
              <option value="web_developers">Web Development</option>
              <option value="software_developer">Software Developers</option>
              <option value="project_managers">Project Management</option>
              <option value="social_media_managers">Social Media</option>
              <option value="comercial">
                Business Management &amp; Ventas
              </option>
              <option value="soporte">Soporte</option>
              <option value="designers">Diseño web y gráfico</option>
              <option value="devops">DevOps</option>
              <option value="seo">SEO - Search Engine Optimization</option>
              <option value="copywriting">Copywriting</option>
              <option value="seguridad">Cyber Security</option>
              <option value="qa">Quality Assurance</option>
              <option value="reclutadores">RRHH & Reclutamiento</option>
            </select>
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control is-expanded">
            <label className="label">Tipo de contrato</label>
            <div className="select is-fullwidth">
              <select name="type" onChange={updateState}>
                <option value="Tiempo_Completo">Tiempo completo</option>
                <option value="Medio_tiempo">Medio completo</option>
                <option value="Medio_tiempo">Medio completo</option>
                <option value="Freelance">Freelance</option>
                <option value="Consultoria">Consultoria</option>
              </select>
            </div>
          </div>

          <div className="control is-expanded">
            <div className="control">
              <label className="label">Salario</label>
              <input type="text" className="input" name="salary"></input>
            </div>
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control is-expanded">
            <label className="label">País</label>
            <div className="select is-fullwidth">
              <select name="country" onChange={updateState}>
                <option value="Bolivia">Bolivia</option>
              </select>
            </div>
          </div>
          <div className="control is-expanded">
            <label className="label">Ciudad</label>
            <div className="select is-fullwidth">
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
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="remote">
              <span className="">Home office?</span>
              <input
                className=""
                name="remote"
                type="checkbox"
                checked={isRemote}
                onChange={changeHandler}
              />
              <span
                className={
                  isRemote
                    ? 'button is-primary is-outlined is-fullwidth'
                    : 'button is-danger is-outlined is-fullwidth'
                }
              >
                {isRemote ? 'SI' : 'NO'}
              </span>
            </label>
          </div>
        </div>

        <button type="submit" className="button btn">
          {' '}
          Enviar publicación
        </button>
      </form>
    </div>
  )
}

export default AddJobs
