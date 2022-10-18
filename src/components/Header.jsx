import logo from '../assets/LOGO.png'
import style from '../styles/Header.module.css'

function Header () {
return(
    <div className={style.headinit}>
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