import { notFound } from 'next/navigation';

import Producto from '@/app/components/Producto.jsx';
import { getFirst } from '@/lib/categorias/data.js';

export async function generateMetadata({ params }) {
  if (!params.categoria_id || isNaN(params.categoria_id)) {
    return notFound();
  }

  const categoria = await getFirst(params.categoria_id);

  if (!categoria) {
    return notFound();
  }

  return {
    title: `Quiosco - Menú ${categoria.nombre}`,
  }
}

const Page = async ({ params }) => {
  const categoria = await getFirst(params.categoria_id);

  if (!categoria) {
    return notFound();
  }

  return (
    <>
      <h1 className='text-4xl font-black'>{categoria.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoria.productos.map((producto) => (
          <Producto key={producto.id} producto={producto} ></Producto>
        ))}
      </div>
    </>
  )
}

export default Page