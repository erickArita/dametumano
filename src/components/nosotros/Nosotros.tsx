import React from 'react'
import LineSection from './lineSection'
import nosotros from './nosotros.module.scss'
import Particles from 'react-particles-js'
const Nosotros = () => {

    const data = [
        {
            year: 2018,
            content: "Somos un grupo de jóvenes organizados de manera independiente en Santa Rita de Copán desde 12 de enero del 2018 cuando utilizamos nuestras redes sociales para dar forma a nuestra idea de luchar contra la desigualdad social en nuestro municipio."
        },
        {
            year: 2019,
            content: "Otras personas decidieron formar parte e incorporarse al servicio voluntario en favor de las personas que tienen necesidad en áreas como: Salud, Educación, Alimentación, Vestuario, Inclusión y Recreación."
        },
        {
            year: 2020,
            content: "En la actualidad representamos la primera organización independiente de jovenes voluntarios formada en Santa Rita de Copán Honduras."
        }
    ]

    return (


        <div id='nosotros' className={nosotros.nosotros}>

            <Particles
                className={nosotros.background}
                params={{
                    "particles": {
                        "number": {
                            "value": 70,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.2
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.5
                        },
                        "size": {
                            "value": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.5
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />

            <h2 className={nosotros.title} >Nosotros</h2>
            <div className={nosotros.lineContainer}>

                {
                    data.map(({year,content}) => 
                        // console.log(year,content)
                        <LineSection key={year} year={year} content={content} />
                    )
                }

            </div>
        </div>

    )
}

export default Nosotros
