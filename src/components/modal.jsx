import {
	Modal as ChakraModal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from "@/components/chakra.jsx";

const Modal = ( {
	isOpen, onClose, text, valid,
} ) => (
	<ChakraModal
		isOpen={isOpen}
		onClose={onClose}
		isCentered={true}
	>
		<ModalOverlay />
		<ModalContent
			bg="color-mix(in srgb, var(--chakra-colors-bg) 90%, transparent)"
			border="2px solid"
			borderColor={ valid ? "correct" : "incorrect" }
			borderRadius="8px"
			p="16px"
			maxWidth="50vw"
		>
			<ModalBody fontSize={{ base: "16px", md: "20px" }}>
				{text}
			</ModalBody>
		</ModalContent>
	</ChakraModal>
);

export { Modal };
