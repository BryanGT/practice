import React from 'react';
import ProductSection from '../productSection';
import './styles.scss';
import imgProduct from '@icons/product.png';

const bestMatchData = {
    name: "guatemala coffee",
    price: "$20.50",
    first_section: {
        title: "WHY YOU’LL LOVE IT",
        description: "If you’ve ever taken a bite from a ripe red apple, you’ll know the way this coffee tastes.",
    },
    second_section: {
        title: "Tasting Notes",
        description: "Red Apple, Lemongrass, Malt Chocolate",
    },
    third_section: {
        title: "roast level",
        description: "Medium"
    },
    fourth_section: {
        title: "sipping style",
        description: "Great with milk/cream"
    },
    fifth_section: {
        title: "brew method",
        description: "Brews a delicious cup with a pour over"
    }
}

function BestMatch() {
    return(
        <div className='best-match'>
            <h1 className='best-match__title heading-one'>Best Match</h1>
            <div className='best-match__product'>
                <div className='best-match__product-image'>
                    <img src={imgProduct} alt="product"></img>
                </div>
                <div className='best-match__information'>
                    <h5 className='best-match__information-title'>{bestMatchData.name}</h5>
                    <span className='best-match__information-price'>{bestMatchData.price}</span>
                </div>
                <ProductSection number="one" title={bestMatchData.first_section.title} description={bestMatchData.first_section.description} />
                <ProductSection number="two" title={bestMatchData.second_section.title} description={bestMatchData.second_section.description} />
                <ProductSection number="three" title={bestMatchData.third_section.title} description={bestMatchData.third_section.description} />
                <ProductSection number="four" title={bestMatchData.fourth_section.title} description={bestMatchData.fourth_section.description} />
                <ProductSection number="five" title={bestMatchData.fifth_section.title} description={bestMatchData.fifth_section.description} />
            </div>
        </div>
    )
}

export default BestMatch;