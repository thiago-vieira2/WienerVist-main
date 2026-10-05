import { useState } from "react"
import Cards from "../../components/Cards/Index"
import LastVistorias from "../../components/LastVistorias"
import { Link } from 'react-router-dom';

export default function Home() {



    const CardsVistoria = [
        { Text: "Vistorias realizadas", Qtd: 43 },
        { Text: "Vistorias recentes", Qtd: 3 },
        { Text: "Equipamentos vistoriados", Qtd: 27 }
    ]
    const [user, setUser] = useState("Thiago")

    return (
        <div className="flex flex-col gap-4 items-center"> {/* Div pai */}
            <div className=""> {/* Div de titulo  */}
                <h1 className="font-bold text-3xl text-white">Olá, {user}!</h1>
                <p className="text-gray-600">Bem-vindo ao Wiener Vision.</p>
            </div>

            <div className="bg-[#1D1D21] border-gray-800 border-l-6 border-l-[#FF5B78] border rounded-2xl  w-200 h-50 flex      justify-center items-center">
                <div className="flex flex-col gap-3 ">
                    <h1 className="font-bold text-white text-xl">Nova vistória</h1>
                    <p className="text-white">Realize uma nova Inspeção de equipamento</p>
                    <Link
                        to="/NovaVistoria"
                        className="flex items-center justify-center text-white bg-[#FF5B78] hover:bg-[#ff4667] w-190 h-15 rounded-md font-medium transition cursor-pointer"
                    >
                        Iniciar vistória
                    </Link>               
                </div>
            </div>

            <main className=" ">
                <div className='flex flex-col gap-5'>



                    <div className='flex gap-4 '>
                        {CardsVistoria.map((ativo, index) => (
                            <Cards key={index} Text={ativo.Text} Qtd={ativo.Qtd} />
                        ))}
                    </div>

                    <LastVistorias />
                </div>
            </main>
        </div>
    )
}