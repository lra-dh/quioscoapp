import Image from "next/image"
import logo from "../../public/assets/img/logo.svg"
import  {getData}  from "../lib/categorias/data.js";
import Categoria from "./Categoria";
const Sidebar = async () => {
    const categorias = await getData();
    
    return (
        <>
            <Image src={logo} style={{ height: 100, width: 300 }} width={300} height={100} alt="Imagen logotipo" priority></Image>
            <nav className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria categoria={categoria}></Categoria>
                ))}
            </nav>
        </>
    )
}

export default Sidebar;