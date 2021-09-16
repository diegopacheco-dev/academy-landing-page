import React from 'react'
import './Img.css'

const Img = ({src, alt}) => {
    return (
        <img className="img" src={src} alt={alt}/>
    )
}

export default Img
