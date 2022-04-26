import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// case ACTION_TYPES.ADD_SQUARE: {
// 	let key = action.el.shipLength;
// 	let startArr = state.xaxacox1.shipsInfo[key];
// 	console.log(action.id, "action ID");
// 	const myArr = startArr.filter(
// 		(arr) => arr.findIndex((el) => el.id === action.id) >= 0
// 	);
// 	const isLast = isLastShot(myArr);

// 	let res = state.xaxacox1.myBoard.map((el) => {
// 		return el.map((item) => {
// 			if (item.id === action.id && item.zbaxecrac && !isLast) {
// 				return {
// 					...item,
// 					krakvac: true,
// 					pusta: true,
// 					viravor: false,
// 				};
// 			} else if (item.id === action.id && item.zbaxecrac && isLast) {
// 				let newResult = state.xaxacox1.myBoard.map((item) => {
// 					return item.map((el) => {
// 						if (
// 							el.j >= action.col &&
// 							el.j < action.col + action.value &&
// 							el.i === action.row
// 						) {
// 							return {
// 								...el,
// 								finishedNav: true,
// 							};
// 						} else if (isNotAllowed(el, action)) {
// 							return {
// 								...el,
// 								pusta: true,
// 							};
// 						} else {
// 							return el;
// 						}

// 					});
// 				});

// 			}
// 		});
// 	});

// 	return {
// 		...state,
// 		xaxacox1: {
// 			...state.xaxacox1,
// 			myBoard: res,
// 		},
// 	};
// }

// function isLastShot(arr) {
// 	console.log(arr, "arrrrrrr");
// 	const result = arr.flat().reduce((acc, el) => {
// 		// debugger;
// 		if (!el.krakvac) {
// 			acc += 1;
// 		}
// 		return acc;
// 	}, 0);
// 	console.log(result, "res");
// 	if (result > 1) {
// 		return false;
// 	}
// 	return true;
// }
