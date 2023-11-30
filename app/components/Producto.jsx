"use client";
import Image from "next/image";
import { useSearchParams,useRouter,usePathname } from "next/navigation";
import { useState,useEffect } from "react";

import  ModalGeneric   from "./Modal";
import ModalProducto from "./ModalProducto.jsx";

import { formatearDinero } from "@/lib/helpers/utils";


const Producto = ({ producto, categoria }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push }  = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const params = new URLSearchParams(searchParams);

  // const handleClick = () => {
  //   params.set('agregar', producto.id);
  //   replace(`${pathname}?${params.toString()}`,{scroll:false});
  //   setIsOpen(true);
  // }

  const handleClick = () => {
    push(`/categoria/${categoria.id}/producto/${producto.id}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (searchParams.has('agregar') && Number(producto.id) === Number(searchParams.get('agregar'))) {
      setIsOpen(true);
      console.log('true'); 
    }
    else {
      setIsOpen(false);
    }
  }, [searchParams,producto])

  const handleCloseModal = () => {
    params.delete('agregar');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
}

  return (
    <>
    <div className="border p-3">
      <Image src={`/assets/img/${producto.imagen}.jpg`}
        alt={`Imagen Platillo ${producto.nombre}`}
        width={400}
        height={500}
        style={{ width: 'auto', height: 'auto' }}
        loading="eager"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">
          {producto.nombre}
        </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
        <button type="button" onClick={() => handleClick()} className="bg-indigo-600 hover:bg-indigo-800 text-white
        w-full mt-5 p-3 uppercase font-bold">
          Agregar
        </button>
      </div>
    </div>
      {
        <ModalGeneric modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal}>
          <ModalProducto producto={producto} handleCloseModal={handleCloseModal} />
        </ModalGeneric>
      }    
    </>
    
  )
}

export default Producto