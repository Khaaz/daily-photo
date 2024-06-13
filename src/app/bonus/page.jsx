import {
	Flex,
	Heading,
	Text,
} from "@/components/chakra.jsx";
import { fetchChallenges } from "@/datastore/lib.js";

import { Bonus } from "./_components/bonus.jsx";

export async function getServerSideData() {
	const challenges = await fetchChallenges();

	const totalDone = challenges.filter(c => c.done).length;
	return { done: totalDone };
}

export default async function Page() {
	const { done } = await getServerSideData();

	return (
		<Flex flexDirection="column" w="100%">
			<Heading color="accent" fontSize="64px">Bonus</Heading>
			<Text fontSize="16px" py="40px">
				Ton cadeau comprend des bonus. Tu pourras avoir accès au premier au bout de 10 challenges complétés. Puis le deuxième au bout de 20 challenges complétés.
			</Text>
			<Flex flexDirection={{ base: "column", lg: "row" }} justifyContent="center" alignItems="center" w="100%" gap="5rem">
				<Bonus
					id="1"
					description={
						"La photo demande malgré tout d'avoir un minimum de matériel pour avoir un résultat plutôt qualitatif. Pour le moment tu peux t'amuser avec le matériel que tu possèdes mais si tu te sens limités, investir dans ce domaine est conseillé."
					}
					headline={
						"Tu as donc le droit de conseils et d'un accompagnement pour l'achat d'un téléphone ou d'un appareil photo performant."
					}
					modalText={"Félicitations ! Contacte ton fils numéro 2."}
					requiredNumber={10}
					doneNumber={done}
					color="bonus_1"
				/>
				<Bonus
					id="2"
					description={
						"De nos jours, l'art de la photographie ne réside plus seulement dans la prise de la photo mais aussi dans le travail et la touche personnelle du photographe à retoucher ses photos. L'apprentissage et la connaissance des logiciels de retouches tels que Adobe PhotoShop ou Lightroom sont donc très importantes et peuvent faire passer cet art à un niveau supérieur."
					}
					headline={
						"Tu as donc le droit après t'être renseigné et avoir regardé quelques tutos sur ce travail d'avoir un accompagnement pour l'installation et la prise en main de ces logiciels."
					}
					modalText={"Félicitations ! Contacte ton fils numéro 1."}
					requiredNumber={20}
					doneNumber={done}
					color="bonus_2"
				/>
			</Flex>
		</Flex>
	);
}
