import React, { useState, useEffect } from "react";
import Modal from "../components/modal/Modal";
import shipsStyle from "./oponentStyle.module.css";
import ship from "../acets/ship2.png";

export default function OponentShip({ setValue, setHorOrVert, state }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isReady, setIsReady] = useState(false);
	// const toggleModal = () => {
	// 	setIsOpenModal(!isOpenModal);
	// };
	useEffect(() => {
		if (
			state.xaxacox2.ships2["1"].length === 0 &&
			state.xaxacox2.ships2["2"].length === 0 &&
			state.xaxacox2.ships2["3"].length === 0 &&
			state.xaxacox2.ships2["4"].length === 0
		) {
			setIsReady(true);
		}
	}, [state]);
	const one = () => {
		setHorOrVert("horizon");
		setValue(1);
		// setIsOpenModal(!isOpenModal);
	};
	const twoHorizon = () => {
		setHorOrVert("horizon");
		setValue(2);
		// dispatch({ type: ACTION_TYPES.IS_NAV_HERE, value });
		// setIsOpenModal(!isOpenModal);
	};
	const twoVertical = () => {
		setHorOrVert("vertical");
		setValue(2);
		// setIsOpenModal(!isOpenModal);
	};
	const treeHorizon = () => {
		setHorOrVert("horizon");
		setValue(3);
		// dispatch({ type: ACTION_TYPES.IS_NAV_HERE, value });
		// setIsOpenModal(!isOpenModal);
	};
	const treeVertical = () => {
		setHorOrVert("vertical");
		setValue(3);
		// setIsOpenModal(!isOpenModal);
	};
	const fourVertical = () => {
		setHorOrVert("vertical");
		setValue(4);
		// setIsOpenModal(!isOpenModal);
	};
	const fourHorizon = () => {
		setHorOrVert("horizon");
		setValue(4);
		// setIsOpenModal(!isOpenModal);
	};
	return (
		<>
			{!isReady && (
				<div className="ships-block">
					{state.xaxacox2.ships2["1"].length && (
						<div onClick={one} className={shipsStyle.one}>
							<div>
								<img src={ship} alt="" />
							</div>
							<span>x {state.xaxacox2.ships2["1"].length}</span>
						</div>
					)}
					{state.xaxacox2.ships2["2"].length && (
						<>
							<div className={shipsStyle.treeblock}>
								<div onClick={twoHorizon} className={shipsStyle.two}>
									<div>
										<img src={ship} alt="" />
									</div>

									<span> x {state.xaxacox2.ships2["2"].length}</span>
								</div>
								<div onClick={twoVertical} className={shipsStyle.two}>
									<div className={shipsStyle.treevert}>
										<img src={ship} alt="" />
									</div>

									<span>x {state.xaxacox2.ships2["2"].length}</span>
								</div>
							</div>
						</>
					)}
					{state.xaxacox2.ships2["3"].length && (
						<>
							<div className={shipsStyle.treeblock}>
								<div onClick={treeHorizon} className={shipsStyle.tree}>
									<div>
										<img src={ship} alt="" />
									</div>

									<span>x {state.xaxacox2.ships2["3"].length}</span>
								</div>
								<div onClick={treeVertical} className={shipsStyle.tree}>
									<div className={shipsStyle.treevert}>
										<img src={ship} alt="" />
									</div>

									<span>x {state.xaxacox2.ships2["3"].length}</span>
								</div>
							</div>
						</>
					)}
					{state.xaxacox2.ships2["4"].length && (
						<>
							<div className={shipsStyle.tree}>
								<div onClick={fourHorizon} className={shipsStyle.four}>
									<div>
										<img src={ship} alt="" />
									</div>
									<span>x {state.xaxacox2.ships2["4"].length}</span>
								</div>
								<div onClick={fourVertical} className={shipsStyle.four}>
									<div className={shipsStyle.treevert}>
										<img src={ship} alt="" />
									</div>
									<span>x {state.xaxacox2.ships2["4"].length} </span>
								</div>
							</div>
						</>
					)}
					{/* {isOpenModal && <Modal toggleModal={toggleModal} />} */}
				</div>
			)}
			{isReady && <h2> Player two is ready</h2>}
		</>
	);
}
