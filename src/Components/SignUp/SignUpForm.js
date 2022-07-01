import React from 'react'
import './SignUpForm.css'
import Button from '../UI/Button'
function SignUpForm() {
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <input className='text-input' type='text' placeholder='نام و نام خانوادگی' required/>
            <input className='text-input' type='number' placeholder='شماره همراه' required/>
            <input className='text-input' type='emial' placeholder='ایمیل' required/>
            <input className='text-input' type='password' placeholder='پسورد' required/>
            <Button buttonstyle='btn--tour' buttonsize='btn--large' to='/sign-up'>ثبت نام</Button>
        </div>
    </div>
  )
}

export default SignUpForm
