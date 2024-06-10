"use client";

import { Icon } from "@/components/chakra.jsx";

const defaultProps = {
	viewBox: "0 0 48 48",
	w: "48px",
	h: "48px",
	fill: "none",
	color: "icon",
};

export const CheckOffIcon = (props) => (
	<Icon {...defaultProps} {...props}>
		<circle cx="24" cy="24" r="24" fill="black"/>
		<path d="M13 24.5L19 32L36 15" stroke="#999999" strokeWidth="4"/>
	</Icon>
);

export const CheckOnIcon = (props) => (
	<Icon {...defaultProps} {...props}>
		<circle cx="24" cy="24" r="24" fill="#009444"/>
		<path d="M13 25.5L19 33L36 16" stroke="white" strokeWidth="4"/>
	</Icon>
);
