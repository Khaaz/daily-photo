"use client";

import {
	Flex,
	Text,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";
import { List } from "@/components/list.jsx";
import { daysSinceDate } from "@/helpers/date.js";

import { pickChallenge, resetChallenges } from "../action.js";
import { ChallengeCard } from "./challenge-card.jsx";

const Challenges = ( { challenges } ) => {
	const daysSince = daysSinceDate();
	const remainingPicks = daysSince - challenges.length;

	return (
		<Flex flexDirection="column" gap="10">
			<Flex flexDirection="row" justifyContent="center" gap="10">
				<CtaButton alignSelf="center" onClick={() => pickChallenge()}>
					Decouvrir les challenges
				</CtaButton>
				{
					remainingPicks > 0
						? <Text>{remainingPicks} challenges disponibles</Text>
						: <Text>{`"Mange déja ca", tu n'a plus de challenges disponibles pour le moment, reviens demain`}</Text>
				}
				<CtaButton alignSelf="center" backgroundColor="incorrect" onClick={() => resetChallenges()}>
					Reset
				</CtaButton>
			</Flex>
			<List>
				{
					challenges.map(e => (
						<ChallengeCard key={e._id} challenge={e} />
					)	)
				}
			</List>

		</Flex>

	);
};

export { Challenges };
