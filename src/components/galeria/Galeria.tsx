import React from 'react'
import galery from 'galeria.scss'
import { useStaticQuery } from 'gatsby'
const Galeria = () => {
    // useStaticQuery
    return (
        <div className={galery.galeria}>
            <h2 className={galery.title}>Galeria</h2>
            <div className={galery.gridContainer}>
                <div className={galery.gridItem}>

                </div>
            </div>
        </div>
    )
}

export default Galeria
