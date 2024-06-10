"use client";
import PropTypes from "prop-types";

import { IconButton as ChakraIconButton } from "@/components/chakra.jsx";

const IconButton = ( { Icon, ...props } ) => (
	<ChakraIconButton
		w="fit-content"
		p="1rem"
		icon={<Icon boxSize="1.5rem" color="font"/>}
		{...props}
	/>
);

IconButton.propTypes = {
	Icon: PropTypes.elementType.isRequired,
};


export { IconButton };
