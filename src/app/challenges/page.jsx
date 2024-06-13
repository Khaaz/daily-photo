import {
	Flex,
	Heading,
	Text,
} from "@/components/chakra.jsx";
import { fetchChallenges } from "@/datastore/lib.js";

import { Challenges } from "./_components/challenges.jsx";

export async function getServerSideData() {
	const challenges = await fetchChallenges();

	const totalChallenges = challenges.length;
	const picked = challenges.filter(c => c.picked);
	const totalDone = picked.filter(c => c.done).length;
	return { challenges: picked, total: totalChallenges, done: totalDone };
}

export default async function Page() {
	const { challenges, total, done } = await getServerSideData();

	return (
		<Flex flexDirection="column" w="100%">
			<Heading color="accent" fontSize="64px">Les challenges</Heading>
			<Text fontSize="16px" py="40px">
				{
					"Tu disposes d'un challenge par jour qui se cumule à compter du 12 juin. Les thèmes imposés ici sont très larges. Ils te permettent surtout de te donner une direction sans te restreindre. Interprète les comme tu veux et laisse libre cours à ton imagination. N'hésite donc surtout pas à tester des choses et expérimenter."
				}
			</Text>
			<Challenges challenges={challenges} total={total} done={done}/>
		</Flex>
	);
}
