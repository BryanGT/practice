import React from 'react';
import './styles.scss';

function ProgressBar(){
    return(
        <div className='progress-bar'>
            <span className='progress-bar__step'>1</span>
            <span className='progress-bar__step'>2</span>
            <span className='progress-bar__step'>3</span>
            <span className='progress-bar__step'>4</span>
            <span className='progress-bar__step'>5</span>
            <span className='progress-bar__step'>6</span>
        </div>
    )
}

export default ProgressBar;