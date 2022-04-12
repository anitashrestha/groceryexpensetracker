import React from "react";

import AddTransaction from "./AddTransactionModalComponent/AddTransactionModal";
import "../components/modal.css";

const Modal = (props) => {
	return (
		<div className="modal">
			<section className="modal-main">
				<span
					className="close-icon"
					onClick={() => props.setOpen(!props.isOpen)}
				>
					x
				</span>
				<AddTransaction />
			</section>
		</div>
	);
};
export default Modal;
