import React from 'react'
import Categories from '../component/jobs/Categories'
import Sidebar from '../component/sidebar/Sidebar'
import AppContext from '../context/AppContext'

const CategoriesList = (props) => {
    return(
        <div className="home">
                <div className="home__jobs">
                    <Categories
                        nextPage={props.nextPage}
                        prevPage={props.prevPage}
                        page={props.page}
                        reset={props.reset}
                    />
                </div>
                <div className="home__sidebar">
                    <Sidebar reset = {props.reset} />
                </div>
            </div>
)}

export default CategoriesList