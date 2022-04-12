import React from "react";

import "../AddTransactionModalComponent/addtransactionmodal.css";

const AddTransaction = (handleChange, handleSubmit) => {
	return (
		<>
			<div className="transaction-modal">
				<div className="header-title">
					<span className="title-text">Add Transaction</span>
				</div>
				<div className="transaction-content"></div>
				<div className="transaction-action">
					<button className="action-btn cancel">Cancel</button>
					<button
						type="submit"
						className="action-btn save"
						onClick={handleSubmit}
					>
						Save
					</button>
				</div>
			</div>

			<div className="form-row row">
				<div className="col">
					<input
						type="text"
						className="form-control"
						placeholder="Category"
						name="category"
						onChange={handleChange}
					/>
				</div>
				<div className="col">
					<input
						type="email"
						className="form-control"
						placeholder="Vendors"
						name="vendors"
						onChange={handleChange}
					/>
				</div>
				<div className="col">
					<input
						type="text"
						className="form-control"
						placeholder="Amount"
						name="amount"
						onChange={handleChange}
					/>
				</div>
				<div className="col">
					<button type="button" className="btn btn-primary">
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Save
					</button>
				</div>
			</div>
		</>
	);
};
export default AddTransaction;
