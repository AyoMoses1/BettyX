import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react';

function ModalComponent(props) {
  return (
    <Modal
      size={props?.size ?? 'md'}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">{props.title}</ModalHeader>
        <ModalBody maxH="70vh" overflow="auto">
          {props.children}
        </ModalBody>
        {/* <ModalFooter>{props.button}</ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
