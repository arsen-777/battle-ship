import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import shipsStyle from "./shipsStyle.module.css";
import ship from "../acets/ship2.png";

export default function Ships({
	value,
	setValue,
	setHorOrVert,
	dispatch,
	state,
}) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const toggleModal = () => {
		setIsOpenModal(!isOpenModal);
	};
	const one = () => {
		setHorOrVert("horizon");
		setValue(1);
		setIsOpenModal(!isOpenModal);
	};
	const twoHorizon = () => {
		setHorOrVert("horizon");
		setValue(2);
		// dispatch({ type: ACTION_TYPES.IS_NAV_HERE, value });
		setIsOpenModal(!isOpenModal);
	};
	const twoVertical = () => {
		setHorOrVert("vertical");
		setValue(2);
		setIsOpenModal(!isOpenModal);
	};
	const treeHorizon = () => {
		setHorOrVert("horizon");
		setValue(3);
		// dispatch({ type: ACTION_TYPES.IS_NAV_HERE, value });
		setIsOpenModal(!isOpenModal);
	};
	const treeVertical = () => {
		setHorOrVert("vertical");
		setValue(3);
		setIsOpenModal(!isOpenModal);
	};
	const fourVertical = () => {
		setHorOrVert("vertical");
		setValue(4);
		setIsOpenModal(!isOpenModal);
	};
	const fourHorizon = () => {
		setHorOrVert("horizon");
		setValue(4);
		setIsOpenModal(!isOpenModal);
	};
	return (
		<div className="ships-block">
			<div className={shipsStyle.horizontalBlock}>
				{state.xaxacox1.ships["1"].length && (
					<div onClick={one} className={shipsStyle.one}>
						<div>
							<img src={ship} alt="" />
						</div>
						<span> 1 x {state.xaxacox1.ships["1"].length}</span>
					</div>
				)}
				{state.xaxacox1.ships["2"].length && (
					<div onClick={twoHorizon} className={shipsStyle.two}>
						<div>
							<img src={ship} alt="" />
						</div>

						<span>2 x {state.xaxacox1.ships["2"].length}</span>
					</div>
				)}
				{state.xaxacox1.ships["3"].length && (
					<div onClick={treeHorizon} className={shipsStyle.tree}>
						<div>
							<img src={ship} alt="" />
						</div>

						<span>3 x {state.xaxacox1.ships["3"].length}</span>
					</div>
				)}
				{state.xaxacox1.ships["4"].length && (
					<div onClick={fourHorizon} className={shipsStyle.four}>
						<div>
							<img src={ship} alt="" />
						</div>
						<span>4 x {state.xaxacox1.ships["4"].length}</span>
					</div>
				)}
			</div>

			<div className={shipsStyle.verticalBlcok}>
				{state.xaxacox1.ships["2"].length && (
					// <div className={shipsStyle.treeblock}>
					<div onClick={twoVertical} className={shipsStyle.twoVertBlock}>
						<div className={shipsStyle.twovert}>
							<img src={ship} alt="" />2 x {state.xaxacox1.ships["2"].length}
						</div>
					</div>
					// </div>
				)}
				{state.xaxacox1.ships["3"].length && (
					// <div className={shipsStyle.treeblock}>
					<div onClick={treeVertical} className={shipsStyle.treeVertBlock}>
						<div className={shipsStyle.treevert}>
							<img src={ship} alt="" />3 x {state.xaxacox1.ships["3"].length}
						</div>
					</div>
					// </div>
				)}
				{state.xaxacox1.ships["4"].length && (
					// <div className={shipsStyle.tree}>
					<div onClick={fourVertical} className={shipsStyle.fourVertBlock}>
						<div className={shipsStyle.fourvert}>
							<img src={ship} alt="" />x {state.xaxacox1.ships["4"].length}
						</div>
					</div>
					// </div>
				)}
			</div>

			{/* {isOpenModal && <Modal toggleModal={toggleModal} />} */}
		</div>
	);
}
