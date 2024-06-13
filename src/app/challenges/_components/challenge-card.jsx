"use client";

import {
	Flex,
	Text,
	useToast,
} from "@/components/chakra.jsx";
import { IconButton } from "@/components/icon-button.jsx";
import { CheckOffIcon, CheckOnIcon } from "@/components/icons/icons.jsx";
import { CHALLENGE_SUCCESS } from "@/configs/data.js";
import { pickRandom } from "@/helpers/date.js";

import { validateChallenge } from "../action.js";

const ChallengeCard = ( { challenge } ) => {
	const toast = useToast();

	const onClick = () => {
		validateChallenge(challenge);

		if (!challenge.done) {
			const successSentences = pickRandom(CHALLENGE_SUCCESS);

			toast( {
				title: "Challenge validé !",
				description: `"${successSentences}"`,
				status: "success",
				duration: 5000,
				isClosable: true,
			} );
		}
	};
	return (
		<Flex key={challenge.id}
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			color= "white"
			h="150px"
			w="300px"
			p="16px"
			boxShadow= "0 0px 8px var(--chakra-colors-white)"
			border="1px solid"
			borderColor= "white"
			borderRadius="8px">
			<Flex flexDirection="column" gap={3}>
				<Text fontSize="24px" fontWeight="bold">Challenge #{challenge.id}</Text>
				<Text fontSize="16px">{challenge.description}</Text>
			</Flex>
			<IconButton onClick={onClick} Icon={challenge.done ? CheckOnIcon : CheckOffIcon} background="transparent" my="auto"/>
		</Flex>

	);
};

export { ChallengeCard };
