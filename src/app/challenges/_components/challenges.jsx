"use client";

import { useEffect, useState } from "react";

import {
	Flex,
	Text,
	useDisclosure,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";
import { List } from "@/components/list.jsx";
import { Modal } from "@/components/modal.jsx";
import { daysSinceDate } from "@/helpers/date.js";

import { pickChallenge, resetChallenges } from "../action.js";
import { ChallengeCard } from "./challenge-card.jsx";

const Challenges = ( { challenges, total, done } ) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const [remainingPicks, setRemainingPicks] = useState(null);
	useEffect(
		() => setRemainingPicks(daysSinceDate() - challenges.length),
		[challenges]
	);

	const tryToPickChallenge = async() => {
		const res = await pickChallenge();
		if (!res) {
			onOpen();
		}
	};

	return (
		<Flex flexDirection="column" gap="3rem">
			<Flex flexDirection={{ base: "column", lg: "row" }} justifyContent="space-between" alignItems={{ base: "center", lg: "flex-start" }} gap="10">
				<CtaButton onClick={tryToPickChallenge} >
					Decouvrir les challenges
				</CtaButton>
				<Modal isOpen={isOpen} onClose={onClose}
					valid={false}
					text={"Mange déja ca !! Tu n'as plus de challenges disponibles pour le moment, reviens demain !"}
				/>
				<CtaButton backgroundColor="incorrect" onClick={() => resetChallenges()}>
					Reset
				</CtaButton>
				<Flex flexDirection="column" justifyContent="center" alignItems="center"
					gap="12px"
					p="16px"
					border="1px solid"
					borderColor= "white"
					borderRadius="8px">
					<Text fontSize="20px" fontWeight="bold">Statistiques:</Text>
					<Flex w="100%" justifyContent="space-between" gap="12px">
						<Text fontSize="16px">Challenges complétés:</Text>
						<Text fontSize="16px">{done}</Text>
					</Flex>
					<Flex w="100%" justifyContent="space-between" gap="12px">
						<Text fontSize="16px">Challenges disponibles:</Text>
						<Text fontSize="16px">{remainingPicks}</Text>
					</Flex>
					<Flex w="100%" justifyContent="space-between" gap="12px">
						<Text fontSize="16px">Challenges restants:</Text>
						<Text fontSize="16px">{total - challenges.length}</Text>
					</Flex>
				</Flex>
			</Flex>
			<List>
				{
					challenges.sort( (a, b) => b.id - a.id).map(e => (
						<ChallengeCard key={e._id} challenge={e} />
					)	)
				}
			</List>

		</Flex>

	);
};

export { Challenges };
