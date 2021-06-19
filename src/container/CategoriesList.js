import Categories from '../components/Jobs/Categories'

const CategoriesList = (props) => (
    
        <Categories
            nextPage={props.nextPage}
            prevPage={props.prevPage}
            page={props.page}
            reset={props.reset}
        />

)

export default CategoriesList