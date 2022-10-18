import '../styles/Erreur.css'

function Erreur() {

return (
    <div className="diverreur">
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