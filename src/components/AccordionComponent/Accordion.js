import React, { useState } from "react";

import "./Accordion.css";

const TransactionCard = (props) => {
	const [isActive, setIsActive] = useState(false);

	if (typeof props.data !== "object") {
		console.error("Data is not an object");
		return;
	}

	return props.data.map((transactionData) => {
		const date = new Date(transactionData.date);
		const day = date.getDate().toString().padStart(2, "0");
		const weekday = new Intl.DateTimeFormat("en-US", {
			weekday: "long",
		}).format(date);

		const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
			date
		);

		const year = date.getFullYear();

		let key = Math.random();
		return (
			<div id={key} key={key} className="transaction-card">
				<div className="transaction-header">
					<div
						key="{transactionData.date}"
						className="transaction-header-content"
						onClick={() => setIsActive(!isActive)}
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

						<div>{isActive ? "-" : "+"}</div>
					</div>
				</div>
				{isActive && <AccordionContent data={transactionData.items} />}
			</div>
		);
	});
};

const AccordionContent = (props) => {
	return props.data.map((item) => {
		return (
			<div key={Math.random()} className="transaction-items">
				<div className="transaction-item-wrap">
					<div className="transaction-item">
						<div className="transaction-item-content">
							<img alt="" className="transaction-icon" src={item.image} />
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
					</div>
				</div>
			</div>
		);
	});
};

export default TransactionCard;
