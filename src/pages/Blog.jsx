import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles.css';

const Blog = () => {
    return (
        <div className="blog">
            <Container>
                <h2 className="text-uppercase">Blog</h2>
                <Row className="justify-content-center">
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 1" />
                            <Card.Body>
                                <Card.Title>Ma Mission</Card.Title>
                                <Card.Text>
                                Me Présenter au Monde en Tant que Développeur Web
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 2" />
                            <Card.Body>
                                <Card.Title>Mon Identité en Ligne</Card.Title>
                                <Card.Text>
                                Personnaliser Mon Site Web
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 3" />
                            <Card.Body>
                                <Card.Title>Naviguer à Travers le Web</Card.Title>
                                <Card.Text>
                                Mes Choix d'Hébergement et de SEO
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 4" />
                            <Card.Body>
                                <Card.Title>L'Esthétique et l'Utilisabilité</Card.Title>
                                <Card.Text>
                                Mon Approche CSS Personnalisée
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 5" />
                            <Card.Body>
                                <Card.Title>Afficher Mon Talent</Card.Title>
                                <Card.Text>
                                Développement d'une Application React pour GitHub
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src="..." alt="Article 6" />
                            <Card.Body>
                                <Card.Title>Lancement et Continuité</Card.Title>
                                <Card.Text>
                                Test, Déploiement et Maintenance
                                </Card.Text>
                                <Button variant="primary">Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;


