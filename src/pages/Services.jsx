import React from 'react';
import '../styles.css'; 

const Services = () => {
    const handleMouseEnter = (serviceNumber) => {
     
        console.log(`Survolez le service ${serviceNumber}`);
    };

    const handleMouseLeave = () => {
       
        console.log("Quittez le survol du service");
    };

    return (
        <div className="services-page">
            <div className="container">
                <h1>Nos Services</h1>
                <div className="row">
                    <div className="col-lg-4 service" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                        <i className="fas fa-desktop"></i>
                        <h2>Conception et intégration de sites responsives</h2>
                        <p>s'assurer que les sites web sont compatibles avec 
                            les différents appareils, en utilisant des techniques de conception responsive et 
                            en testant la compatibilité sur différents navigateurs et appareils.</p>
                    </div>
                    <div className="col-lg-4 service" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                        <i className="fas fa-wrench"></i>
                        <h2>Maintenance et mise à jour de sites web existants</h2>
                        <p>services de maintenance et de mise à jour pour les sites web existants, en veillant à ce qu'ils restent sécurisés,
                            fonctionnels et à jour avec les dernières technologies et tendances du web.</p>
                    </div>
                    <div className="col-lg-4 service" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                    <i className="fas fa-laptop-code"></i>
                        <h2>Développement de sites web statiques et dynamiques</h2>
                        <p>concevoir et développer des sites web personnalisés en utilisant HTML, CSS et JavaScript, en se basant 
                            sur les besoins spécifiques de ses clients.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;








