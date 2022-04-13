import React, { useState } from "react";

const FixedHeader = () => {
	const [isPopupOpen, setPopupIsOpen] = useState(false);

	return (
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

							<input
								className=""
								placeholder="Search for anything..."
								type="text"
								name="search"
							/>
						</label>
					</div>
					{/* <SearchBar /> */}
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
				</div>
			</div>
		</div>
	);
};

export default FixedHeader;
