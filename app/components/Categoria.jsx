'use client'
import Image from "next/image"
import { useParams, useRouter } from 'next/navigation'

const Categoria = ({ categoria }) => {
    const router = useRouter();
    const params = useParams();
    const { id, nombre, icono } = categoria
    const handleClick = () => {
        router.push(`/categoria/${id}`,{scroll:false})
    }

    return (
        <div className={`${Number(params?.categoria_id) === Number(id) ? "bg-amber-400" : ""} 
          flex item-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image 
                src={`/assets/img/icono_${icono}.svg`}
                alt="imagen Icono" className="mr-5"
                width={70} height={70} 
                style={{ height: 70, width: 70 }} 
                loading="eager" />
            <button onClick={() => handleClick()} className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>

    )
}

export default Categoria