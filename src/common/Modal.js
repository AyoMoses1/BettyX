import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
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
        <ModalHeader>{props.title}</ModalHeader>
        {props.title && <Divider />}
        <ModalBody maxH="70vh" overflow="auto">
          {props.children}
        </ModalBody>
        {props.button ?? <ModalFooter>{props.button}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
