import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Transactions from "./pages/Transactions";
import NavBar from "./components/NavBar/NavBar";
import FixedHeader from "./components/FixedHeader/FixedHeader";
import About from "./pages/About";

import "./styles.css";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<NavBar />
					<FixedHeader />
					{/* to fit with css provided wrap with div with id page-body */}
					<div id="page-body">
						{/* main container */}
						<div className="master-container">
							<div className="master-detail-container">
								<Routes>
									<Route path="/" element={<HomePage />} exact />
									<Route
										path="/transactions"
										element={<Transactions />}
										exact
									/>
									<Route path="/about" element={<About />} exact />
								</Routes>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
