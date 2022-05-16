import React, { useState } from "react";

import "./TransactionCard.css";

const TransactionList = ({ transactionData, toggle, handleToggle }) => {
	return transactionData.map((transactionData, id) => {
		const date = new Date(transactionData.date);

		const day = date.getDate().toString().padStart(2, "0");

		const weekday = new Intl.DateTimeFormat("en-US", {
			weekday: "long",
		}).format(date);

		const month = new Intl.DateTimeFormat("en-US", {
			month: "long",
		}).format(date);

		const year = date.getFullYear();

		return (
			<div key={`txn-cntr-${id++}`} className="transaction-container">
				<div key={id} className="transaction-card">
					<div className="transaction-header">
						<div
							key="{transactionData.date}"
							className="transaction-header-content"
							onClick={() => handleToggle(id)}
						>
							<div className="date-view">
								<span className="view-date">{day}</span>
								<span className="view-day">
									<span className="day">{weekday}</span>
									<span className="month-year">
										{month} {year}
									</span>
								</span>
							</div>

							<div className="vendor">
								<span className="vendor-name">{transactionData.vendors}</span>
							</div>

							<div className="amount-view">
								<span className="amount expense total-expense">
									{transactionData.total_spent}
								</span>
							</div>

							<div>{id === toggle ? "-" : "+"}</div>
						</div>
					</div>
					{id === toggle ? (
						<AccordionContent data={transactionData.items} />
					) : (
						""
					)}
				</div>
			</div>
		);
	});
};

const AccordionContent = (props) => {
	// boolean state to know if we are editing (this will let us display
	// different inputs based on a condition (conditional rendering)
	// const [isEditing, setIsEditing] = useState(false);
	// object state to set so we know which todo item we are editing
	// const [currentTodo, setCurrentTodo] = useState({});

	

	const handleDeleteClick = (item) => {

	}
	return props.data.map((item) => {
		return (
			<div key={Math.random()} className="transaction-items">
				<div className="transaction-item-wrap">
					<div className="transaction-item">
						<div className="transaction-item-content">
							<img alt="" className="transaction-icon" src={item.image} />
							<div className="item-content">
								<p className="transaction-category-wrap">
									<span className="transaction-row">
										<span className="category-name">
											<span className="">{item.name}</span>
										</span>
										<span className="expense amount">{item.price}</span>
									</span>
								</p>
								<p className="description">{item.description}</p>
							</div>
							<div className="action-div">
								<button className=" btn-green-text">EDIT</button>
								<button
									className=" btn-red-text"
									onClick={() => handleDeleteClick(item)}
								>
									DELETE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});
};

export default TransactionList;
