import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

function Button({...props}) {
    return(
        <Link to={props.path}>
            <button className={props.class}>
                {props.cta}
            </button>
        </Link>
    );
}

export default Button;