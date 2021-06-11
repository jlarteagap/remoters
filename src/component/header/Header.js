import React from 'react'
import { Link } from "react-router-dom";

// import CSS
import './Header.css'

const Header = ({reset, title}) => {
    return(
       <div className="header">
                <Link to="/" onClick={reset}><h1>{title}</h1></Link>
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