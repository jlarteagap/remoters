import React, { useContext } from 'react'
import DEFAULT_IMAGES from '../../assets/img/default.jpeg'
import DeleteButton from '../../utils/DeleteButton'

import { AuthContext } from '../../context/auth'
import EditButton from '../../utils/Editbutton'

const Company = ({company}) => {
    const { user } = useContext(AuthContext)
    const { id, name, site, description, username } = company

    console.log(id)
    return(
        <div className="card card--job">
            <div className="card__img">
                <img src={DEFAULT_IMAGES} alt="DEFAUL IMAGES" />
            </div>
            <div className="card__header">
                <h2 className="card__header--title">{name}</h2>
                <div className="card__header--sub"><a href={site} target="_target">{site}</a></div>
                <p>{description}</p>
            </div>

            <div>
                {user && user.email === username &&(
                    <div>
                        <EditButton companyId={id} />
                        <DeleteButton companyId={id}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Company