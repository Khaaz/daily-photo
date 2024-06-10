import NextLink from "next/link";
import PropTypes from "prop-types";

import { LinkBox, LinkOverlay } from "@/components/chakra.jsx";

const LinkContainer = ( {
	children, href, color, _hover, w, ...props
} ) => (
	<LinkBox as="article" {... (color && { color } )} {... (_hover && { _hover } )} {... (w && { w } )} {...props}>
		<LinkOverlay as={NextLink} href={href} passHref>
			{children}
		</LinkOverlay>
	</LinkBox>
);

LinkContainer.propTypes = {
	href: PropTypes.string.isRequired,
	color: PropTypes.string,
	_hover: PropTypes.object,
	w: PropTypes.string,
};

export { LinkContainer };
