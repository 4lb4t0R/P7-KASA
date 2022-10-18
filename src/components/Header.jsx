import logo from '../assets/LOGO.png'
import '../styles/Header.css'

function Header () {
return(
    <div>
        <img src={logo} alt='Logo de la société'/>
    <nav>
        <ul>
            <li>Accueil</li>
            <li>À propos</li>
        </ul>
    </nav>
    </div>
)
}

export default Header