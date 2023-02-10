import React, {useState} from 'react';
import './styles.scss';

const Option = ({...props}) => {

    const [option, setOption] = useState('');

    const handleClick = () => {
        setOption('enabled');
    }

    return (
        <label onClick={handleClick} className={`brew-option brew-option--${props.position} ${option}`}>
            <input type="radio" name="radio" />
            <div className={`box box--${props.value}`}>
            <span>{props.text}</span>
            </div>
        </label>
    );
}

export default Option;