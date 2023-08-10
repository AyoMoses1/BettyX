import { useContext } from 'react';
import Modal from '../../common/Modal';
import { CurrentPageContext } from '../../App';
import ModalOptions from './ModalOptions';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { isModalOpen, handleCloseModal } = useContext(CurrentPageContext);
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
    handleCloseModal();
  };

  return (
    <Modal
      title="Add Customer"
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      size={['sm', 'md']}
    >
      <ModalOptions handleClick={handleClick} />
    </Modal>
  );
};

export default Index;
