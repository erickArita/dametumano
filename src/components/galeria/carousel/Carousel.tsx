import React, { FC, useRef, useEffect, useReducer } from 'react'
import carou from './carousel.module.scss'
// const slides = [
//     {
//         title: "Machu Picchu",
//         subtitle: "Peru",
//         description: "Adventure is never far away",
//         image:
//             "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Chamonix",
//         subtitle: "France",
//         description: "Let your dreams come true",
//         image:
//             "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Mimisa Rocks",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Four",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//         title: "Five",
//         subtitle: "Australia",
//         description: "A piece of heaven",
//         image:
//             "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     }
// ];

const useTilt = (active) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}
const initialState = {
    slideIndex: 0
};



const Slide = ({ slide, offset }) => {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    return (
        <div
            ref={ref}
            className={carou.slide}
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            {/* <div
                className={carou.slideBackground}
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            /> */}
            <div
                className={carou.slideContent}
                style={{
                    backgroundImage: `url('${slide?.image}')`
                }}
            >
                <div className={carou.slideContentInner}>
                    <h2 className={carou.slideTitle}>{slide?.title}</h2>
                    <h3 className={carou.slideSubtitle}>{slide?.subtitle}</h3>
                    <p className={carou.slideDescription}>{slide?.description}</p>
                </div>
            </div>
        </div>
    );
}
const Carouse= ({slides}) => {
    const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % slides.length
            };
        }
        if (event.type === "PREV") {
            return {
                ...state,
                slideIndex:
                    state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
            };
        }
    };
    const [state, dispatch] = useReducer(slidesReducer, initialState);

    return (
        <div className={carou.container}  >

            <div className={carou.slides}>
                <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

                {[...slides, ...slides, ...slides].map((slide, i) => {
                    let offset = slides.length + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                })}
                <button onClick={() => dispatch({ type: "PREV" })}>›</button>
            </div>
        </div>
    );
}
export default Carouse