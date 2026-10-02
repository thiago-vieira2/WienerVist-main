import { useState } from "react";

export default function Header() {
    const [paginaAtiva, setPaginaAtiva] = useState("inicio");
    const botoes = [
        { id: "Inicio", none: "Inicio" },
        { id: "Nova", none: "Nova vistoria" },
        { id: "Historico", none: "Histórico" },
        { id: "Profile", none: "Perfil" },
        { id: "Sair", none: "Sair" }
    ]



    return (
        <header className="top-0 z-50 bg-[#1D1D21]  border-t-2 border-b border-b-gray-700 border-[#FF5B78]">
            <nav className="flex h-16 items-center justify-center gap-20  px-6 ">
                <p className="text-xl font-bold text-white  ">
                    Wiener Vision
                </p>

                <div className="flex gap-12">
                    {botoes.map((b) => (
                        <button
                            key={b.id}
                            onClick={() => setPaginaAtiva(b.id)}
                            className={
                                paginaAtiva === b.id
                                    ? "text-[#FF5B78] border-b-2 border-[#FF5B78]  "
                                    : "text-gray-500"
                            }
                        >
                            {b.none}
                        </button>
                    ))}
                </div>

                <p className="text-gray-600">João Silva</p>
            </nav>
        </header>
    )
}