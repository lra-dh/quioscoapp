import './globals.css'
import logo from "/public/assets/img/logo.svg"
import { getList } from "./lib/categorias/data.js";
import Categoria from "./ui/Categoria";
import Image from "next/image"

export const metadata = {
  title: 'Quiosco App',
  description: 'Aplicación para el manejo de un quiosco de comidas',
}

export default async function RootLayout({ children }) {
  const categorias = await getList();

  return (
    <html lang="en">
      <body>
        <div id="__next" className='md:flex'>
          <aside className='md:w-4/12 xl:w-1/4 2xl:w:1/5'>
          <Image src={logo} alt="Imagen logotipo" 
          width={300} height={100} 
          style={{ width: 300, height: 100, }} 
          priority loading="eager" 
          />
            <nav className="mt-10">
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} categoria={categoria}></Categoria>
                ))}
            </nav>
          </aside>
          <main className='md:w-8/12 xl:w-3/4 2xl:w:4/5 h-screen overflow-y-scroll'>
            <div className='p-10'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
