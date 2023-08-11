import React from 'react';

import './styles.scss';

const InputBox = (props) => {
    const { handleChange, ...otherProps } = props;

    return <input className='sp-input' onChange={handleChange} {...otherProps}/>
}

export default InputBox;