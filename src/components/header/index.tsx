import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [paginaAtiva, setPaginaAtiva] = useState("inicio");
    const botoes = [
        { id: "Inicio", none: "Inicio", to:"/home" },
        { id: "Nova", none: "Nova vistoria", to:"/NovaVistoria" },
        { id: "Historico", none: "Histórico", to:"/home" },
        { id: "Profile", none: "Perfil", to:"/home" },
        { id: "Sair", none: "Sair", to:"/" }
    ]



    return (
        <header className="top-0 z-50 bg-[#1D1D21]  border-t-2 border-b border-b-gray-700 border-[#FF5B78]">
            <nav className="flex h-16 items-center justify-center gap-20  px-6 ">
                <p className="text-xl font-bold text-white  ">
                    Wiener Vision
                </p>

                <div className="flex gap-12">
                    {botoes.map((b) => (
                        <Link
                            key={b.id}
                            onClick={() => setPaginaAtiva(b.id)}
                            to={b.to}
                            className={
                                paginaAtiva === b.id
                                    ? "text-[#FF5B78] border-b-2 border-[#FF5B78]  "
                                    : "text-gray-500"
                            }
                        >
                            {b.none}
                        </Link>
                    ))}
                </div>

                <p className="text-gray-600">João Silva</p>
            </nav>
        </header>
    )
}