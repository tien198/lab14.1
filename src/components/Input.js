import React from 'react';

function Input({ label, id, errorText, ...props }) {
    return (
        <div className={`form-control ${errorText ? 'invalid' : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            <div className='error-text'>{errorText}</div>
        </div>
    );
}

export default Input;