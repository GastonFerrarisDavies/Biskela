
import { InstagramCard } from './components/InstagramCard.jsx';
import { WhatsappCard } from './components/WhatsappCard.jsx';
import './App.css'

export function App() {

  return (
    <>
    <div className="grid grid-cols-4 gap-4 p-4 h-[100vh] bg-gradient-to-b from-gebum-white to-gebum-gray">

      <a href="#" className="col-span-2 row-span-1 bg-white p-4 rounded-md flex flex-col justify-center items-center">
        <p className=" text-[1.5rem] hover:">¡Hola! Bienvenido a</p>
        <strong className="text-gebum-gold text-[4rem]">Gebum</strong>
      </a>

      <div className="col-span-1 row-span-1 bg-white p-4 rounded-md shadow flex flex-col justify-center items-center">
        <svg className="p-0 m-0 fill-gebum-gold" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 32 32">
        <path path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z"></path>
        </svg>
        <p className="px-3 text-[1.2rem] font-bold py-0 my-0 text-gebum-gold">Horarios:</p>
        <div className="bg-gebum-gray rounded-md p-2 font-bold flex flex-col justify-center items-center">
        <p className="" >Miércoles a Domingos</p>
        <p className="" >19:30 a 23:30</p>
        </div>
        
      </div>

      <div className="col-span-1 row-span-2 bg-white p-4 rounded-md shadow flex flex-col items-center justify-center">
        <div className="w-6 h-6 bg-gray-800 rounded-full mb-2" />
        <div className="w-6 h-6 bg-gray-400 rounded-full mb-2" />
        <div className="w-6 h-6 bg-gray-200 rounded-full" />
      </div>

      <InstagramCard />
      <WhatsappCard />

      <a href="#" className="col-span-2 row-span-2 bg-gradient-to-br from-gebum-violet to-[#492861] p-4 rounded-md shadow flex flex-col items-center justify-center text-4xl font-bold hover:text-[2.5rem] transition-[.5s]">
        <strong className="text-gebum-gold">Realizá tu pedido.</strong>
        <div className="g-image"/>
      </a>

      <div className="col-span-1 row-span-1 bg-white p-4 rounded-md shadow">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
      <div className="col-span-2 row-span-1 bg-white p-4 rounded-md shadow">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
    </>
  )
}
