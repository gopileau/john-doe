import React from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact";
    return (
        <div className={`container ${isContactPage ? 'contact-page' : ''}`}>
            <h2 className="text-uppercase text-center">Me contacter</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Mes coordonnées</h3>
                    <address>
                        <i className="fas fa-map-marker"></i>51100 Reims<br />
                        <i className="fas fa-mobile-alt"></i> xx xx xx xx xx <br />
                        <i className="far fa-envelope"></i> john.doe@gmail.com
                    </address>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166668.82386743507!2d3.890643575122055!3d49.25364793519285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974334a533b09%3A0x40a5fb99a3b45c0!2s51100%20Reims!5e0!3m2!1ses!2sfr!4v1708791797452!5m2!1ses!2sfr"
                        width="100%"
                        height="400px"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="col-md-8">
                    <h3>Formulaire de contact</h3>
                    <p>Pour me contacter, merci de remplir le formulaire ci-dessous.</p>
                    <form action="index.html" method="post">
                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label">
                                Votre nom (*)
                            </label>
                            <input type="text" className="form-control" id="nom" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Votre email (*)
                            </label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Votre numéro de téléphone (*)
                            </label>
                            <input type="tel" className="form-control" id="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">
                                Sujet (*)
                            </label>
                            <input type="text" className="form-control" id="subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Votre message (*)
                            </label>
                            <textarea
                                rows="4"
                                className="form-control"
                                id="message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-info text-light">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;


