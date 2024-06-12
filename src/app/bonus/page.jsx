
import {
	Avatar,
	Flex,
	Heading,
	Text,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";

export default async function Page() {
	return (
		<Flex flexDirection="column" w="100%">
			<Heading color="accent" fontSize="64px" pb="40px">Bonus</Heading>
			<Text fontSize="16px" py="40px">
				Ton cadeau comprend des bonus. Tu pourras avoir accès à celui de ton choix au bout de 10 challenges complétés. Puis le deuxièmes au bout de 20 challenges complétés.
			</Text>
			<Flex flexDirection={{ base: "column", lg: "row" }} justifyContent="center" alignItems="center" w="100%" gap="5rem">
				<Flex flexDirection="column"
					justifyContent="center" alignItems="center"
					gap="2rem"
					w="100%"
					border="2px solid"
					borderColor= "accent"
					borderRadius="8px"
					p="1.5rem"
					h="40rem"
				>
					<Avatar
						size={"2xl"}
						src={"/bonus_1.png"}
					/>
					<Text color="accent" fontSize="32px" fontWeight="bold">Bonus 1</Text>
					<Text fontSize="16px">
						{
							"La photo demande malgré tout d'avoir un minimum de matériel pour avoir un résultat plutôt qualitatif. Pour le moment tu peux t'amuser avec le matériel que tu possèdes mais si tu te sens limités, investir dans ce domaine est conseillé."
						}
					</Text>
					<Text fontSize="16px" fontWeight="bold">
						{
							"Tu as donc le droit de conseils et d'un accompagnement pour l'achat d'un téléphone ou d'un appareil photo performant."
						}
					</Text>
					<CtaButton>Beneficier</CtaButton>
				</Flex>
				<Flex flexDirection="column"
					justifyContent="center" alignItems="center"
					gap="2rem"
					w="100%"
					border="2px solid"
					borderColor= "accent"
					borderRadius="8px"
					p="1.5rem"
					h="40rem"
				>
					<Avatar
						size={"2xl"}
						src={"/bonus_2.png"}
					/>
					<Text color="accent" fontSize="32px" fontWeight="bold">Bonus 2</Text>
					<Text fontSize="16px">
						{
							"De nos jours, l'art de la photographie ne réside plus seulement dans la prise de la photo mais aussi dans le travail et la touche personnel du photographe à retoucher ses photos. L'apprentissage et la connaissance des logiciels de retouches tels que Adobe PhotoShop ou Lightroom sont donc très importantes et peuvent faire passer cet art à un niveau supérieur."
						}
					</Text>
					<Text fontSize="16px" fontWeight="bold">
						{
							"Tu as donc le droit après t'être renseigné et avoir regardé quelques tutos sur ce travail d'avoir un accompagnement pour l'installation et la prise en main de ces logiciels."
						}
					</Text>
					<CtaButton>Beneficier</CtaButton>
				</Flex>
			</Flex>
		</Flex>
	);
}
