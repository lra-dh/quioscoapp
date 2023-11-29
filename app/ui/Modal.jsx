import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

const ModalGeneric = ({ children, modalIsOpen, handleCloseModal, handleAfterOpenModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={handleAfterOpenModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
        >
            {children}
        </Modal>
    );
}

export default ModalGeneric;
