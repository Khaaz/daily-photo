"use client";

import {
	Avatar,
	Flex,
	Text,
	useDisclosure,
} from "@/components/chakra.jsx";
import { CtaButton } from "@/components/cta-button.jsx";
import { Modal } from "@/components/modal.jsx";

const Bonus = ( {
	id, description, headline, modalText, requiredNumber, doneNumber, color,
} ) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const valid = doneNumber >= requiredNumber;

	return (
	
		<Flex flexDirection="column"
			justifyContent="space-between" alignItems="center"
			gap="2rem"
			w="100%"
			border="1px solid"
			borderColor= {color}
			borderRadius="8px"
			boxShadow= {`0 2px 10px var(--chakra-colors-${color})`}
			p="1.5rem"
			h={{ base: "fit-content", lg: "45rem", xl: "40rem" }}
		>
			<Avatar
				size={"2xl"}
				src={`/bonus_${id}.png`}
			/>
			<Text color={color} fontSize="32px" fontWeight="bold">Bonus {id}</Text>
			<Text fontSize="16px">
				{description}
			</Text>
			<Text fontSize="16px" fontWeight="bold">
				{headline}
			</Text>
			<CtaButton onClick={onOpen}>Bénéficier</CtaButton>
			<Modal isOpen={isOpen} onClose={onClose}
				valid={valid}
				text={valid ? modalText : `Bwaaaap, petit tricheur, tu n'as pas encore complété les ${requiredNumber} challenges requis !`}
			/>
		</Flex>
	);
};

export { Bonus };
