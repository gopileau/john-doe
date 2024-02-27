import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles.css';

const Achievements = () => {
    return (
        <div className="achievements">
            <h1 className="text-center">Portfolio de John Doe</h1>
            <div className="achievement-list">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/jhon.png" className="small-img" /> 
                <Card.Body>
                    <Card.Title>CV</Card.Title>
                    <Card.Text>
                    Un projet de création d'un CV avec HTML & CSS.
                    </Card.Text>
                    <Button variant="primary">Voir plus</Button>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/com.png" className="small-img" /> 
                    <Card.Body>
                        <Card.Title>Espace commentaire</Card.Title>
                        <Card.Text>
                            Un projet d'implémentation d'un espace commentaire avec JavaScript.
                        </Card.Text>
                        <Button variant="primary">Voir plus</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/cahier.png" className="small-img" /> 
                    <Card.Body>
                        <Card.Title>Cahier des charges</Card.Title>
                        <Card.Text>
                            Un projet de rédaction d'un cahier des charges sur PDF.
                        </Card.Text>
                        <Button variant="primary">Voir plus</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Achievements;





