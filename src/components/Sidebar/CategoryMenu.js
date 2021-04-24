import { Fragment } from "react";
import { Link } from "react-router-dom"
import JobIcon from "../Jobs/JobIcon"

const CategoryMenu = (props) => {
    return(
        <Fragment>
            <h3>Busca por categoría</h3>
            <div className="categories card">
                    <Link to="/SOFTWARE_DEVELOP" className="categories-link" onClick={props.reset}>
                        <JobIcon category="SOFTWARE_DEVELOP" />
                            Software Develop
                    </Link>
                    
                    <Link to="/SOCIAL_MEDIA" className="categories-link" onClick={props.reset}>
                        <JobIcon category="SOCIAL_MEDIA" />
                        Social Media
                    </Link>
                    <Link to="/DESIGNER" className="categories-link" onClick={props.reset}>
                        <JobIcon category="DESIGNER" />
                        Designer
                    </Link>
                    <Link to="/SALES" className="categories-link" onClick={props.reset}>
                        <JobIcon category="SALES" />
                        Ventas
                    </Link>
                </div>
        </Fragment>
    )
}

export default CategoryMenu;