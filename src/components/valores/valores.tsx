import React from 'react'
import val from './valores.module.scss'
const Valores = () => {

    return (
        <section id="valores" className={val.section}>
            <h2 className={val.title}>Valores</h2>
            <div className={val.shapes}>
                <div data-aos="left-c" className={val.circle}>Amor</div>
                <div data-aos="rigth-center" className={val.circle}>Dios</div>
                <div data-aos="bottom-center" className={val.circle}>Solidaridad</div>
            </div>
        </section>
    )
}

export default Valores
