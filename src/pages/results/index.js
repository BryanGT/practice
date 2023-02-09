import React from 'react';
import Button from '@components/button';
import BestMatch from '@components/bestMatch';
import ProgressBar from '@components/progressBar';
import './styles.scss'

const Results = () => {
    return (
        <div className='main-results'>
            <ProgressBar />
            <h1 className='heading-one main-results__title'>meet your new favorite coffee.</h1>
            <p className='paragraph'>Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.</p>
            <div className='main-results__cta'>
                <Button class="btn-simple" cta="Email my results" path='/barista-transition' />
                <Button class="btn-simple" cta="Retake the quiz" path='/survey-q2' />
            </div>  
            <div className='main-results__product'>
                <BestMatch />
            </div>
        </div>
    )
}

export default Results;