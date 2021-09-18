import React from 'react'
import './Hero.css'
import Button from '../../generals/Button/Button'
import Img from '../../generals/Img/Img'

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
                <Img src={`${process.env.PUBLIC_URL}/imgs/tropa-img.png`} type="contain" alt="baner" />
            </div>
        </section>
    )
}

export default Hero
