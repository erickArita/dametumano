import React, { useState } from 'react'
import card from './card.module.scss'

interface Card {
    head: JSX.Element;
    body?: JSX.Element | string;
    href?: string;
}

const CardContacto = ({ body, head, href }: Card) => {
    const [showContent, setShowContent] = useState(false)
    const toggleContent = () => {
        setShowContent(!showContent)
        console.log(showContent)
    }
    return (
        <div className={card.card}>
            <div className={card.icon} >
                <a onClick={toggleContent} target="__blank" href={href}>
                    {head}
                </a>
            </div>

            <div className={card.body}>
                {showContent && body }
            </div>
        </div>
    )
}

export default CardContacto 
