import '../styles/Erreur.css'

function Erreur() {
const accueil='Accueil'
const about='À propos'

return (
    <div className="diverreur">
        <div className="headerreur">
        <h1 className="accerreur">{accueil}</h1>
        <h1 className="abouterreur">{about}</h1>
        </div>
        <div className="nbcontain">
        <h2 className="nberreur">404</h2>
        </div>
        <div className="msgcontain">
        <h2 className="msgerreur">Oups! La page que vous demandez n'existe pas</h2>
        </div>
        <h2 className="retourerreur">Retourner sur la page d'accueil</h2>
    </div>
)
}

export default Erreur