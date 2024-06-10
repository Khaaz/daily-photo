import { fetchChallenges } from "src/datastore/lib";

import {
	Flex,
	Heading,
} from "@/components/chakra.jsx";

import { Challenges } from "../_components/challenges/challenges.jsx";

export async function getServerSideData() {
	const challenges = await fetchChallenges();

	return challenges;
}

export default async function Page() {
	const challenges = await getServerSideData();

	return (
		<Flex flexDirection="column" w="100%">
			<Heading color="accent" fontSize="64px" pb="40px">Les challenges</Heading>
			<Challenges challenges={challenges}/>
		</Flex>
	);
}
