"use client";

import {
	Flex,
	Text,
} from "@/components/chakra.jsx";
import { IconButton } from "@/components/icon-button.jsx";
import { CheckOffIcon, CheckOnIcon } from "@/components/icons/icons.jsx";

const ChallengeCard = ( { challenge } ) => (
	<Flex key={challenge.id}
		flexDirection="row"
		justifyContent="space-between"
		alignItems="center"
		color= "white"
		h="150px"
		w="300px"
		p="16px"
		border="2px solid"
		borderColor= "white"
		borderRadius="8px">
		<Flex flexDirection="column" gap={3}>
			<Text fontSize="24px" fontWeight="bold">{challenge.name}</Text>
			<Text fontSize="16px">{challenge.description}</Text>
		</Flex>
		<IconButton onClick={( () => console.log("click") ) } Icon={challenge.done ? CheckOnIcon : CheckOffIcon} background="transparent" my="auto"/>
	</Flex>

);

export { ChallengeCard };
