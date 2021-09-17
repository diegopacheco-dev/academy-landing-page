import React from 'react'
import Subtitle from '../Heading/Subtitle/Subtitle'
import StatItem from '../StatItem/StatItem'
import './WhyUs.css'

const WhyUs = () => {
    return (
        <section className="why-us">
            <Subtitle>¿Por qué nosotros?</Subtitle>
            <div className="why-us__stats">
                <StatItem number={"+5"} caption={"Más de 5 años de experiencia."} />
                <StatItem number={50} caption={"profesores e instructores."} />
                <StatItem number={'90%'} caption={"de nuestros estudiantes alcanzan una vacante."} />
            </div>
        </section>
    )
}

export default WhyUs
