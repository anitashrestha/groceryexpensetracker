import React from "react";
//import SearchBar from "../components/searchBar";
import TransactionCard from "../components/AccordionComponent/Accordion";
import { transactionData } from "../data/content";

const HomePage = () => {
	return (
		<>
			<div className="container">
				{/* side fixed header */}
				<div className="fixed-menu-bar">
					<span className="menu-item">
						<a className="menu-link">Menu</a>
					</span>
					<span className="menu-item">
						<a className="menu-link">Transactions</a>
					</span>
					<span className="menu-item">
						<a className="menu-link">Report</a>
					</span>
					<span className="menu-item">
						<a className="menu-link">Budget</a>
					</span>
					<span className="menu-item">
						<a className="menu-link">Vendors</a>
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
									<a>LAST MONTH</a>
								</li>
								<li>
									<a>THIS MONTH</a>
								</li>
								<li>
									<a>NEXT MONTH</a>
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
							<div className="transaction-card">
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
							</div>
							{/* transaction card end*/}

							{/* Accordion */}

							<div className="accordion">
								<TransactionCard data={transactionData} />
							</div>

							{/* Accordion */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
