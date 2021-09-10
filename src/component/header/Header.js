import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FaPlus, FaUserAstronaut, FaDoorOpen, FaSignOutAlt} from 'react-icons/fa'
import AppContext from '../../context/AppContext'
import { AuthContext } from '../../context/auth'
// import CSS
import './Header.css'

const Header = ({title}) => {
    const { user, logout } = useContext(AuthContext)
    const { resetState } = useContext(AppContext)
    return(
       <div className="header">
                <Link to="/" onClick={resetState}><h1>{title}</h1></Link>
                    <div className="header__right">
                        {user ? 
                                <Link to="/profile" className="header__right--profile">
                                    <FaUserAstronaut className="header__right--icon" /> {user.name}
                                </Link>
                            : ''
                        }
                    <Link
                        to="/agregar"
                        className="btn mr-1"
                        ><FaPlus className="header__right--plus"/>AGREGAR
                    </Link>
                        { user ?
                            <Link
                                className="header--log"
                                onClick={logout} 
                            >
                                <FaSignOutAlt
                                /> Salir
                            </Link>
                            : 
                            <Link
                                className="header--log"
                                to='/login'
                            >
                                <FaDoorOpen /> Entrar
                            </Link>

                        }
                    </div>
       </div>
    )
}

export default Header;