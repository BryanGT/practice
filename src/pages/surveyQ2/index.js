import React from 'react';
import ProgressBar from '@components/progressBar';
import Option from '@components/option';
import Button from '@components/button';
import './styles.scss';

const SurveyQ2 = () => {
    return (
        <div className='survey'>
            <ProgressBar />
            <h1 className='heading-one survey__title text-center'>how do you brew at home?</h1>
            <div className='survey__form'>
                <div className='survey__options'>
                    <Option text="Coffee Maker" value="maker" position='1' />
                    <Option text="French Press" value="french" position='2' />
                    <Option text="Pour Over" value="pour" position='3' />
                    <Option text="AeroPress" value="aero" position='4' />
                    <Option text="Espresso" value="espresso" position='5' />
                    <Option text="Pods" value="pods" position='6' />
                    <Option text="Moka Pot" value="moka" position='7' />
                </div>
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