import {
	Divider,
	Flex,
	Heading,
	Image,
	NextLink,
	Text,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";

export default async function Page() {
	return (
		<>
			<Flex flexDirection="column" w="100%" gap="3.5rem" pb="5rem">
				<Flex flexDirection={{ base: "column", lg: "row" }} w="100%" alignItems="center" justifyContent="space-between">
					<Flex flexDirection="column">
						<Heading fontSize={{ base: "70px", lg: "96px" }} fontWeight="bold" color="accent">{"Daily photo,"}</Heading>
						<Heading fontSize={{ base: "70px", lg: "96px" }} fontWeight="bold" color="accent">{"c'est quoi ?"}</Heading>
						<Text fontSize="20px" mt="24px">54 challenges, 54 photos. Un site sur mesure pour renouer avec ta passion.</Text>
					</Flex>
					<Image src="/daily-photo.png" alt="Daily Photo logo" height="400px" mr="5%"/>
				</Flex>
				<Divider />
				<Flex flexDirection="column" w="100%" gap={8}>
					<Heading fontSize="32px" fontWeight="bold">Pourquoi faire ?</Heading>
					<Text fontSize="16px">
						{
							`Pour tes 54 ans, nous avons eu une idée. Cela fait maintenant un moment que tu évoques parfois ton envie de refaire de la photo mais tu ne prends pas forcément le temps.
							Ce site est ici pour répertorier un ensemble de challenge, t'imposant des contraintes afin de mettre à l'épreuve ta créativité.
							Ce challenge tu peux le réaliser comme tu le souhaites (mais par exemple ces vacances d'été sont un bon moyen de prendre ce temps).
							Pour le moment tu peux utiliser ton appareil photo, ton téléphone, et plus tard ton nouveau téléphone (le google pixel, c'est lourd).
							Peut être que ce challenge te donneras envie d'investir plus tard, dans un appareil plus performant.`
						}
					</Text>
					<Text fontSize="16px">
						{
							`Ce cadeau prend aussi en compte une aide sur l'installation et l'utilisation de logiciels de retouches photos, si l'envie te prend d'apprendre un peu plus cet art. (Voir plus dans l'onglet bonus).`
						}
					</Text>
					<CtaButton href={"/challenges"} as={NextLink}>Commencer les challenges</CtaButton>
				</Flex>
			</Flex>
		</>
	);
}
