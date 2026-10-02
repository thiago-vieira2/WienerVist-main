import { useState } from "react"

interface DadosVist {
    Equipamento: string,
    Patrimonio: number, 
    User: string,
    Date: string

}

export default function InfoVistorias({Equipamento, Patrimonio, User, Date} : DadosVist) {

    return (
        <div className="flex justify-between pl-6! pr-6!">
            <div className="flex flex-col gap-1 ">

                <h1 className="text-xl font-bold text-white">{Equipamento}</h1>
                <p className="text-gray-500 text-sm">Patrimonio: {Patrimonio}</p>
                <p className="text-gray-500 text-sm">Realizada por: {User}</p>
                <p className="text-gray-500 text-sm">{Date}</p>
                <button className="border border-[#FF5B78] text-[#FF5B78] rounded hover:bg-[#FF5B78] hover:text-white transition-colors duration-200 px-4 py-2">Ver detalhes</button>

                    
            </div>

            <p className="bg-[#123324] text-green-200 w-22 h-max flex items-center justify-center px-2 py-0.5 rounded-full text-sm   ">Concluida</p>

            
        </div>
    )
}