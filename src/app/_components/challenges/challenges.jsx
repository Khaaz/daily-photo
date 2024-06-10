"use client";

import {
	Button,
	Flex,
} from "@/components/chakra.jsx";
import { List } from "@/components/list.jsx";

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
			<Button alignSelf="center" onClick={ () => console.log("click")} backgroundColor="accent" color="white" _hover={{ textDecoration: "none", backgroundColor: "white", color: "accent" }} fontSize="16px" fontWeight="bold" w="fit-content" p="16px">
				Decouvrir les challenges
			</Button>
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
