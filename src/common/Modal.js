import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Divider,
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
        {/* <ModalFooter>{props.button}</ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
