import React from 'react'
import './Hero.css'
import Img from '../Img/Img'
import Button from '../Button/Button'


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__title">
                <h1>
                    PREPÁRATE PARA <br/>
                    INGRESAR A LAS <br/>
                    ESCUELAS DE LAS <br/>
                    FF.AA O PNP
                </h1>
                <Button size="md">INSCRIBIRME</Button>
            </div>
            <div className="hero__img">
                {/* <Img src={} alt={}/> */}
            </div>
        </section>
    )
}

export default Hero
