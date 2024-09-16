import React, { useState } from 'react';
import Input from './Input';
import { isEmail, isNotNull } from '../ultis/validateInput';
import { useInput } from '../hooks/useInput';

function Form(props) {

    const {
        inputVal: nameVal,
        onchangeVal: onNameChange,
        onBlur: onNameBlur,
        isInvalid: isNameInvalid
    } = useInput('', isNotNull)

    const {
        inputVal: emailVal,
        onchangeVal: onEmailChange,
        onBlur: onEmailBlur,
        isInvalid: isEmailInvalid
    } = useInput('', val => isEmail(val) && isNotNull(val))

    function onSubmit(e) {
        e.preventDefault()
        if (isNameInvalid || isEmailInvalid)
            return

        console.log(nameVal, emailVal)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input label='Your Name' id='user-name'
                value={nameVal} onChange={onNameChange} onBlur={onNameBlur}
                errorText={isNameInvalid && 'Name can\'t be null'} />
            <Input label='Your E-Mail' id='user-email'
                value={emailVal} onChange={onEmailChange} onBlur={onEmailBlur}
                errorText={isEmailInvalid && 'Please type a valid email'} />
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default Form;