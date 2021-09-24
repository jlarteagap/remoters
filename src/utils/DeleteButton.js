import { useMutation } from "@apollo/client"
import React, { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import { DELETE_COMPANY } from '../Graphql/Mutation'

const DeleteButton = ({companyId}) => {

    const [deleteCompany, {error, loading, data}] = useMutation(DELETE_COMPANY)

    const handleButton = e => {
        e.preventDefault()
       
        deleteCompany({
            variables: {
                companyId: companyId
            }
        }).then({
            data
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <div className="btn" onClick={(e => handleButton(e))}>
            <FaTrashAlt />
        </div>
    )
}

export default DeleteButton