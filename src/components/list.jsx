import { Grid } from "@/components/chakra.jsx";

const List = ( { children, ...props } ) => (
	<Grid gridTemplateColumns="repeat(auto-fill, 300px)" py="1.5rem" gap="4rem" {...props}>
		{children}
	</Grid>
);

export { List };
