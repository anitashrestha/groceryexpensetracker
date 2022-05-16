import React, { useState } from "react";
import "../Modal/addtransaction.css";
import { saveTransaction } from "../services/transactionService";

const STATUS = {
	IDLE: "IDLE",
	SUBMITTED: "SUBMITTED",
	SUBMITTING: "SUBMITTING",
	COMPLETED: "COMPLETED",
};

//Declaring outside component to avoid recreation on each render
const emptyFormInput = {
	category: "",
	vendors: "",
	name: "",
	price: 0,
	date: "",
	description: "",
	location: "",
};

export default function AddTransaction({ isOpen, setOpen }) {
	const handleClose = () => setOpen(false);

	const [formInputData, setFormInputData] = useState(emptyFormInput);
	const [status, setStatus] = useState(STATUS.IDLE);
	const [touched, setTouched] = useState({});
	// const [saveError, setSaveError] = useState(null);

	// Derived state
	const errors = getErrors(formInputData);
	// const isValid = Object.keys(errors).length === 0;

	function handleChange(e) {
		e.persist(); //event remains pending even when its callback is activated.
		const formData = (data) => ({
			...data,
			[e.target.id]: e.target.value,
		});
		setFormInputData(formData);
	}

	function handleBlur(event) {
		event.persist();
		setTouched((cur) => {
			return { ...cur, [event.target.id]: true };
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setStatus(STATUS.SUBMITTING);
		console.log(formInputData);
		const txnData = {
			date: new Date(formInputData.date).toISOString(),
			location: null,
			vendors: formInputData.vendors,
			total_spent: formInputData.price,
			items: [
				{
					category: formInputData.category,
					description: formInputData.description,
					image: null,
					name: formInputData.name,
					price: formInputData.price,
				},
			],
		};
		saveTransaction(txnData);
		handleClose();
	};

	function getErrors(formInputData) {
		const result = {};
		if (!formInputData.category) result.category = "Category is required";
		if (!formInputData.vendors) result.vendors = "Vendors is required";
		if (!formInputData.name) result.name = "Name is required";
		if (!formInputData.price) result.price = "Price is required";
		if (!formInputData.date) result.date = "Date is required";

		return result;
	}

	// if (saveError) throw saveError,
	// if (status === STATUS.COMPLETED) {
	// 	return <h1>New transaction details added successfully!</h1>;
	// }

	return (
		<div className="modal">
			<section className="modal-main">
				<span className="close-icon" onClick={() => setOpen(!isOpen)}>
					x
				</span>
				<div className="transaction-modal">
					{/* {!isValid && status === STATUS.SUBMITTED && (
						<div role="alert">
							<p>Please fix the following errors:</p>
							<ul>
								{Object.keys(errors).map((key) => {
									return <li key={key}>{errors[key]}</li>,
								}
								)}
							</ul>
						</div>
					)} */}
					<form onSubmit={handleSubmit}>
						<div className="header-title">
							<span className="title-text">Add Transaction</span>
						</div>

						<div className="transaction-content">
							<div className="form-row row">
								<div className="col">
									<select
										className="form-control"
										id="category"
										value={formInputData.category}
										// onBlur={handleBlur}
										onChange={handleChange}
									>
										<option value="">Select Category</option>
										<option value="Fruit">Fruits</option>
										<option value="Vegetables">Vegetables</option>
										<option value="Pantry">Pantry</option>
										<option value="Meat">Meat</option>
										<option value="Dairy">Dairy</option>
										<option value="Bakery">Bakery</option>
										<option value="Frozen">Frozen</option>
										<option value="Household">Household</option>
									</select>

									<p role="alert" className="error-msg">
										{(touched.category || status === STATUS.SUBMITTED) &&
											errors.category}
									</p>
								</div>
								<div className="col">
									<select
										className="form-control"
										id="vendors"
										value={formInputData.vendors}
										// onBlur={handleBlur}
										onChange={handleChange}
									>
										<option value="">Select Vendors</option>
										<option value="Aldi">Aldi</option>
										<option value="Coles">Coles</option>
										<option value="IGA">IGA</option>
										<option value="Foodworks">Foodworks</option>
										<option value="Woolworth">Woolworth</option>
									</select>

									<p role="alert" className="error-msg">
										{(touched.vendors || status === STATUS.SUBMITTED) &&
											errors.vendors}
									</p>
								</div>
								<div className="col">
									<input
										type="text"
										className="form-control"
										id="location"
										placeholder="location"
										name="location"
										value={formInputData.location}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									<p role="alert" className="error-msg">
										{(touched.location || status === STATUS.SUBMITTED) &&
											errors.location}
									</p>
								</div>
							</div>
							<div className="form-row">
								<div className="col">
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="name"
										name="name"
										value={formInputData.name}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									<p role="alert" className="error-msg">
										{(touched.name || status === STATUS.SUBMITTED) &&
											errors.name}
									</p>
								</div>
								<div className="col">
									<input
										type="text"
										className="form-control"
										id="price"
										placeholder="price"
										name="price"
										value={formInputData.price}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									<p role="alert" className="error-msg">
										{(touched.price || status === STATUS.SUBMITTED) &&
											errors.price}
									</p>
								</div>
								<div className="col">
									<input
										type="date"
										className="form-control"
										id="date"
										placeholder="Date"
										name="date"
										value={formInputData.date}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									<p role="alert" className="error-msg">
										{(touched.date || status === STATUS.SUBMITTED) &&
											errors.date}
									</p>
								</div>
							</div>

							<div className="form-row">
								<div className="col col-textarea">
									<textarea
										type="text"
										id="description"
										className="form-control"
										placeholder="description"
										name="description"
										onBlur={handleBlur}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						<div className="transaction-action">
							<button className="action-btn cancel" onClick={handleClose}>
								Cancel
							</button>
							<input
								type="submit"
								className="action-btn save"
								value="Save transaction"

								// disabled={status === STATUS.SUBMITTING}
							/>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
