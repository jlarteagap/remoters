import React, { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

const DeleteButton = () => {

    const handleButton = e => {
        console.log('Click')
    }
    return(
        <div className="btn" onClick={(e => handleButton())}>
            <FaTrashAlt />
        </div>
    )
}

export default DeleteButton