"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
	Avatar,
	Box,
	Flex,
	Heading,
	Image,
	NextLink,
	Text,
} from "@/components/chakra.jsx";
import { IconButton } from "@/components/icon-button.jsx";
import { LinkContainer } from "@/components/link-container.jsx";

const NavLink = ( { text, href } ) => (
	<NextLink href={ href } fontSize={20} fontWeight={600} mx={{ md: 15 }} my={{ base: 2, md: 0 }} px="0.7rem" py="0.4rem" borderRadius="12px" transition="all ease-in-out .3s" _hover={{ bg: "accent" }}>
		{ text }
	</NextLink>
);

const Header = () => {
	const [isOpen, setValue] = useState(false);

	return 	(
		<Box display={{ base: "block", lg: "flex" }} w="100%" justifyContent="space-between" alignItems="center" p={10} zIndex="100" position="sticky" top="0" backgroundColor="color-mix(in srgb, var(--chakra-colors-bg) 90%, transparent)">
			<Flex flexGrow={{ base: 1, lg: 0 }} justifyContent="space-between">
				<Flex my="auto">
					<LinkContainer href="/">
						<Flex alignItems="center" justifyContent="center" gap={2}>
							<Image src="/logo_white.png" alt="Daily Photos" />
							<Heading as="h1" fontSize={40} fontWeight={600} ml={2} my="auto">Daily Photo</Heading>
						</Flex>
					</LinkContainer>
				</Flex>
				<IconButton
					Icon={HamburgerIcon}
					variant="primary"
					onClick={( () => setValue(!isOpen) )}
					display={{ base: "flex", lg: "none" }}
					aria-description="Open Navigation Menu"
				/>
			</Flex>
			<Box display={{ base: !isOpen ? "none" : "flex", lg: "flex" }} flexDirection={{ base: "column", lg: "row" }} justifyContent="space-around">
				<Flex flexDirection={{ base: "column", lg: "row" }} w="100%" justifyContent="space-around" alignItems={{ base: "flex-start", lg: "center" }} >
					<NavLink href={"/"} text="Accueil" />
					<NavLink href={"/challenges"} text="Challenges" />
					<NavLink href={"/bonus"} text="Bonus" />
				</Flex>
				<Flex flexDirection={{ base: "row", lg: "column" }} w="100%" justifyContent={{ base: "flex-start", lg: "center" }} alignItems="center" mx={{ md: 15 }} my={{ base: 2, md: 0 }} px="0.7rem" py="0.4rem">
					<Avatar
						size={"md"}
						src={"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"}
					/>
					<Text>Micka</Text>
				</Flex>
			</Box>
		</Box>
			
	);
};

export { Header };
