import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import AppContext from '../../context/AppContext'
// import CSS
import './Header.css'

const Header = ({title}) => {
    const { resetState } = useContext(AppContext)
    return(
       <div className="header">
                <Link to="/" onClick={resetState}><h1>{title}</h1></Link>
                <div>
                    <div>
                        <Link
                        to="/agregar"
                        className="btn"
                        >Agregar</Link>
                    </div>
                </div>
       </div>
    )
}

export default Header;