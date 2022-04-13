import React, { useState } from "react";
import TransactionList from "../components/TransactionComponent/TransactionList";
import TransactionData from "../components/TransactionComponent/TransactionData";
import Modal from "../components/Modal";

const HomePage = () => {
	const [toggle, setToggle] = useState(null);
	const [isPopupOpen, setPopupIsOpen] = useState(false);

	const [formInputData, setFormInputData] = useState({
		fullName: "",
		emailAddress: "",
		salary: "",
	});

	let handleToggle = (id) => {
		if (toggle === id) {
			setToggle(null);
			return false;
		}
		setToggle(id);
	};

	const handleChange = (evnt) => {
		const newInput = (data) => ({
			...data,
			[evnt.target.name]: evnt.target.value,
		});
		setFormInputData(newInput);
	};

	const handleSubmit = (evnt) => {
		evnt.preventDefault();
		const checkEmptyInput = !Object.values(formInputData).every(
			(res) => res === ""
		);
		if (checkEmptyInput) {
			const newData = (data) => [...data, formInputData];
			// setRowsData(newData);
			const emptyInput = { fullName: "", emailAddress: "", salary: "" };
			setFormInputData(emptyInput);
		}
	};

	return (
		<>
			<div className="container">
				{/* side fixed header */}
				{/* <div className="fixed-menu-bar">
					<span className="menu-item">
						<span className="menu-link">Menu</span>
					</span>
					<span className="menu-item">
						<span className="menu-link">Transactions</span>
					</span>
					<span className="menu-item">
						<span className="menu-link">Report</span>
					</span>
					<span className="menu-item">
						<span className="menu-link">Budget</span>
					</span>
					<span className="menu-item">
						<span className="menu-link">Vendors</span>
					</span>
				</div> */}

				{/* <!-- Top fixed header --> */}
				{/* <div className="fixed-header">
					<div className="header-container">
						<div className="left-header-item left-offset">
							<div className="nav-bar">
								<span className="name">Total :</span>
								<span className="amount expense">$155</span>
							</div>
						</div>
						<div className="right-header-item right-offset">
							<div className="search">
								<label className="relative block">
									<span className="sr-only">Search</span>

									<input
										className=""
										placeholder="Search for anything..."
										type="text"
										name="search"
									/>
								</label>
							</div>
							{/* <SearchBar /> */}
				{/* <div className="add-transaction">
								<button
									className="btn btn-green"
									onClick={() => {
										setPopupIsOpen(!isPopupOpen);
									}}
								>
									ADD TRANSACTIONS
								</button>
							</div>
						</div>
					</div>
				</div>  */}

				{/* main container */}
				<div className="main-container">
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
								handleSubmit={handleSubmit}
								handleChange={handleChange}
							/>

							{/* Accordion */}
						</div>
					</div>
				</div>

				{/* Add Transactions form popup				 */}

				{isPopupOpen && <Modal isOpen={isPopupOpen} setOpen={setPopupIsOpen} />}
			</div>
		</>
	);
};

export default HomePage;
