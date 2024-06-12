import {
	Flex,
	Heading,
	Text,
} from "@/components/chakra.jsx";
import { fetchChallenges } from "@/datastore/lib.js";

import { Challenges } from "./_components/challenges.jsx";

export async function getServerSideData() {
	const challenges = await fetchChallenges();

	return challenges.filter(c => c.picked).sort( (a, b) => a.id - b.id);
}

export default async function Page() {
	const challenges = await getServerSideData();

	return (
		<Flex flexDirection="column" w="100%">
			<Heading color="accent" fontSize="64px">Les challenges</Heading>
			<Text fontSize="16px" py="40px">
				{
					"Les thèmes imposés ici sont très larges. Ils te permettent surtout de te donner une direction sans te restreindre. Interprète les comme tu veux et laisse libre cours à ton imagination. N'hésite donc surtout pas à tester des choses et expérimenter."
				}
			</Text>
			<Challenges challenges={challenges}/>
		</Flex>
	);
}
