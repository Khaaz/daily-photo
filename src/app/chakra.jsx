"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
	ChakraProvider,
} from "@chakra-ui/react";

import theme from "../theme/_theme.js";

export function Chakra( { children } ) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme} resetCSS={true}>
				{children}
			</ChakraProvider>
		</CacheProvider>
	);
}
