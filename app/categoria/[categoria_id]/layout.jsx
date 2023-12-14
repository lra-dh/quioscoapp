"use client";
import React from "react";
import Modal from "react-modal";

import useQuiosco from "@/app/hooks/useQuiosco";
import ModalProducto from "@/app/components/ModalProducto.jsx";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children }) {

  const { modalIsOpen } = useQuiosco();

  return (
    <>
      {children}
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ModalProducto />
      </Modal>
    </>
  );
}
