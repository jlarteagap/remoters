import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { DELETE_COMPANY } from '../Graphql/Mutation'

import Swal from 'sweetalert2'
import PropTypes from 'prop-types'

const DeleteButton = ({ companyId }) => {
  const [deleteCompany] = useMutation(DELETE_COMPANY)

  const handleButton = e => {
    e.preventDefault()

    Swal.fire({
      title: 'Seguro que quieres eliminar esta empresa?',
      text: 'Una vez eliminado, no podrás recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF476F',
      cancelButtonColor: '#F7B267',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.isConfirmed) {
        deleteCompany({
          variables: {
            companyId: companyId
          }
        })
        Swal.fire('Eliminado!', 'Se eliminó correctamentamente.', 'success')
      }
    })
  }
  return (
    <div className="btn" onClick={e => handleButton(e)}>
      <FaTrashAlt />
    </div>
  )
}

DeleteButton.propTypes = {
  companyId: PropTypes.string.isRequired
}

export default DeleteButton
