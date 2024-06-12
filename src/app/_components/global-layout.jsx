"use client";

import {
	Flex,
} from "@/components/chakra.jsx";

import { Header } from "./header/header.jsx";

export function GlobalLayout( { children } ) {
	return (
		<Flex flexDirection="column" h="100%">
			<Header/>
			<Flex flexDirection="column" minHeight="100vh" pt="3%" px="5%" pb="5%">
				<Flex flex="1">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}
