import React from 'react';
import '../styles.css';


const scrollToAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
};

const Home = () => {
    return (
        <div className="accueil">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1>John Doe</h1>
                        <p>Une brève description de John Doe va ici Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Iste minima impedit reiciendis ab delectus reprehenderit, atque quos, rerum minus inventore nemo non error,
                             id eveniet sunt ex adipisci nulla vitae,reprehenderit, atque quos, 
                             rerum minus inventore nemo non error, id eveniet sunt reprehenderit, atque quos, 
                             rerum minus inventore nemo non error, id eveniet sunt </p>
                             
                        <a href="#about" className="nav-link custom-link" onClick={scrollToAbout}>
                            En savoir plus
                        </a>
                    </div>
                </div>
            </div>

            {/* Section "À propos" */}
            <section id="about" className="section-about">
                <div className="container">
                    <div className="row align-items-center"> 
                        <div className="col-lg-6">
                            <div className="mt-5"> 
                                <img src="/profil.png" alt="imgprofil" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="text-center mb-4">Compétences :</h2> 
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <span>JAVASCRIPT</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;















