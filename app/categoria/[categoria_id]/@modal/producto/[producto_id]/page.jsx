'use client'
import useSWR from 'swr'

import ModalGeneric from "@/app/components/Modal.jsx";
import ModalProducto from "@/app/components/ModalProducto.jsx";
import { fetcher }  from "@/lib/helpers/utils";

const Page = () => {
  console.log(fetcher);
  console.log(useSWR('http://localhost:3000/api/producto', fetcher)) 
  // console.log(data, error, isLoading);
  return (
    <ModalGeneric modalIsOpen={true} handleCloseModal={null}>
      <ModalProducto producto={null} handleCloseModal={null} />
    </ModalGeneric>
  );
};

export default Page;
