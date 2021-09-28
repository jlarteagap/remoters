import React from 'react'
import { useState } from "react"

const Paginator = (props) => {
    const {actual, total, limit} = props
    const pages = useState(Math.ceil(total / limit))
    
    const btnPrev = (actual !== 1 ) ? 
        <button className="btn btn-outline-red" onClick={props.prevPage}>&laquo; Anterior</button> :
        <button className="btn btn-disabled"  disabled onClick={props.prevPage}>&laquo; Anterior</button>
    
    const btnNext = (actual !== pages) ? 
        <button className="btn btn-outline-red" 
            onClick={props.nextPage}>Siguiente &raquo;</button> : 
        <button className="btn btn-disabled" disabled
        onClick={props.nextPage}>Siguiente &raquo;</button>;

    return(
            <div className={(actual > pages) ? "displayNone" : "paginator"} >
                {btnPrev}
                {btnNext}
           </div>

    )
}
export default Paginator