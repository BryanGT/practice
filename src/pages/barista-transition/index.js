import React, { useEffect } from 'react';
import Button from '../../components/button';
import './styles.scss';
import iconTransition from '@icons/pretty-much-a-barista-desktop.svg';

const BaristaTransition = () => {

    useEffect(() => {
        document.body.classList.add('transition')
        return () => {
            document.body.classList.remove('transition')
        }
    }, []);

    return (
        <div className='main-barista'>
            <div className='main-barista__box'>
                <img src={iconTransition} alt='image transtitio'></img>
                <p>We’ll find coffee that’s on your level.</p>
                <Button class="btn-primary" cta="Continue" path='/results' />
            </div>
        </div>
    )
}

export default BaristaTransition;