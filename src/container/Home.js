import { Helmet} from 'react-helmet'
import Jobs from '../components/Jobs/Jobs'

const Home = (props ) => (
    <> 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Trabajos en Bolivia en tecnología | cruits</title>
            <meta name="description" content="Encuentra las mejores ofertas laborales en tecnología en Bolivia"/>
            <meta name="author" content="Jorge Luis Arteaga" />
            <meta name="copyright" content="Jorge Luis Arteaga" />
            <meta name="robots" content="index"/>

            <meta name="twitter:card" value="summary" />
            <meta property="og:title" content="Trabajos en Bolivia en tecnología" />
            <meta property="og:type" content="”article" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
        </Helmet>
        <Jobs
            nextPage={props.nextPage}
            prevPage={props.prevPage}
            page={props.page}
            reset={props.reset} />
    </>
)

export default Home