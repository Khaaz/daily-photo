"use client";

import {
	Avatar,
	Flex,
	Heading,
	Image,
	NextLink,
	Text,
} from "@/components/chakra.jsx";

const NavLink = ( { text, href } ) => (
	<NextLink href={ href } fontSize={20} fontWeight={600} mx={{ md: 15 }} my={{ base: 2, md: 0 }} px="0.7rem" py="0.4rem" borderRadius="12px" transition="all ease-in-out .3s" _hover={{ bg: "accent" }}>
		{ text }
	</NextLink>
);

const Header = () => (
	<Flex h="100px" w="100%" justifyContent="space-between" alignItems="center" p={10} zIndex="100" position="sticky" top="0" backgroundColor="color-mix(in srgb, var(--chakra-colors-bg) 90%, transparent)">
		<Flex alignItems="center" justifyContent="center" gap={2}>
			<Image src="/logo_white.png" alt="Daily Photos" />
			<Heading as="h1" fontSize={40} fontWeight={600} ml={2} my="auto">Daily Photo</Heading>
		</Flex>
		<Flex justifyContent="space-between">
			<Flex justifyContent="space-around" alignItems="center" flexDirection={{ base: "column", lg: "row" }}>
				<NavLink href={"/"} text="Accueil" />
				<NavLink href={"/challenges"} text="Challenges" />
				<NavLink href={"/bonus"} text="Bonus" />
			</Flex>
			<Flex flexDirection="column" alignItems="center">
				<Avatar
					size={"md"}
					src={"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"}
				/>
				<Text>Micka</Text>
			</Flex>
		</Flex>
	</Flex>
			
);

export { Header };
