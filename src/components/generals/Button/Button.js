import React from 'react'
import './Button.css'

const Button = ({children, size="sm", type="color", onClick=()=>console.log("")}) => {
    return (
        <button
        onClick={() => onClick()}
         className={`button ${size} ${type}`}>
            {children}
        </button>
    )
}

export default Button
