import React, { FC, useRef, useEffect, useReducer } from "react"

import carou from "./carousel.module.scss"

const useTilt = active => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !active) {
      return
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    }

    let el = ref.current

    const handleMouseMove = e => {
      if (!el) {
        return
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect()
      }
      state.mouseX = e.clientX
      state.mouseY = e.clientY
      const px = (state.mouseX - state.rect.left) / state.rect.width
      const py = (state.mouseY - state.rect.top) / state.rect.height

      el.style.setProperty("--px", px)
      el.style.setProperty("--py", py)
    }

    el.addEventListener("mousemove", handleMouseMove)

    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
    }
  }, [active])

  return ref
}

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null
  const ref = useTilt(active)
  return (
    <div
      ref={ref}
      className={carou.slide}
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
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
          backgroundImage: `url('${slide?.image}')`,
        }}
      >
        <div className={carou.slideContentInner}>
          <h2 className={carou.slideTitle}>PLan Grande</h2>
          <h3 className={carou.slideSubtitle}>Visita A la escuela</h3>
          <p className={carou.slideDescription}>Ayuda  a los ninos con utiles</p>
        </div>
      </div>
    </div>
  )
}
const Carouse = ({ slides }) => {
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      }
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      }
    }
  }
  const initialState = {
    slideIndex: 0,
  }
  const [state, dispatch] = useReducer(slidesReducer, initialState)

  return (
    <div className={carou.container}>
      <div className={carou.slides}>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "NEXT" })}
        >
          ‹
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i)
          return <Slide slide={slide} offset={offset} key={i} />
        })}
        <button
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "PREV" })}
        >
          ›
        </button>
      </div>
    </div>
  )
}
export default Carouse
