import React from "react";
import { Link } from "react-router-dom";

// import CSS
import './Header.css'

const Header = () => {
    return(
       <div className="header">
                <Link to="/"><h1>Tembiapo</h1></Link>
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