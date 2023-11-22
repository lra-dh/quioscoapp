'use client'
import Image from "next/image"
import { useRouter, useParams } from 'next/navigation'

const Categoria = ({ categoria }) => {
    const router = useRouter();
    const params = useParams()
    const { id, nombre, icono } = categoria

    const handleClick = () => {
        router.push(`/categoria/${id}`,{scroll:false})
    }

    return (
        <div className={`${+params?.id === +id ? "bg-amber-400" : ""} 
          flex item-center gap-4 w-full border p-5 hover:bg-amber-400`}>
            <Image style={{ height: 70, width: 70 }} width={70} height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt="imagen Icono" className="mr-5" />
            <button onClick={() => handleClick()} className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>

    )
}

export default Categoria