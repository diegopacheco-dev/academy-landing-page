import React from 'react'
import './Button.css'

const Button = ({children, size="sm"}) => {
    return (
        <button className={`button ${size}`}>
            {children}
        </button>
    )
}

export default Button
