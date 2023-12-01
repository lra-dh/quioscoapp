"use client";
import useSWR from "swr";
import { useRouter , usePathname } from "next/navigation";
import { useState,useEffect } from "react";

import ModalProducto from "@/app/components/ModalProducto.jsx";
import { fetcher } from "@/lib/helpers/utils";

const Page = ({ params }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data, error, isLoading } = useSWR(
    `/api/producto/${params.producto_id}`,
    fetcher
  );

  useEffect(() => {
    if (data && pathname.includes("producto")) {
      setModalIsOpen(true);
    }
  }, [data,pathname]);

  if (!data || error || isLoading) return null;

  const handleCloseModal = () => {
    setModalIsOpen(false);
    push(`/categoria/${params.categoria_id}`, { scroll: false });
  };

  return <ModalProducto producto={data} modalIsOpen={modalIsOpen} handleCloseModal={handleCloseModal} />;
};

export default Page;
