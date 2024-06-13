import {
	Flex,
	Heading,
	Image,
	Text,
} from "@/components/chakra.jsx";

const Badge = ( { children } ) => <Text fontSize="16px" backgroundColor="accent" borderRadius="8px" px="10px" py="6px">{children}</Text>;

export default async function Page() {
	return (
		<Flex flexDirection="column" w="100%" gap="2rem">
			<Heading color="accent" fontSize="64px">Profil</Heading>
			
			<Flex flexDirection={{ base: "column", lg: "row" }} gap="50px">
				<Image src="/profile_full.jpg" alt="Profile full picture" height="65vh" borderRadius="8px"/>
				<Flex flexDirection="column" gap="32px">

					{/* section */}
					<Flex flexDirection="column" gap="12px">
						<Text fontSize="20px" fontWeight="bold">Identité</Text>
						<Flex flexDirection="row" gap="12px">
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Nom</Text>
								<Badge>Bellec</Badge>
							</Flex>
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Prénom</Text>
								<Badge>Mickael</Badge>
							</Flex>
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Surnom</Text>
								<Badge>Airzone</Badge>
							</Flex>
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Profession</Text>
								<Badge>Chef de Moulins</Badge>
							</Flex>
						</Flex>
					</Flex>
			
					{/* section */}
					<Flex flexDirection="column" gap="12px">
						<Text fontSize="20px" fontWeight="bold">Statistiques</Text>
						<Flex flexDirection="row" gap="12px">
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Taille</Text>
								<Badge>1m 71</Badge>
							</Flex>
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Corpulence</Text>
								<Badge>Belle veine sur le bibi</Badge>
							</Flex>
							<Flex flexDirection="column" gap="8px">
								<Text fontSize="16px">Sosie</Text>
								<Badge>Tom Cruise</Badge>
							</Flex>
						</Flex>
					</Flex>

					{/* section */}
					<Flex flexDirection="column" gap="12px">
						<Text fontSize="20px" fontWeight="bold">Succés</Text>
						<Flex flexDirection="row" gap="12px">
							<Badge>Meilleur que Louison au javelot</Badge>
							<Badge>Est un espion</Badge>
							<Badge>28 ans de mariage</Badge>
						</Flex>
					</Flex>

					{/* section */}
					<Flex flexDirection="column" gap="12px">
						<Text fontSize="20px" fontWeight="bold">Plaisirs coupables</Text>
						<Flex flexDirection="row" gap="12px">
							<Badge>{"Les M&M's"}</Badge>
							<Badge>World Ward Z</Badge>
							<Badge>Mettre de la gomme dans les serrures</Badge>
						</Flex>
					</Flex>

					{/* section */}
					<Flex flexDirection="column" gap="12px">
						<Text fontSize="20px" fontWeight="bold">Citations favorites</Text>
						<Flex flexDirection="row" gap="12px">
							<Badge>{`"Quand je pense à la sieste que je vais faire"`}</Badge>
							<Badge>{`"Allez au lit !"`}</Badge>
							<Badge>{`"Confiture"`}</Badge>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
