import React from 'react';
import '../styles.css';

const Notices = () => {
    return (
        <div className="notices">
            <h1>Mentions Légales</h1>
            <h2>Éditeur du site : faux</h2>
            <p>John Doe<br />
            Reims<br />
            xxx xxxx xxxx xx<br />
            Adresse e-mail<br />
            Numéro RCS / SIRET: nul</p>
            
            <h2>Hébergeur du site : gopilo</h2>
            <p>Nom de l'hébergeur<br />
            Adresse de l'hébergeur<br />
            Numéro de téléphone de l'hébergeur</p>
            
            <h2>Crédits : Laura Gonzalez </h2>
            <p>Les images utilisées sur ce site proviennent de <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>
            et <a href="https://fontawesome.com/v5/docs/web/use-with/react" target="_blank" rel="noopener noreferrer">Fontawesome</a></p>
        </div>
    );
}

export default Notices;

