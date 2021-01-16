import React from 'react'
import card from './card.module.scss'
const Card = ({ con }) => {
    return (
        <article>
            <div className={card.header}>
                <img src={con.image} className={card.image} />
                <div className={card.texts}>
                    <h4>{con.nombre}</h4>
                    <p>Co-founder</p>
                </div>
            </div>
            <div className={card.body}>
                <h3>
                    {con.titulo}
                </h3>
                <p className={card.textBody}>
                    {con.texto}
                </p>
            </div>
        </article>
    )
}

export default Card
