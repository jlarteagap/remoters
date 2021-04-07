import {withRouter} from 'react-router-dom'
import CategoryMenu from './CategoryMenu'
import AddNewJob from './AddNewJob'

import './sidebar.css'
import { render } from '@testing-library/react'
const Sidebar = (props) => {
    const path = props.match.path
    const renderSidebar = ''
    
    // if(path  === '/agregar') {
    //     return(
    //         renderSidebar = <p>hola</p>
    //     )
    // }

    return(
        <div className="sidebar">
            <AddNewJob />
            <CategoryMenu />
        </div>
    )
}

export default withRouter(Sidebar)