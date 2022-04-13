import React, { useState } from "react";
import TransactionList from "../components/TransactionComponent/TransactionList";
import TransactionData from "../components/TransactionComponent/TransactionData";

const Transactions = () => {
	const [toggle, setToggle] = useState(null);

	let handleToggle = (id) => {
		if (toggle === id) {
			setToggle(null);
			return false;
		}
		setToggle(id);
	};

	return (
		<>
			<div className="transactionlist-board">
				<div className="tab-container">
					<ul className="nav-tab">
						<li>
							<button>LAST MONTH</button>
						</li>
						<li>
							<button>THIS MONTH</button>
						</li>
						<li>
							<button>NEXT MONTH</button>
						</li>
					</ul>
				</div>

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
						transactionData={TransactionData}
						toggle={toggle}
						handleToggle={handleToggle}
					/>

					{/* Accordion */}
				</div>
			</div>

			{/* Add Transactions form popup				 */}
		</>
	);
};

export default Transactions;
