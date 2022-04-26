import { useReducer, useState, useEffect } from "react";
import "./App.css";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";
import Ships from "./ships/Ships";
import { initialState } from "./state/state";
import { initialStateTwo } from "./state/state";
import { ACTION_TYPES } from "./state/state";
import { num, letters } from "./state/state";
import OpenentBoard from "./components/OpenentBoard";
import MyFireBoard from "./components/MyFireBoard";
import { act } from "react-dom/test-utils";
import OponentShip from "./ships/OponentShip";

function reducer(state, action) {
	switch (action.type) {
		// case ACTION_TYPES.IS_NAV_HERE: {
		// 	if (state.xaxacox1.ships[action.value]) {
		// 		return {
		// 			...state,
		// 			xaxacox1: {
		// 				...state.xaxacox1,
		// 				ships: { ...state.xaxacox1.ships, value: [action.value] },
		// 			},
		// 		};
		// 	}
		// }
		// case ACTION_TYPES.ADDED_SHIP: {
		// 	console.log(action, "action");
		// 	if (!state.xaxacox1.ships.hasOwnProperty(action.value)) {
		// 		return {
		// 			...state,
		// 			xaxacox1: {
		// 				...state.xaxacox1,
		// 				ships: { ...state.xaxacox1.ships, [action.value]: [action.value] },
		// 			},
		// 		};
		// 	}
		// 	return state;
		// }
		case ACTION_TYPES.PUST_NAV: {
			let res = state.xaxacox1.myBoard.map((el) => {
				return el.map((item) => {
					if (item.id === action.id && !item.zbaxecrac && !item.pusta) {
						return {
							...item,
							pusta: true,
						};
					} else {
						return item;
					}
				});
			});
			return {
				...state,
				xaxacox1: {
					...state.xaxacox1,
					myBoard: res,
				},
			};
		}

		case ACTION_TYPES.ADD_SQUARE: {
			let res = state.xaxacox1.myBoard.map((el) => {
				return el.map((item) => {
					if (item.id === action.id && item.zbaxecrac) {
						return {
							...item,
							krakvac: true,
							pusta: true,
						};
					} else {
						return item;
					}
				});
			});

			let key = action.el.shipLength;

			// const result = state.xaxacox1.shipsInfo[key].map((item) => {
			// 	return item.filter((el) => el.id !== action.id);
			// });

			return {
				...state,
				xaxacox1: {
					...state.xaxacox1,
					myBoard: res,
					// shipsInfo: {
					// 	...state.xaxacox1.shipsInfo,
					// 	[action.el.shipLength]: result,
					// },
				},
			};

			// console.log(action.value, "action value start");
			// for (let key in state.xaxacox1.shipsInfo) {
			// 	let res = state.xaxacox1.shipsInfo[key].map((el) => {
			// 		if (el.id !== action.id && el.zbaxecrac) {
			// 			return {
			// 				...el,
			// 				krakvac: true,
			// 			};
			// 		} else {
			// 			return el;
			// 		}
			// 	});
			//
			// 	return {
			// 		...state,
			// 		xaxacox1: {
			// 			...state.xaxacox1,
			// 			shipsInfo: { ...state.xaxacox1.shipsInfo, [action.value]: res },
			// 		},
			// 	};
			// }
		}

		case ACTION_TYPES.NAV_LOC_HORIZON: {
			// eslint-disable-next-line no-lone-blocks

			if (
				checkCanDrow(
					action.row,
					action.col,
					action.value,
					state.xaxacox1.myBoard[action.row]
				) &&
				action.value
			) {
				let result = state.xaxacox1.myBoard.map((item) => {
					return item.map((el) => {
						if (
							el.j >= action.col &&
							el.j < action.col + action.value &&
							el.i === action.row
						) {
							return {
								...el,
								zbaxecrac: true,
								canDrow: false,
								shipLength: action.value,
							};
						} else if (isNotAllowed(el, action)) {
							return {
								...el,
								canDrow: false,
							};
						} else {
							return el;
						}
					});
				});

				const [, ...rest] = state.xaxacox1.ships[action.value];

				if (state.xaxacox1.shipsInfo[action.value]) {
					let arr = state.xaxacox1.myBoard[action.row]
						.slice(action.col, action.col + action.value)
						.map((el) => {
							return { ...el, zbaxecrac: true };
						});

					return {
						...state,
						xaxacox1: {
							...state.xaxacox1,
							myBoard: result,
							ships: { ...state.xaxacox1.ships, [action.value]: rest },
							shipsInfo: {
								...state.xaxacox1.shipsInfo,
								[action.value]: [
									...state.xaxacox1.shipsInfo[action.value],
									[...arr],
								],
							},
						},
					};
				}
				let newArr = state.xaxacox1.myBoard[action.row]
					.slice(action.row, action.row + action.value)
					.map((el) => {
						return { ...el, zbaxecrac: true };
					});
				return {
					...state,
					xaxacox1: {
						...state.xaxacox1,
						myBoard: result,
						ships: { ...state.xaxacox1.ships, [action.value]: rest },
						shipsInfo: {
							...state.xaxacox1.shipsInfo,
							[action.value]: [[...newArr]],
						},
					},
				};
			}
			return state;
		}

		case ACTION_TYPES.NAV_LOC_VERTIACAL: {
			if (
				checkCanDrowVert(
					action.row,
					action.col,
					action.value,
					state.xaxacox1.myBoard
				) &&
				action.value
			) {
				let result = state.xaxacox1.myBoard.map((item) => {
					return item.map((el) => {
						if (
							el.i >= action.row &&
							el.i < action.row + action.value &&
							el.j === action.col
						) {
							return { ...el, zbaxecrac: true, canDrow: false };
						} else if (isNotAllowedVert(el, action)) {
							return {
								...el,
								canDrow: false,
							};
						} else {
							return el;
						}
					});
				});
				const [, ...rest] = state.xaxacox1.ships[action.value];

				let myCustomValue = [];
				let customI = action.el.i;
				for (let k = 0; k < action.value; k++) {
					myCustomValue = [
						...myCustomValue,
						{
							...action.el,
							i: customI++,
							zbaxecrac: true,
						},
					];
				}
				if (state.xaxacox1.shipsInfo[action.value]) {
					return {
						...state,
						xaxacox1: {
							...state.xaxacox1,
							myBoard: result,
							ships: { ...state.xaxacox1.ships, [action.value]: rest },
							shipsInfo: {
								...state.xaxacox1.shipsInfo,
								[action.value]: [
									...state.xaxacox1.shipsInfo[action.value],
									[...myCustomValue],
								],
							},
						},
					};
				}

				return {
					...state,
					xaxacox1: {
						...state.xaxacox1,
						myBoard: result,
						ships: { ...state.xaxacox1.ships, [action.value]: rest },
						shipsInfo: {
							...state.xaxacox1.shipsInfo,
							[action.value]: [[...myCustomValue]],
						},
					},
				};
			}
			return state;
		}

		default:
			return state;
	}
}

