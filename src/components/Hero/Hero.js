import { withRouter } from 'react-router-dom'
import bg from '../../assets/img/bgHero.png'

import './Hero.css'
const Hero = (props) => {

    const category =  props.location.pathname
    let categoryName = category

    switch (categoryName) {
        case "/SOFTWARE_DEVELOP":
            categoryName = "Desarrollo de Software"
            break
        case "/SOCIAL_MEDIA":
                categoryName = "Marketing Digital y Social Media"
                break
        case "/DESIGNER":
            categoryName = "Diseño web o de Interfaces "
            break
        case "/SALES":
            categoryName = "Business Intelligence o Ventas"
            break
        default: 
            categoryName = ""
    }



    const HeroContent = () => {
        if(category !== "/agregar"){
            return(
                <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="hero-content">
                        <h3>Encuentra las mejores oportunidades de trabajo en el área de <span>{categoryName}</span></h3> 
                    </div>
                </div>
            )
        } else {
            return(
                <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="hero-content">
                        <h3>Publica y encuentra a los mejores candidatos para el área de <span>tecnología</span>, <span>Marketing</span> y <span>Diseño</span> de tu empresa <span>{categoryName}</span></h3> 
                    </div>
                </div>
            )
        }
        
    }
    return(
        <div>{ category.length > 2 ? HeroContent() : '' }
        </div>
    )
}

export default withRouter(Hero)