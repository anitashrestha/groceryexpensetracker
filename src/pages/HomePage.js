import React, { useState } from "react";
//import SearchBar from "../components/searchBar";
// import TransactionCard from "../components/AccordionComponent/TransactionCard";
import AccordionList from "../components/AccordionComponent/TransactionCard";
import TransactionData from "../components/AccordionComponent/TransactionData";

const HomePage = () => {
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
			<div className="container">
				{/* side fixed header */}
				<div className="fixed-menu-bar">
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
				</div>

				{/* <!-- Top fixed header --> */}
				<div className="fixed-header">
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
									<span className="absolute inset-y-0 left-0 flex items-center pl-2">
										<svg
											className="h-5 w-5 fill-gray-300"
											viewBox="0 0 20 20"
										></svg>
									</span>
									<input
										className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
										placeholder="Search for anything..."
										type="text"
										name="search"
									/>
								</label>
							</div>
							{/* <SearchBar /> */}
							<div className="add-btn">
								<button className="btn-green">ADD TRANSACTIONS</button>
							</div>
						</div>
					</div>
				</div>

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
							<div></div>

							{/* transaction card start*/}
							{/* <div className="transaction-card">
								<div className="transaction-list">
									<div className="transaction-header">
										<div className="transaction-header-content">
											<div className="date-view">
												<span className="view-date">09</span>
												<span className="view-date">
													<span className="day">Sunday</span>
													<span className="month-year">January 2022</span>
												</span>
											</div>

											<div className="vendor">
												<span className="vendor-name">Coles</span>
											</div>

											<div className="amount-view">
												<span className="amount expense">$150</span>
											</div>
										</div>
									</div>

									<div className="transaction-items">
										<div className="transaction-item-wrap">
											<div className="transaction-item">
												<div className="transaction-item-content">
													<img
														alt=""
														className="transaction-icon"
														src="https://static.moneylover.me/img/icon/ic_category_foodndrink.png"
													/>
													<p className="transaction-category-wrap">
														<span className="transaction-row">
															<span className="category-name">
																<span className="">Rice</span>
															</span>
															<span className="expense amount">$15</span>
														</span>
													</p>
													<p className="description">
														starlite rice from nepali store
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							{/* transaction card end*/}

							{/* Accordion */}

							{/* <TransactionCard
									transactionData={TransactionData}
									toggle={toggle}
									handleToggle={handleToggle}
								/> */}
							<AccordionList
								transactionData={TransactionData}
								toggle={toggle}
								handleToggle={handleToggle}
							/>

							{/* Accordion */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
