import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProposeForm from '../components/ProposeForm';
import Image from '../static/images/hero.svg';

const Home = ({ className = '' }) => (
    <header className={`hero ${className}`}>
        <Container>
            <Row className="hero_content justify-content-between py-5">
                <Col md={7} lg={6} className="hero_text-wrapper">
                    
                </Col>
                <Col md={5} className="hero_media-wrapper">
                    <div className="hero_media">
                        <img
                            src={Image}
                            alt="Propose Your Valentine"
                            className="hero_media-img img-fluid"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Home;
