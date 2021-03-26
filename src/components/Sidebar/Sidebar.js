import { Link } from "react-router-dom"
import JobIcon from "../Jobs/JobIcon"

import './sidebar.css'
const Sidebar = () => {
    return(
        <div className="sidebar">
            <h3>Busca por categoría</h3>
            <div className="categories card">
                <Link to="/SOFTWARE_DEVELOP" className="categories-link" >
                    <JobIcon category="SOFTWARE_DEVELOP" />
                        Software Develop
                </Link>
                
                <Link to="/SOCIAL_MEDIA" className="categories-link">
                    <JobIcon category="SOCIAL_MEDIA" />
                    Social Media
                </Link>
                <Link to="/DESIGNER" className="categories-link">
                    <JobIcon category="DESIGNER" />
                    Designer
                </Link>
                <Link to="/BUSINESS_INTELLIGENCE" className="categories-link">
                    <JobIcon category="BUSINESS_INTELLIGENCE" />
                    Business Intelligence
                </Link>
            </div>
        </div>
    )
}

export default Sidebar