import { useState } from 'react';

// 1. Atualizamos a Interface para incluir as funções modificadoras
interface PropsIdentificacao {
    OS: string;
    setOs: (value: string) => void;
    Patrimonio: string;
    setPatrimonio: (value: string) => void;
    Modelo: string;
    setModelo: (value: string) => void;
    EtapaAtual: () => void;
}

export default function Identificacao({ 
    OS, setOs, 
    Patrimonio, setPatrimonio, 
    Modelo, setModelo, 
    EtapaAtual
}: PropsIdentificacao) {
    
    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-130">
            <div className="flex flex-col gap-3">
                
                {/* INPUT MODELO */}
                <p className="text-white font-semibold">Modelo do equipamento:</p>
                <input 
                    type="text" 
                    list="modelos-equipamento" 
                    value={Modelo}
                  
                    onChange={(e) => setModelo(e.target.value)} // Atualiza o pai
                    placeholder="Selecione ou digite o modelo..."
                    className="w-120 h-13 border border-gray-800 rounded-md placeholder:text-gray-600 pl-5! focus:border-[#FF5B78] text-white focus:outline-none transition " 
                />

                <datalist id="modelos-equipamento">
                    <option value="CMD 800" />
                    <option value="CLIA 1000" />
                </datalist>

                {/* INPUT PATRIMÔNIO */}
                <p className="text-white font-semibold">Patrimônio:</p>
                <input 
                    type="text"  
                    value={Patrimonio}
                    onChange={(e) => setPatrimonio(e.target.value)} // Atualiza o pai
                    placeholder="Ex: 1100687" 
                    className="w-120 h-13 border border-gray-800 rounded-md placeholder:text-gray-600 pl-5! text-white focus:border-[#FF5B78] focus:outline-none transition " 
                />

                {/* INPUT NÚMERO DE SÉRIE / OS */}
                <p className="text-white font-semibold">Número de série:</p>
                <input 
                    type="text" 
                    value={OS}
                    onChange={(e) => setOs(e.target.value)} // Atualiza o pai
                    placeholder="Ex: XRE232545" 
                    className="w-120 h-13 border border-gray-800 rounded-md placeholder:text-gray-600 text-white pl-5! focus:border-[#FF5B78] focus:outline-none transition " 
                />
            </div>

            <div className="bg-[#3A1620] w-120 h-15 rounded-md flex flex-col justify-center pl-5!">
                <p className="text-sm text-gray-600">Responsável pela vistoria:</p>
                <h1 className="text-xl text-white font-bold">Thiago</h1>
            </div>

            <button onClick={EtapaAtual} className="text-white bg-[#FF5B78] hover:bg-[#ff4667] w-120 h-13 rounded-md font-medium transition cursor-pointer ">
                Continuar
            </button>
        </div>
    );
}
