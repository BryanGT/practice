import React from 'react';
import Button from '../../components/button';
import './styles.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => {
    return (
        <div className='landing'>
            <Row>
                <Col md={{ span: 8, order: 'last' }}>
                    <div className='landing-side--right'></div>
                </Col>
                <Col md={4}>
                    <div className='landing-side--left'>
                        <h1 className='heading-one'>Find Your Perfect Coffee</h1>
                        <p className='paragraph'>Whether you’re looking for the right coffee to jumpstart your day, kick off an adventure, or for slow afternoon sipping, we’ll help you find your perfect coffee match.</p> 
                        <p className='paragraph'>Let's start your coffee journey with a few questions.</p>
                        <Button class="btn-primary" cta="Take the quiz" path='/survey-q2' />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Landing;