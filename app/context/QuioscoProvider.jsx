import { useState, createContext } from "react";
import { toast } from "react-toastify"

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        producto,
        setProducto,
        handleAgregarPedido,
        pedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
