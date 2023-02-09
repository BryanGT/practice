import React from 'react';
import './style.scss';

function ProductSection({...props}) {
    return(
        <div className={`product-section product-section--${props.number}`}>
            <div className='product-section__title'>{props.title}</div>
            <div className={`product-section__description product-section__description--${props.number}`}>
                <p className='paragraph'>{props.description}</p>
            </div>
        </div>
    )
}

export default ProductSection;