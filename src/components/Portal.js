// import React from "react";
// import { ReactDOM } from "react";
// import { createPortal } from "react-dom";
// import ship from "../acets/ship2.png";

// export default function Portal({
// 	el,
// 	value,
// 	rowIndex,
// 	colIndex,
// 	setHorOrVert,
// 	isHorOrVert,
// }) {
// 	let customStyles =
// 		isHorOrVert === "horizon"
// 			? { width: `${value * 50}px`, height: "50px" }
// 			: { height: `${value * 50}px`, width: "50px" };
// 	console.log(customStyles);
// 	return createPortal(
// 		<>
// 			<img src={ship} alt="" style={customStyles} />
// 		</>,
// 		document.getElementById(`${el.id}`)
// 	);
// }
