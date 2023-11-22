import './globals.css'
import Sidebar from './ui/Sidebar';

export const generateMetadata = ({ params }) => {
  const title = `Café - ${params.id}`;
  const description = 'Quiozco Cafetería';
  return {
    title,
    description
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className='md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w:1/5'>
              <Sidebar></Sidebar>
            </aside>
            <main className='md:w-8/12 xl:w-3/4 2xl:w:4/5 h-screen overflow-y-scroll'>{children}</main>
          </div>
      </body>
    </html>
  )
}
