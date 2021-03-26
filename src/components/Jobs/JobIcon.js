import icons from '../../img/icons.png'

const JobIcon = (props) => {
    return (
        <div className="job__icons">
            <span className={"job__icon " + props.category}
                style={{ backgroundImage: `url(${icons})` }}>
                <i></i>
            </span>

        </div>
    )
}
export default JobIcon