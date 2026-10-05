import { AiOutlineCheck } from "react-icons/ai";

export type RespostasChecklist = Record<number, string>;

interface PropsInfoVistorias {
    OS: string;
    Patrimonio: string;
    Modelo: string;
    Resp?: RespostasChecklist;
    Inicio: () => void;
}


const PERGUNTAS_MAP: Record<number, string> = {
    1: "Carenagem",
    2: "Quantidade de caixas",
    3: "Integridade da embalagem",
    4: "Código e OS conferem",
    5: "Integridade estrutural",
    6: "Entrada bloqueada no SAP",
};

export default function VistoriaConcluida({ Inicio, OS, Patrimonio, Modelo, Resp = {} }: PropsInfoVistorias) {


    const getBadgeStyle = (resposta?: string) => {
        switch (resposta) {
            case "Sim":
                return "bg-[#123324] text-green-200";
            case "Não":
                return "bg-[#3B1C1A] text-red-200";
            case "N/A":
            case "N.A":
                return "bg-gray-800 text-gray-300";
            default:
                return "bg-gray-800 text-gray-400";
        }
    };

    return (
        <div className="flex flex-col gap-5">

            <div>
                <div className="flex flex-col justify-center items-center gap-0.5">
                    <div className="flex justify-center items-center rounded-full w-18 h-18 bg-[#123324] text-green-200 text-4xl">
                        <AiOutlineCheck />
                    </div>
                    <h1 className="text-2xl text-white font-bold">Vistoria Concluída!</h1>
                    <p className="bg-[#123324] text-green-200 w-22 h-max flex items-center justify-center px-2 py-0.5 rounded-full text-sm">
                        Concluído
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-start pl-10! gap-30 bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-40">
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm text-gray-600">EQUIPAMENTO:</p>
                    <p className="text-sm text-white font-bold">{Modelo}</p>

                    <p className="text-sm text-gray-600">NÚMERO DE SÉRIE</p>
                    <p className="text-sm text-white font-bold">{OS}</p>

                    <p className="text-sm text-gray-600">DATA</p>
                    <p className="text-sm text-white font-bold">28/09/2026</p>
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm text-gray-600">PATRIMÔNIO</p>
                    <p className="text-sm text-white font-bold">{Patrimonio}</p>

                    <p className="text-sm text-gray-600">RESPONSÁVEL</p>
                    <p className="text-sm text-white font-bold">Thiago</p>

                    <p className="text-sm text-gray-600">HORÁRIO</p>
                    <p className="text-sm text-white font-bold">08:42</p>
                </div>
            </div>

            <div className="flex flex-col items-start pl-10! pr-10! pt-2! gap-3 bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-63">
                <h1 className="text-xl text-white font-bold">Resultado do Checklist</h1>



                {Object.entries(PERGUNTAS_MAP).map(([id, label]) => {
                    const resposta = Resp[Number(id)] || "Não informado";

                    return (
                        <div key={id} className="flex justify-between w-full">
                            <h2 className="font-bold text-white">{label}</h2>
                            <h2 className={`w-22 h-max flex items-center justify-center px-2 py-0.5 rounded-full text-[13px] ${getBadgeStyle(resposta)}`}>
                                {resposta}
                            </h2>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-5">
                <button
                    className="w-full h-10 bg-[#FF5B78] hover:bg-[#ff4667] rounded-md text-white font-medium transition cursor-pointer"
                    onClick={Inicio}
                >
                    Nova vistoria
                </button>
                <button className="w-full h-10 border border-[#FF5B78] text-[#FF5B78] rounded-md hover:bg-[#FF5B78] hover:text-white transition-colors duration-200 px-4 py-2">
                    Ver histórico
                </button>
            </div>

        </div>
    );
}