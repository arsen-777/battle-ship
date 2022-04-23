let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export const initialState = {
	xaxacox1: {
		myBoard: num.map((el, i) => {
			return letters.map((item, j) => {
				return {
					i: i,
					j: j,
					id: el + item,
					zbaxecrac: false,
					krakvac: false,
					pusta: false,
					canDrow: true,
					shipStart: false,
				};
			});
		}),
		shipsInfo: {
			// 2: [{}, {}, {}],
		},
		ships: { 4: [1], 3: [1, 2], 2: [1, 2, 3], 1: [1, 2, 3, 4] },
	},
};

export const initialStateTwo = {
	xaxacox2: {
		hakarBoard: num.map((el, i) => {
			return letters.map((item, j) => {
				return {
					i: i,
					j: j,
					id: el + item,
					zbaxecrac: false,
					krakvac: false,
					pusta: false,
					canDrow: true,
				};
			});
		}),
		ships2: { 4: [1], 3: [1, 2], 2: [1, 2, 3], 1: [1, 2, 3, 4] },
	},
};

export const ACTION_TYPES = {
	ADD_SQUARE: "ADD_SQUARE",
	NAV_LOC_HORIZON: "NAV_LOC_HORIZON",
	NAV_LOC_VERTIACAL: "NAV_LOC_VERTIACAL",
	SEND_NAV_VALUE: "SEND_NAV_VALUE",
	PUST_NAV: "PUST_NAV",
	IS_NAV_HERE: "IS_NAV_HERE",
	ADDED_SHIP: "ADDED_SHIP",
};

export const ACTION_TYPES_TWO = {
	ADD_SQUARE: "ADD_SQUARE",
	NAV_LOC_HORIZON: "NAV_LOC_HORIZON",
	NAV_LOC_VERTIACAL: "NAV_LOC_VERTIACAL",
	SEND_NAV_VALUE: "SEND_NAV_VALUE",
	PUST_NAV: "PUST_NAV",
	IS_NAV_HERE: "IS_NAV_HERE",
	ADDED_SHIP: "ADDED_SHIP",
};
export { num, letters };
