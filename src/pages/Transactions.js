import React, { useState } from "react";
import TransactionList from "../components/TransactionComponent/TransactionList";
import { getTransaction } from "../components/TransactionComponent/services/transactionService";
import AddTransaction from "../components/TransactionComponent/Modal/AddTransaction";

import styled from "styled-components";

const Tab = styled.button`
	font-size: 20px;
	padding: 10px 60px;
	cursor: pointer;
	opacity: 0.6;
	background: white;
	border: 0;
	outline: 0;

	${({ active }) =>
		active &&
		`
    border-bottom: 2px solid black;
    opacity:1;
    `}
`;

const ButtonGroup = styled.div`
	display: flex;
`;

const types = ["Last Month", "This Month", "Future"];

const Transactions = () => {
	const [toggle, setToggle] = useState(null);
	const [active, setActive] = useState(types[0]);

	const [isPopupOpen, setPopupIsOpen] = useState(false);

	let handleToggle = (id) => {
		if (toggle === id) {
			setToggle(null);
			return false;
		}
		setToggle(id);
	};

	return (
		<div>
			<div className="transactionlist-board">
				<div className="add-transaction">
					<button
						className="btn btn-green"
						onClick={() => {
							setPopupIsOpen(!isPopupOpen);
						}}
					>
						ADD TRANSACTIONS
					</button>
				</div>
				{isPopupOpen && (
					<AddTransaction isOpen={isPopupOpen} setOpen={setPopupIsOpen} />
				)}

				<div className="tab-container">
					<ButtonGroup>
						{types.map((type, key) => (
							<Tab
								key={`tab-btn-${key++}`}
								active={active === type}
								onClick={() => setActive(type)}
							>
								{type}
							</Tab>
						))}
					</ButtonGroup>

					<div className="transaction-container">
						<div className="transaction-overview">
							<div className="transaction-card">
								<div className="outflow">
									<span className="">Outflow</span>
									<span className="amount expense">$155.00</span>
								</div>
							</div>
						</div>
						
						<TransactionList
							transactionData={getTransaction()}
							toggle={toggle}
							handleToggle={handleToggle}
						/>

					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
