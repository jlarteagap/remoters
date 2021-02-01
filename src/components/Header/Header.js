import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
       <header>
            <Link to="/"><h1>Tembiapo</h1></Link>
            <navbar>
                <menu>
                    <Link to="/agregar">Agregar</Link>
                </menu>
            </navbar>
       </header>
    )
}

export default Header;