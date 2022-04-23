import React, { useEffect } from "react";
import { useState } from "react";
import { ACTION_TYPES } from "../state/state";

export default function PlayerOne({
	state,
	dispatch,
	el,
	rowIndex,
	colIndex,
	value,
	setValue,
	isHorOrVert,
	setAdded,
	isPortal,
	setIsPortal,
}) {
	const [navsStyle, setNavsStyle] = useState("");

	useEffect(() => {
		if (state.xaxacox1.myBoard[rowIndex][colIndex].zbaxecrac) {
			setNavsStyle("green");
		} else {
			setNavsStyle("");
		}

		if (state.xaxacox1.myBoard[rowIndex][colIndex].krakvac) {
			setNavsStyle("added");
		}
	}, [state, rowIndex, colIndex, setAdded, setNavsStyle]);

	// const mixFunc = (findLoc, onMouse) => {
	// 	findLoc();
	// 	// onMouse(el.id);
	// };

	const findLocHorizontal = () => {
		if (value + colIndex <= 10) {
			dispatch({
				type: ACTION_TYPES.NAV_LOC_HORIZON,
				row: el.i,
				col: el.j,
				value: value,
				el: el,
			});

			// setValue(null);
		}
	};

	const findLocVertical = () => {
		if (value + rowIndex <= 10) {
			dispatch({
				type: ACTION_TYPES.NAV_LOC_VERTIACAL,
				row: el.i,
				col: el.j,
				value: value,
				el: el,
			});

			// setValue(null);
		}
	};

	const horOrVert = () => {
		if (isHorOrVert === "vertical") {
			findLocVertical();
		} else if (isHorOrVert === "horizon") {
			findLocHorizontal();
		}
	};

	return (
		<>
			<div
				id={el.id}
				key={el.id}
				onClick={horOrVert}
				className={"board-block " + navsStyle}
			></div>
		</>
	);
}
