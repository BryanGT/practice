import React from 'react';
import ProgressBar from '@components/progressBar';
import Option from '@components/option';
import Button from '@components/button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss';

const SurveyQ2 = () => {
    return (
        <div className='survey'>
            <ProgressBar />
            <h1 className='heading-one survey__title text-center'>how do you brew at home?</h1>
            <div className='survey__form'>
                <Row>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="Coffee Maker" value="maker"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="French Press" value="french"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="Pour Over" value="pour"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="AeroPress" value="aero"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="Espresso" value="espresso"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="Pods" value="pods"></Option>
                    </Col>
                    <Col sm={6} xs={6} md={2}>
                        <Option text="Moka Pot" value="moka"></Option>
                    </Col>
                </Row>
                <div className="d-md-none">
                    <Button class="btn-mobile" cta="continue" path='/barista-transition' />
                </div>
                <div className="d-none d-md-block survey__form-cta">
                    <Button class="btn-primary" cta="continue" path='/barista-transition' />
                </div>
                <div className="d-none d-md-flex survey__form-back">
                    <Button class="btn-simple" cta="< Back" path='/' />
                    <span className="survey__form-back--why">Why it matters +</span>
                </div>
            </div>
        </div>
    )
}

export default SurveyQ2;