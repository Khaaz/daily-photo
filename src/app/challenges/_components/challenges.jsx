"use client";

import {
	Flex,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";
import { List } from "@/components/list.jsx";

import { fetchChallenge } from "../action.js";
import { ChallengeCard } from "./challenge-card.jsx";

const Challenges = ( { challenges } ) => {
	// const [items, setItems] = useState( [] );
	// const [loading, setLoading] = useState(true);

	// useEffect( () => {
	// 	async function getData() {
	// 		const data = await fetchItems();
	// 		setItems(data);
	// 		setLoading(false);
	// 	}
	// 	getData();
	// }, [] );

	// const handleAddItem = async() => {
	// 	const newItem = { name: "New Item", createdAt: new Date() };
	// 	await addItem(newItem);
	// 	const data = await fetchItems();
	// 	setItems(data);
	// };
	
	console.log(challenges);

	return (
		<Flex flexDirection="column" gap="10">
			<CtaButton alignSelf="center" onClick={fetchChallenge}>
				Decouvrir les challenges
			</CtaButton>
			<List>
				{
					challenges.map(e => (
						<ChallengeCard key={e.id} challenge={e} />
					)	)
				}
			</List>

		</Flex>

	);
};

export { Challenges };
