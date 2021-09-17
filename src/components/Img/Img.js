import React from 'react'
import './Img.css'

const Img = ({src, alt, type="container"}) => {
    return (
        <img className="img" src={src} alt={alt}/>
    )
}

export default Img
