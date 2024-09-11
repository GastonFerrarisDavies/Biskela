import { useNavigate } from 'react-router-dom';

export function Pedidos () {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Cart');
    };
    return (
        <a href="#" onClick={handleClick} className="col-span-3 row-span-3 bg-gradient-to-br from-gebum-violet to-[#492861] p-0 rounded-md shadow flex flex-col items-center justify-center text-4xl font-bold hover:text-[2.5rem] transition-[.5s]">
            <strong className="text-gebum-gold">Realizá tu pedido.</strong>
            <div className="g-image"/>
        </a>
    )
}