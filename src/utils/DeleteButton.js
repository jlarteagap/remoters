import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import {
  DeleteJobsDocument,
  DeleteCompanyDocument
} from '@service/graphql/graphql'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const DeleteButton = ({ companyId, jobId, path }) => {
  const mutation = companyId ? DeleteCompanyDocument : DeleteJobsDocument
  const [companyOrJob] = useMutation(mutation)
  const textAction = companyId ? 'Empresa' : 'Oferta Laboral'

  const router = useRouter()
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
    }).then(result => {
      if (result.isConfirmed) {
        companyOrJob({
          variables: {
            companyId,
            jobId
          }
        })
        Swal.fire(
          'Eliminado!',
          'Se eliminó correctamentamente.',
          'success'
        ).then(router.push(path))
      }
    })
  }
  return (
    <div className="button is-danger" onClick={e => handleButton(e)}>
      <FaTrashAlt />
    </div>
  )
}

DeleteButton.propTypes = {
  companyId: PropTypes.string,
  jobId: PropTypes.string,
  path: PropTypes.string
}

export default DeleteButton
