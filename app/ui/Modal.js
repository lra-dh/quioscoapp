import React from 'react';
import Modal from 'react-modal';
import { useSearchParams, useRouter, usePathname } from "next/navigation"

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

const ModalGeneric = ({ children, modalIsOpen, setIsOpen }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function afterOpenModal() {
    }

    function closeModal() {
        const params = new URLSearchParams(searchParams);
        params.delete('agregar');
        replace(`${pathname}?${params.toString()}`, { scroll: false });
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
}

export default ModalGeneric;
