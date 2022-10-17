import '../styles/Erreur.css'

function Erreur() {
const msg= 'Oups! La page que vous demandez nexiste pas'
const nb= '404'
const accueil='Accueil'
const about='À propos'
const retour='Retourner sur la page daccueil'
return (
    <div className="diverreur">
        <h1 className="accerreur">{accueil}</h1>
        <h1 className="abouterreur">{about}</h1>
        <h2 className="nberreur">{nb}</h2>
        <h2 className="msgerreur">{msg}</h2>
        <h2 className="retourerreur">{retour}</h2>
    </div>
)
}

export default Erreur