function reducerTwo(state, action) {
	switch (action.type) {
		// case ACTION_TYPES.IS_NAV_HERE: {
		// 	if (state.xaxacox1.ships[action.value]) {
		// 		return {
		// 			...state,
		// 			xaxacox1: {
		// 				...state.xaxacox1,
		// 				ships: { ...state.xaxacox1.ships, value: [action.value] },
		// 			},
		// 		};
		// 	}
		// }
		// case ACTION_TYPES.ADDED_SHIP: {
		// 	console.log(action, "action");
		// 	if (!state.xaxacox1.ships.hasOwnProperty(action.value)) {
		// 		return {
		// 			...state,
		// 			xaxacox1: {
		// 				...state.xaxacox1,
		// 				ships: { ...state.xaxacox1.ships, [action.value]: [action.value] },
		// 			},
		// 		};
		// 	}
		// 	return state;
		// }
		case ACTION_TYPES.PUST_NAV: {
			let res = state.xaxacox2.hakarBoard.map((el) => {
				return el.map((item) => {
					if (item.id === action.id && !item.zbaxecrac && !item.pusta) {
						return {
							...item,
							pusta: true,
						};
					} else {
						return item;
					}
				});
			});
			return {
				...state,
				xaxacox2: { ...state.xaxacox2, hakarBoard: res },
			};
		}

		case ACTION_TYPES.ADD_SQUARE: {
			let res = state.xaxacox2.hakarBoard.map((el) => {
				return el.map((item) => {
					if (item.id === action.id && item.zbaxecrac) {
						return {
							...item,
							krakvac: true,
							pusta: true,
						};
					} else {
						return item;
					}
				});
			});
			return {
				...state,
				xaxacox2: { ...state.xaxacox2, hakarBoard: res },
			};
		}

		case ACTION_TYPES.NAV_LOC_HORIZON: {
			// eslint-disable-next-line no-lone-blocks

			if (
				checkCanDrow(
					action.row,
					action.col,
					action.value,
					state.xaxacox2.hakarBoard[action.row]
				) &&
				action.value
			) {
				let result = state.xaxacox2.hakarBoard.map((item) => {
					return item.map((el) => {
						if (
							el.j >= action.col &&
							el.j < action.col + action.value &&
							el.i === action.row
						) {
							return { ...el, zbaxecrac: true, canDrow: false };
						} else if (isNotAllowed(el, action)) {
							return {
								...el,
								canDrow: false,
							};
						} else {
							return el;
						}
					});
				});
				const [, ...rest] = state.xaxacox2.ships2[action.value];

				return {
					...state,
					xaxacox2: {
						...state.xaxacox2,
						hakarBoard: result,
						ships2: { ...state.xaxacox2.ships2, [action.value]: rest },
					},
				};
			}
			return state;
		}

		case ACTION_TYPES.NAV_LOC_VERTIACAL: {
			if (
				checkCanDrowVert(
					action.row,
					action.col,
					action.value,
					state.xaxacox2.hakarBoard
				) &&
				action.value
			) {
				let result = state.xaxacox2.hakarBoard.map((item) => {
					return item.map((el) => {
						if (
							el.i >= action.row &&
							el.i < action.row + action.value &&
							el.j === action.col
						) {
							return { ...el, zbaxecrac: true, canDrow: false };
						} else if (isNotAllowedVert(el, action)) {
							return {
								...el,
								canDrow: false,
							};
						} else {
							return el;
						}
					});
				});
				const [, ...rest] = state.xaxacox2.ships2[action.value];

				return {
					...state,
					xaxacox2: {
						...state.xaxacox2,
						hakarBoard: result,
						ships2: { ...state.xaxacox2.ships2, [action.value]: rest },
					},
				};
			}
			return state;
		}

		default:
			return state;
	}
}
// function canPutShip(value, { ships }) {
// 	console.log(ships, "ships");
// 	console.log(value, "value");
// 	console.log(ships["4"].length, "length");
// 	if (value === 4 && ships["4"].length === 0) {
// 		return value;
// 	} else if (value === 3 && ships["3"].length <= 3) {
// 		return value;
// 	} else {
// 		return false;
// 	}
// }

