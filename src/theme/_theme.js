import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/colors.js";
import { fonts } from "./foundations/fonts.js";
import { styles } from "./styles.js";

const config = {};

const theme = extendTheme( {
	config,
	styles,
	fonts,
	colors,
} );

export default theme;
