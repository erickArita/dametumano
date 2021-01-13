import React from "react"
import nosotros from "./nosotros.module.scss"

const LineSection = ({ year, content }) => {
  return (
    <div className={nosotros.lineTime}>
      <span className={nosotros.movileMark}></span>{" "}
      <span className={nosotros.line}></span>
      <span className={nosotros.titleLine}>{year}</span>
      <div className={nosotros.contentLine}>
        <div className={nosotros.contentLineItem}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default LineSection
