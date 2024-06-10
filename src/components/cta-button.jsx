import {
	Button,
} from "@/components/chakra.jsx";

const CtaButton = ( {
	children, ...props
} ) => (
	<Button
		backgroundColor="accent"
		color="white"
		_hover={{ textDecoration: "none", backgroundColor: "white", color: "accent" }}
		fontSize="16px"
		fontWeight="bold"
		w="fit-content"
		p="20px"
		{...props}>
		{children}
	</Button>
);

export { CtaButton };