function isNotAllowed({ i, j }, { value, col, row }) {
	return (
		// (i === row - 1 && j === col - 1) ||
		// (i === row + 1 && j === col - 1) ||
		// (i === row + 1 && j <= col + value) ||
		// (i === row - 1 && j <= col + value) ||
		// (i === row && (j === col - 1 || j <= col + value)) ||
		// (j === col && (i === row - 1 || i === row + 1))
		// );

		(i === row - 1 && j >= col - 1 && j <= col + value) ||
		(i === row + 1 && j >= col - 1 && j <= col + value) ||
		(i === row && (j === col - 1 || j === col + value))
	);
}
function isNotAllowedVert({ i, j }, { value, col, row }) {
	return (
		(i === row - 1 && j === col - 1) ||
		(i === row - 1 && j === col) ||
		(i === row - 1 && j === col + 1) ||
		(i === row && j === col - 1) ||
		(i === row && j === col) ||
		(i === row && j === col + 1) ||
		(i < row + value && i > row && j === col - 1) ||
		(i < row + value && i > row && j === col) ||
		(i < row + value && i > row && j === col + 1) ||
		(i === row + value && j === col - 1) ||
		(i === row + value && j === col) ||
		(i === row + value && j === col + 1)
	);
}
function checkCanDrow(i, j, value, arr) {
	const array = arr;

	for (let k = j; k < j + value; k++) {
		if (array[k].zbaxecrac || !array[k].canDrow) {
			// console.log("testtststststs");
			return false;
		}
	}
	return true;
}

function checkCanDrowVert(i, j, value, arr) {
	let shipLength = value;
	let k = i;
	while (shipLength) {
		shipLength--;
		if (!arr[k][j].canDrow) {
			return false;
		}
		k++;
	}
	return true;
}

