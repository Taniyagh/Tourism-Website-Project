import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
const Styles=['btn--primpary','btn--outline','btn--special','btn--search','btn--search--place','btn--tour']
const Sizes=['btn--medium','btn--large'];

function Button(props) {
    const {to,children,buttonstyle,buttonsize}=props
    const ButtonStyle=Styles.includes(buttonstyle)?buttonstyle:Styles[0];
    const ButtonSize=Sizes.includes(buttonsize)?buttonsize:Sizes[0];
  return (
    <Link to={to}  className='btn-mobile'>
        <button className={`btn ${ButtonStyle} ${ButtonSize}`}>
            {children}
        </button>
    </Link>
  )
}

export default Button