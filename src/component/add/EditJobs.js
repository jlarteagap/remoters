import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_JOB } from '../../Graphql/Mutation'
import { AuthContext } from '../../context/auth'
import Companies from './Companies'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Forms.css'

const EditJob = ({ data, refetch }) => {
  const [jobs, setJobs] = useState(data)
  const [isRemote, setRemote] = useState(data.remote)
  const [company, setCompany] = useState(data.company)

  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UPDATE_JOB)
  const history = useHistory()
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

    updateJob({
      variables: {
        input: {
          id: jobs.id,
          active: false,
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
            ...companyData,
            name: companyData.name
          }
        }
      }
    }).then(
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Publicación actualizada correctamente.',
        showConfirmButton: false,
        timer: 1500
      }).then(
        refetch().then(() => {
          history.push('/dashboard')
        })
      )
    )
  }
  return (
    <div className="box p-5">
      <h3 className="title is-4">Editar publicación</h3>
      <form onSubmit={e => Addingjobs(e)}>
        <div className="field">
          <div className="control">
            <label className="label">Cargo disponible</label>
            <input
              className="input"
              onChange={updateState}
              name="position"
              placeholder="Ej: Frontend Developer..."
              defaultValue={jobs.position}
              required
            />
          </div>
        </div>
        <Companies
          user={user.email}
          onChange={value => setCompany(value)}
          companieJob={jobs.company}
        />
        <div className="control">
          <div className="field">
            <label className="label">Enlace para postular</label>
            <input
              className="input"
              onChange={updateState}
              name="link"
              placeholder="http://...."
              defaultValue={jobs.link}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Categoria</label>
          <div className="select is-fullwidth">
            <select
              name="category"
              onChange={updateState}
              defaultValue={jobs.category}
            >
              <option value="">Elegir...</option>
              <option value="web_developers">Web Development</option>
              <option value="software_developer">Software Developers</option>
              <option value="project_managers">Project Management</option>
              <option value="social_managers">Social Media</option>
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
        <div className="columns">
          <div className="column">
            <div className="control is-expanded">
              <label className="label">Tipo de contrato</label>
              <div className="select is-fullwidth">
                <select
                  name="type"
                  onChange={updateState}
                  defaultValue={jobs.type}
                >
                  <option value="">Elegir...</option>
                  <option value="Tiempo_Completo">Tiempo completo</option>
                  <option value="Medio_tiempo">Medio Tiempo</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Consultoria">Consultoria</option>
                </select>
              </div>
            </div>
          </div>
          {/* SALARIO  */}
          <div className="column">
            <div className="control is-expanded">
              <label className="label">Salario</label>

              <div className="field has-addons">
                <p className="control">
                  <span className="select">
                    <select
                      className="is-info"
                      name="money"
                      onChange={updateState}
                      defaultValue={jobs.money}
                    >
                      <option>Bs.</option>
                      <option>$us.</option>
                    </select>
                  </span>
                </p>
                <div className="control is-expanded">
                  <input
                    type="text"
                    className="input"
                    name="salary"
                    onChange={updateState}
                    value={jobs.salary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control is-expanded">
            <label className="label">País</label>
            <div className="select is-fullwidth">
              <select
                name="country"
                onChange={updateState}
                defaultValue={jobs.country}
              >
                <option value="">Elegir...</option>
                <option value="Bolivia">Bolivia</option>
              </select>
            </div>
          </div>
          <div className="control is-expanded">
            <label className="label">Ciudad</label>
            <div className="select is-fullwidth">
              <select
                name="city"
                onChange={updateState}
                defaultValue={jobs.city}
              >
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

EditJob.propTypes = {
  data: PropTypes.object,
  refetch: PropTypes.func
}
export default EditJob