function App() {
	const [stateOne, dispatchOne] = useReducer(reducer, initialState);
	const [stateTwo, dispatchTwo] = useReducer(reducerTwo, initialStateTwo);
	const [value, setValue] = useState(null);
	const [isHorOrVert, setHorOrVert] = useState(null);
	const [added, setAdded] = useState("");
	const [isPortal, setIsPortal] = useState(false);

	useEffect(() => {
		console.log(stateOne.xaxacox1, "my");
		// console.log(stateTwo.xaxacox2.hakarBoard, "hak");
	}, [stateOne, stateTwo]);
	return (
		<>
			<div className="boards-block">
				<div className="boards">
					<div className="numbers">
						{num.map((item, i) => {
							return (
								<div className="nums" key={i}>
									{item}
								</div>
							);
						})}
					</div>
					<div className="letters">
						{letters.map((item, i) => {
							return (
								<div key={i} className="let">
									{item}
								</div>
							);
						})}
					</div>
					{stateOne.xaxacox1.myBoard.map((el, rowIndex) => {
						return el.map((el, colIndex) => {
							return (
								<div key={el.id}>
									<PlayerOne
										state={stateOne}
										dispatch={dispatchOne}
										el={el}
										value={value}
										rowIndex={rowIndex}
										colIndex={colIndex}
										setValue={setValue}
										isHorOrVert={isHorOrVert}
										setAdded={setAdded}
										added={added}
										setIsPortal={setIsPortal}
										isPortal={isPortal}
									/>
									{/* {isPortal && (
										<Portal
											el={el}
											value={value}
											rowIndex={rowIndex}
											colIndex={colIndex}
											setHorOrVert={setHorOrVert}
											isHorOrVert={isHorOrVert}
										/>
									)} */}
								</div>
							);
						});
					})}
				</div>

				<Ships
					state={stateOne}
					value={value}
					setValue={setValue}
					setHorOrVert={setHorOrVert}
					dispatch={dispatchOne}
				/>
				{/* ay stex kdnes  */}
				<div className="boards">
					<div className="oponNumbers">
						{num.map((item, i) => {
							return (
								<div className="nums" key={i}>
									{item}
								</div>
							);
						})}
					</div>
					<div className="oponLetters">
						{letters.map((item, i) => {
							return (
								<div key={i} className="let">
									{item}
								</div>
							);
						})}
					</div>
					{stateTwo.xaxacox2.hakarBoard.map((el, row) => {
						return el.map((item, col) => {
							return (
								<div>
									<div>
										<MyFireBoard
											state={stateTwo}
											el={item}
											row={row}
											col={col}
											dispatch={dispatchTwo}
											setAdded={setAdded}
											added={added}
										/>
									</div>
								</div>
							);
						});
					})}
				</div>
			</div>

			<div className="oponentBoardBlock">
				{/* stex kdnes  */}

				<div className="boards">
					<div className="numbers">
						{num.map((item, i) => {
							return (
								<div className="nums" key={i}>
									{item}
								</div>
							);
						})}
					</div>
					<div className="letters">
						{letters.map((item, i) => {
							return (
								<div key={i} className="let">
									{item}
								</div>
							);
						})}
					</div>
					{stateTwo.xaxacox2.hakarBoard.map((el, rowIndex) => {
						return el.map((el, colIndex) => {
							return (
								<PlayerTwo
									state={stateTwo}
									dispatch={dispatchTwo}
									el={el}
									value={value}
									rowIndex={rowIndex}
									colIndex={colIndex}
									setValue={setValue}
									isHorOrVert={isHorOrVert}
									setAdded={setAdded}
									added={added}
								/>
							);
						});
					})}
				</div>

				<OponentShip
					state={stateTwo}
					value={value}
					setValue={setValue}
					setHorOrVert={setHorOrVert}
				/>

				<div className="boards">
					<div className="oponNumbers">
						{num.map((item, i) => {
							return (
								<div className="nums" key={i}>
									{item}
								</div>
							);
						})}
					</div>
					<div className="oponLetters">
						{letters.map((item, i) => {
							return (
								<div key={i} className="let">
									{item}
								</div>
							);
						})}
					</div>

					{stateOne.xaxacox1.myBoard.map((el, row) => {
						return el.map((item, col) => {
							return (
								<div>
									<div key={item.id}>
										<OpenentBoard
											state={stateOne}
											el={item}
											row={row}
											col={col}
											dispatch={dispatchOne}
											setAdded={setAdded}
											added={added}
											value={value}
										/>
									</div>
								</div>
							);
						});
					})}
				</div>
			</div>
		</>
	);
}

export default App;
