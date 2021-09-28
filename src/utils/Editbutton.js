import React, { useState } from "react"
import { FaPencilAlt } from 'react-icons/fa'

const EditButton = ({companyId}) => {

    const handleButton = e => {
        console.log(companyId)
    }
    return(
        <div className="btn btn-orange" onClick={(e => handleButton())}>
            <FaPencilAlt />
        </div>
    )
}

export default EditButton