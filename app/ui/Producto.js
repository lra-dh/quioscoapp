import Image from "next/image"
import { formatearDinero } from "../lib/helpers/utils"

const Producto = ({ producto }) => {
  return (
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
      </div>
    </div>
  )
}

export default Producto