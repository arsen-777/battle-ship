import React, { useRef } from "react";
import modalStyle from "./modalStyle.module.css";
import useClickOutside from "../../hooks/useClickOutside";
export default function Modal({ toggleModal }) {
	const ref = useRef(null);

	// useClickOutside(ref, () => toggleModal());
	return <div ref={ref} className={modalStyle.modal}></div>;
}
