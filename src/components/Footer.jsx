import logo from '../assets/LOGO.png'
import style from '../styles/Footer.module.css'

function Footer (){
return(
    <div className={style.footinit}>
        <img src={logo} alt='Logo de la société'/>
        <p></p>
    </div>
)
}

export default Footer