import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

  const [pedido, setPedido] = useState([]);

  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
    if(pedido.some(productoState =>  productoState.id === producto.id)){
       const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
       setPedido(pedidoActualizado);
    }
    else{
        setPedido([...pedido, producto]);
    }
  };

  return (
    <QuioscoContext.Provider value={{ handleAgregarPedido }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
