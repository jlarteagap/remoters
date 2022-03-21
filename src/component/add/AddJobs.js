import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_JOB } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'
import Companies from './Companies'
import Inputs from '../inputs/Inputs'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const initialState = {
  position: '',
  link: '',
  category: '',
  city: '',
  remote: false,
  country: '',
  type: '',
  salary: '',
  money: 'Bs.'
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
          active: true,
          category: jobs.category,
          city: jobs.city,
          country: jobs.country,
          link: jobs.link,
          money: jobs.money,
          position: jobs.position,
          remote: isRemote,
          salary: jobs.salary,
          type: jobs.type,
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
        }).then(history.push('/dashboard'))
      )
  }
  return (
    <div className="box p-5">
      <h3 className="title is-4">Agregar un nuevo trabajo</h3>
      <form onSubmit={e => Addingjobs(e)}>
        <div className="columns">
          <div className="column is-7">
            <Inputs
              name={'position'}
              title={'Título de la publicación'}
              type={'text'}
              updateState={updateState}
              value={jobs.position}
            />
            <Companies
              user={user.email}
              onChange={value => setCompany(value)}
            />
            <Inputs
              name={'link'}
              title="Enlace para postular"
              type={'text'}
              updateState={updateState}
              value={jobs.link}
            />
            <div className="field form__style">
              <div className="select is-fullwidth">
                <select name="category" onChange={updateState}>
                  <option value="" disabled>
                    --
                  </option>
                  <option value="web_developers">Web Development</option>
                  <option value="software_developer">
                    Software Developers
                  </option>
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
                <label className="label">Categoria</label>
              </div>
            </div>
            <div className="field">
              <div className="control is-expanded form__style">
                <div className="select is-fullwidth">
                  <select name="type" onChange={updateState}>
                    <option value="" disabled>
                      ---
                    </option>
                    <option value="Tiempo_Completo">Tiempo completo</option>
                    <option value="Medio_tiempo">Medio Tiempo</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Consultoria">Consultoria</option>
                  </select>
                  <label className="label">Tipo de contrato</label>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field is-grouped is-grouped-multiline">
              <div className="control is-expanded">
                <div className="select is-fullwidth form__style">
                  <select
                    name="country"
                    onChange={updateState}
                    value={jobs.country}
                  >
                    <option value="" disabled>
                      --
                    </option>
                    <option value="Bolivia">Bolivia</option>
                  </select>
                  <label className="label">País</label>
                </div>
              </div>
              <div className="control is-expanded">
                <div className="select is-fullwidth form__style">
                  <select name="city" onChange={updateState}>
                    <option value="" disabled>
                      --
                    </option>
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
                  <label className="label">Ciudad</label>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control is-expanded">
                <div className="field has-addons">
                  <p className="control form__style">
                    <span className="select">
                      <select
                        className="is-info"
                        name="money"
                        onChange={updateState}
                      >
                        <option>Bs.</option>
                        <option>$us.</option>
                      </select>
                      <label className="label">Moneda</label>
                    </span>
                  </p>
                  <div className="control is-expanded">
                    <Inputs
                      title={'Cantidad'}
                      type={'text'}
                      name={'salary'}
                      updateState={updateState}
                      value={jobs.salary}
                    />
                  </div>
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
          </div>
        </div>

        <button type="submit" className="button btn">
          Enviar publicación
        </button>
      </form>
    </div>
  )
}

export default AddJobs
