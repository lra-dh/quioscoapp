"use client";
import Image from "next/image";

import { formatearDinero } from "@/lib/helpers/utils";
import useQuiosco from "@/app/hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { setModalIsOpen,setProducto } = useQuiosco();

  const handleClick = () => {
    setProducto(producto);
    setModalIsOpen(true);
  };

  return (
    <>
      <div className="border p-3">
        <Image
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen Platillo ${producto.nombre}`}
          width={400}
          height={500}
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
        <div className="p-5">
          <h3 className="text-2xl font-bold">{producto.nombre}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatearDinero(producto.precio)}
          </p>
          <button
            type="button"
            onClick={() => handleClick()}
            className="bg-indigo-600 hover:bg-indigo-800 text-white
        w-full mt-5 p-3 uppercase font-bold"
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}

export default Producto