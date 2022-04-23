import React, { useEffect, useState } from "react";
import { ACTION_TYPES_TWO } from "../state/state";

export default function MyFireBoard({ el, row, col, state, dispatch }) {
	const [navsStyle, setNavsStyle] = useState("");
	const [pust, setPust] = useState(null);

	const fireShip = (id) => {
		dispatch({ type: ACTION_TYPES_TWO.ADD_SQUARE, id });
		dispatch({ type: ACTION_TYPES_TWO.PUST_NAV, id });
	};

	useEffect(() => {
		if (state.xaxacox2.hakarBoard[row][col].krakvac) {
			setNavsStyle("added");
		} else if (state.xaxacox2.hakarBoard[row][col].pusta) {
			setPust("blue");
		}
	}, [state, row, col]);

	return (
		<div
			onClick={() => fireShip(el.id)}
			className={"board-block " + navsStyle + " " + pust}
		></div>
	);
}
