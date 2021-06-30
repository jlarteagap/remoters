import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FaPlus, FaUserAstronaut } from 'react-icons/fa'
import AppContext from '../../context/AppContext'
// import CSS
import './Header.css'

const Header = ({title}) => {
    const { resetState } = useContext(AppContext)
    return(
       <div className="header">
                <Link to="/" onClick={resetState}><h1>{title}</h1></Link>
                <div>
                    <div className="header__right">
                        <Link to="/profile" className="header__right--profile">
                            <FaUserAstronaut className="header__right--icon" /> Name
                        </Link>
                        <Link
                        to="/agregar"
                        className="btn"
                        ><FaPlus className="header__right--plus"/>AGREGAR</Link>
                    </div>
                </div>
       </div>
    )
}

export default Header;