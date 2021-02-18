import React from 'react'
import tesnial from './testimonial.module.scss'
 import Card from './Card/Card'
export interface DataFounder {
    image: string,
    nombre: string,
    titulo: string,
    texto: string,
    contacto: string,
    animation: string
}
const Testimoniales = () => {
  
    const content: Array<DataFounder> = [
        {
            image: "https://static.wixstatic.com/media/35e89d_a953238e06f141068a824aa50f89155f~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Denilson_G%C3%B3mez_edited.webp",
            nombre: "Denilson Gómez",
            titulo: "Club Dame tu Mano ha sido un aprendizaje invaluable y continuo; ",
            texto: "Me ha hecho más humano, más empático y generoso, pero sobretodo me ha ayudado a confirmar que aún existimos personas voluntarias y comprometidos con mejorar la vida de muchas otras. ",
            contacto: "denilsongomezhn@gmail.com",
            animation: "fade-right"
        },
        {
            image: "https://static.wixstatic.com/media/35e89d_1f2c07fe874944f9abff1db21f1707bd~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Franklin%20Aranda%20-%20Cofundador_edited.webp",
            nombre: "Franklin Aranda",
            titulo: "Dame Tu Mano, ha sido una experiencia de crecimiento personal ",
            texto: "Me ha permitido llegar hasta el corazón de muchas personas, recuperar un poco de la humanidad que la sociedad ha ido perdiendo e incentivar a que las demás personas trabajen por una sociedad más justa y equitativa para todos.",
            contacto: "franklinaranda1@gmail.com",
            animation: "fade-left"
        },
        {
            image: "https://static.wixstatic.com/media/35e89d_5269990dd0764febadbe0100fcf2234d~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Anahu00ed_Leiva_-_Cofundadora_edited.webp",
            nombre: "Anahí Leiva ",
            titulo: "Club Dame Tu Mano es un proyecto que me ha regalado parte de los mejores momentos de mi vida",
            texto: "Un sentimiento de satisfacción, una sonrisa, un abrazo o un “gracias” es realmente el motor para seguir adelante buscando la manera de ser entes participativos en el desarrollo de nuestras comunidades.",
            contacto: "anahiramosleiva@gmail.com",
            animation: "zoom-in-right"
        },
        {
            image: "https://static.wixstatic.com/media/35e89d_3c53ed9e87e944d29d369ce423e4bc8d~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01/Daniela%20Pinto%20-%20Cofundadora_edited.webp",
            nombre: "Daniela Pinto",
            titulo: "Club dame tu mano ha sido una de mis mejores experiencias ",
            texto: "Es aquí donde me doy cuenta que no es necesario hacer grandes cosas para ayudar a los demás,  y es con las pequeñas cosas que marcamos la diferencia y podemos llegar a ser ejemplo para nuestra sociedad.",
            contacto: "dp1488551@gmail.com",
            animation: "fade-up"
        }
    ]
    return (
        <section className={tesnial.section} id="testimoniales">
            < h2 className={tesnial.title}>Testimoniales</h2>
            <div className={tesnial.gridContainer}>
                {
                    content.map((el, i) => (
                        <Card key={i} con={el} i={i} />
                    ))
                }
            </div>
        </section>
    )
}

export default Testimoniales
