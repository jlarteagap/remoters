import React from "react";
import { Link } from "react-router-dom";

// import CSS
import './Header.css'

const Header = () => {
    return(
       <header className="header">
            <Link to="/"><h1>Tembiapo</h1></Link>
            <navbar>
                <menu>
                    <Link
                    to="/agregar"
                    className="btn"
                    >Agregar</Link>
                </menu>
            </navbar>
       </header>
    )
}

export default Header;