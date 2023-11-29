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
            style={customStyles}
            onAfterOpen={handleAfterOpenModal}
            onRequestClose={handleCloseModal}
        >
            {children}
        </Modal>
    );
}

export default ModalGeneric;
