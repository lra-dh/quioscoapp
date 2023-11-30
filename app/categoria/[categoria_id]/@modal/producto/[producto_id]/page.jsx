'use client'
import ModalGeneric from "../../../../../ui/Modal.jsx";
import ModalProducto from "../../../../../ui/ModalProducto.jsx";

const Page = () => {
  const producto = {precio:100}
  return (
    <ModalGeneric modalIsOpen={true} handleCloseModal={null}>
      <ModalProducto producto={producto} handleCloseModal={null} />
    </ModalGeneric>
  );
};

export default Page;
