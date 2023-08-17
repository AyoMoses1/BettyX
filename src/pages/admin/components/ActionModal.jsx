import ModalComponent from 'common/Modal';
import { Button } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

function ActionModal(props) {
  const { title, isOpen, onClose, handleSubmit, isLoading } = props;

  return (
    <ModalComponent
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      button={
        <Stack direction="row" spacing={4} align="center" p={8}>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="success"
            size="sm"
            isLoading={isLoading}
          >
            Create
          </Button>
          <Button onClick={onClose} type="submit" variant="cancel" size="sm">
            Cancel
          </Button>
        </Stack>
      }
    >
      Are you sure you want to create this agent?{' '}
    </ModalComponent>
  );
}

export default ActionModal;
