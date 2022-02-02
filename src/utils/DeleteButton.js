import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { DELETE_COMPANY, DELETE_JOB } from '../Graphql/Mutation'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const DeleteButton = ({ companyId, jobID }) => {
  const mutation = companyId ? DELETE_COMPANY : DELETE_JOB
  const [companyOrJob] = useMutation(mutation)
  const textAction = companyId ? 'Empresa' : 'Oferta Laboral'

  const history = useHistory()
  const handleButton = e => {
    e.preventDefault()

    Swal.fire({
      title: `Seguro que quieres eliminar esta ${textAction}?`,
      text: 'Una vez eliminado, no podrás recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF476F',
      cancelButtonColor: '#F7B267',
      confirmButtonText: 'Si, eliminar!'
    })
      .then(result => {
        if (result.isConfirmed) {
          companyOrJob({
            variables: {
              companyId,
              jobID
            }
          })
          Swal.fire('Eliminado!', 'Se eliminó correctamentamente.', 'success')
        }
      })
      .then(history.push('/dashboard'))
  }
  return (
    <div className="button is-danger" onClick={e => handleButton(e)}>
      <FaTrashAlt />
    </div>
  )
}

DeleteButton.propTypes = {
  companyId: PropTypes.string,
  jobID: PropTypes.string
}

export default DeleteButton
