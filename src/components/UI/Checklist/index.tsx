import { useState, type ChangeEvent } from "react";

export type RespostasChecklist = Record<number, string>;

interface PropsInfoVistorias {
    OS: string;
    Patrimonio: string;
    Modelo: string;
    Resp: RespostasChecklist;
    EtapaAtual: () => void;
    Voltar: () => void;
    AddResp: (perguntaId: number, NewResp: string) => void;
}

const PERGUNTAS_CHECKLIST = [
    { id: 1, texto: "Carenagem está integra?" },
    { id: 2, texto: "O número de caixas confere com o descrito na NF ou pedido de compra?" },
    { id: 3, texto: "O aspecto visual da embalagem atentde as especificações" },
    { id: 4, texto: "O código do equipamento/parte/peça e OS condiz com a NF°?" },
    { id: 5, texto: "O equipamento/parte/peça, visualmente apresenta integridade estrutural?" },
    { id: 6, texto: "Foi dada entrada BLOQUEADA do materiak no sistema SAP?" },
];

export default function Checklist({ AddResp, Voltar, EtapaAtual, Resp, OS, Patrimonio, Modelo }: PropsInfoVistorias) {
    const opcoes = ["Sim", "Não", "N/A"];
    const car = ["Sem avarias", "Com avarias"];

    // Estado para armazenar o arquivo da foto da avaria
    const [fotoAvaria, setFotoAvaria] = useState<File | null>(null);

    const ID_CARENAGEM = 0;
    const carenagemSelecionada = Resp[ID_CARENAGEM];

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFotoAvaria(e.target.files[0]);
        }
    };

    return (
        <div className="flex flex-col gap-5">

            {/* Infos do Equipamento */}
            <div className="border-l-4 pl-5! pt-2! border-l-[#FF5B78] bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-40 flex flex-col gap-4">
                <h1 className="text-xl font-bold text-white">{Modelo}</h1>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">PATRIMÔNIO</p>
                        <p className="text-sm text-white font-bold mt-1">{Patrimonio}</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">N° DE SÉRIE</p>
                        <p className="text-sm text-white font-bold mt-1">{OS}</p>
                    </div>

                    <div className="flex flex-col col-span-2">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">RESPONSÁVEL</p>
                        <p className="text-sm text-white font-bold mt-1">Thiago</p>
                    </div>
                </div>
            </div>

            {/* Carenagem */}
            <div className={`flex flex-col items-center justify-center bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 transition-all duration-300 p-5 gap-5 ${carenagemSelecionada === "Com avarias" ? "h-auto" : "h-30"}`}>
                <div className="flex flex-col gap-5 w-full items-center">
                    <h1 className="text-xl font-bold text-white">Carenagem</h1>
                    <div className="flex gap-10">
                        {car.map((opcao) => {
                            const isSelected = carenagemSelecionada === opcao;
                            const isSemAvarias = opcao === "Sem avarias";

                            return (
                                <button
                                    key={opcao}
                                    disabled={isSelected}
                                    onClick={() => AddResp(ID_CARENAGEM, opcao)}
                                    className={`w-60 h-10 border border-gray-800 text-white rounded transition-colors duration-200 px-4 py-2 ${isSelected
                                            ? "opacity-50 cursor-not-allowed bg-gray-800"
                                            : isSemAvarias
                                                ? "hover:bg-[#10291F] hover:text-green-200"
                                                : "hover:bg-[#3B1C1A] hover:text-amber-200"
                                        }`}
                                >
                                    {opcao}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Campo de Anexo (Exibido apenas quando "Com avarias" está selecionado) */}
                {carenagemSelecionada === "Com avarias" && (
                    <div className="flex flex-col gap-2 w-full max-w-120 animate-fade-in">
                        <label className="text-sm font-medium text-gray-300">
                            Anexar foto da avaria:
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#FF5B78] file:text-white hover:file:bg-[#ff4667] file:cursor-pointer cursor-pointer border border-gray-800 rounded bg-[#1D1D21] p-1"
                        />
                        {fotoAvaria && (
                            <p className="text-xs text-green-400 mt-1">
                                Arquivo selecionado: <span className="font-semibold">{fotoAvaria.name}</span>
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Checklist */}
            <div className="bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-max">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-xl font-bold pl-5! pt-2!">Checklist</h1>
                    <hr className="border-gray-800" />

                    {PERGUNTAS_CHECKLIST.map((pergunta) => {
                        const respostaSelecionada = Resp[pergunta.id];

                        return (
                            <div key={pergunta.id} className="flex flex-col gap-2 items-center">
                                <p className="text-white">{pergunta.texto}</p>
                                <div className="flex gap-5">
                                    {opcoes.map((opcao) => {
                                        const labelOpcao = opcao === "N/A" ? "N.A" : opcao.toUpperCase();
                                        const isSelected = respostaSelecionada === opcao;

                                        return (
                                            <button
                                                key={opcao}
                                                disabled={isSelected}
                                                onClick={() => AddResp(pergunta.id, opcao)}
                                                className={`w-40 h-10 border border-gray-800 text-white rounded ${isSelected ? "opacity-50 cursor-not-allowed bg-gray-800" : ""
                                                    }`}
                                            >
                                                {labelOpcao}
                                            </button>
                                        );
                                    })}
                                </div>

                                <hr className="border-gray-800" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Observações */}
            <div className="flex flex-col justify-center items-center bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-30">
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-xl">Observações</p>
                    <textarea placeholder="Opcional" className="placeholder:text-gray-600 pl-3! pt-2! text-white bg-[#1D1D21] rounded border border-gray-800 w-120 h-full focus:border-[#FF5B78] focus:outline-none transition"></textarea>
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-5">
                <button onClick={EtapaAtual} className="w-full h-10 bg-[#FF5B78] hover:bg-[#ff4667] rounded-md text-white font-medium transition cursor-pointer">Finalizar vistoria</button>
                <button onClick={Voltar} className="w-full h-10 border border-[#FF5B78] text-[#FF5B78] rounded-md hover:bg-[#FF5B78] hover:text-white transition-colors duration-200 px-4 py-2">Voltar</button>
            </div>
        </div>
    );
}