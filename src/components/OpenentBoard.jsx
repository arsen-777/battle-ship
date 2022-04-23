import React, { useEffect, useState } from "react";
import { ACTION_TYPES } from "../state/state";
export default function OpenentBoard({
	el,
	row,
	col,
	state,
	dispatch,
	setAdded,
	added,
	value,
}) {
	const [navsStyle, setNavsStyle] = useState("");
	const [pust, setPust] = useState(null);

	const fireShip = (id) => {
		dispatch({ type: ACTION_TYPES.ADD_SQUARE, id, value: value, el: el });
		dispatch({ type: ACTION_TYPES.PUST_NAV, id });
	};

	useEffect(() => {
		if (state.xaxacox1.myBoard[row][col].krakvac) {
			setNavsStyle("added");
		} else if (state.xaxacox1.myBoard[row][col].pusta) {
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
