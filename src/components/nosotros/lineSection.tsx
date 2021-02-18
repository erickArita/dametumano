import React, { useEffect, useState } from "react"
import nosotros from "./nosotros.module.scss"

const LineSection = ({ year, content, iterator }) => {
	const [classToggle, setClassToggle] = useState("")
	useEffect(() => {
		iterator % 2 == 0 ?
			setClassToggle("fade-left")
			: setClassToggle("fade-right")
	}, [])
	return (
		<div className={nosotros.lineTime}>
			<span className={nosotros.movileMark}></span>{" "}
			<span className={nosotros.line}></span>
			<span className={nosotros.titleLine}>{year}</span>
			<div className={nosotros.contentLine}>
				<div className={nosotros.contentLineItem}>
					<p data-aos={classToggle} >{content}</p>
				</div>
			</div>
		</div>
	)
}

export default LineSection
