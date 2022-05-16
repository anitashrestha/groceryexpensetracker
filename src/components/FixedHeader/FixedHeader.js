import React from "react";

const FixedHeader = () => {
	return (
		<div className="fixed-header">
			<div className="header-container">
				<div className="left-header-item left-offset">
					<div className="logo-container">
						<a href="/" className="logo" aria-label="Homepage">
							Expense<span>Tracker</span>
						</a>
					</div>
					<div className="nav-bar">
						<span className="name">Total :</span>
						<span className="amount expense">$155</span>
					</div>
				</div>
				<div className="right-header-item right-offset">
					<div className="search">
						<label className="relative block">
							<input
								className=""
								placeholder="Search for anything..."
								type="text"
								name="search"
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FixedHeader;
