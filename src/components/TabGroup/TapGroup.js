import React, { useState } from "react";
import styled from "styled-components";

const Tab = styled.button`
	font-size: 20px;
	padding: 10px 60px;
	cursor: pointer;
	opacity: 0.6;
	background: white;
	border: 0;
	outline: 0;

	${({ active }) =>
		active &&
		`
    border-bottom: 2px solid black;
    opacity:1;
    `}
`;

const ButtonGroup = styled.div`
	display: flex;
`;

const types = ["Last Month", "This Month", "Future"];

const TabGroup = () => {
	const [active, setActive] = useState(types[1]);
	return (
		<>
			<ButtonGroup>
				{types.map((type) => (
					<Tab
						key={type}
						active={active === type}
						onclick={() => setActive(type)}
					>
						{type}
					</Tab>
				))}
			</ButtonGroup>

			<p>content {active} </p>
		</>
	);
};
export default TabGroup;
