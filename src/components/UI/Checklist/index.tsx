

interface PropsInfoVistorias {
    OS: string;
    Patrimonio: string;
    Modelo: string;
    Resp: string[];
    EtapaAtual: () => void;
    Voltar: () => void;
    AddResp: (NewResp: string) => void
}


export default function Checklist({ AddResp, Voltar, EtapaAtual, Resp, OS, Patrimonio, Modelo }: PropsInfoVistorias) {

    return (
        <div className="flex flex-col gap-5 ">

            <div className="border-l-4 pl-5! pt-2! border-l-[#FF5B78] bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-40  flex flex-col gap-4">
                {/* Título do Modelo */}
                <h1 className="text-xl font-bold text-white">{Modelo}</h1>

                {/* Grid em 2 colunas para Patrimônio e N° de Série */}
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

            <div className="flex items-center justify-center  bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-30">
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold text-white">Carenagem</h1>
                    <div className="flex gap-10">
                        <button className="w-60 h-10 border border-gray-800 text-white rounded hover:bg-[#10291F] hover:text-green-200 transition-colors duration-200 px-4 py-2">Sem avarias</button>
                        <button className="w-60  h-10 border border-gray-800 text-white rounded hover:bg-[#3B1C1A] hover:text-amber-200 transition-colors duration-200 px-4 py-2">Com avarias</button>
                    </div>
                </div>
            </div>

            <div className="bg-[#1D1D21]  rounded-2xl border border-gray-800 w-140 h-max">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-xl font-bold pl-5! pt-2! ">Checklist</h1>
                    <hr className="border-gray-800" />
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-white ">O número de caixas confere com o descrito na NF ou pedido de compra?</p>
                        <div className="flex gap-5">
                            <button disabled={Resp.includes("Sim")} onClick={() => AddResp("Sim")} className="w-40 h-10 border border-gray-800 text-white rounded">SIM</button>
                            <button disabled={Resp.includes("Não")} onClick={() => AddResp("Não")} className="w-40 h-10 border border-gray-800 text-white rounded">NÃO</button>
                            <button disabled={Resp.includes("N/A")} onClick={() => AddResp("N/A")} className="w-40 h-10  border border-gray-800 text-white rounded ">N.A</button>
                        </div>

                        <hr className="border-gray-800" />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-white ">O aspecto visual da embalagem atentde as especificações</p>
                        <div className="flex gap-5">
                            <button disabled={Resp.includes("Sim")} onClick={() => AddResp("Sim")} className="w-40 h-10 border border-gray-800 text-white rounded">SIM</button>
                            <button disabled={Resp.includes("Não")} onClick={() => AddResp("Não")} className="w-40 h-10 border border-gray-800 text-white rounded">NÃO</button>
                            <button disabled={Resp.includes("N/A")} onClick={() => AddResp("N/A")} className="w-40 h-10  border border-gray-800 text-white rounded ">N.A</button> </div>

                        <hr className="border-gray-800" />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-white ">O código do equipamento/parte/peça e OS condiz com a NF°?</p>
                        <div className="flex gap-5">
                            <button disabled={Resp.includes("Sim")} onClick={() => AddResp("Sim")} className="w-40 h-10 border border-gray-800 text-white rounded">SIM</button>
                            <button disabled={Resp.includes("Não")} onClick={() => AddResp("Não")} className="w-40 h-10 border border-gray-800 text-white rounded">NÃO</button>
                            <button disabled={Resp.includes("N/A")} onClick={() => AddResp("N/A")} className="w-40 h-10  border border-gray-800 text-white rounded ">N.A</button>      </div>

                        <hr className="border-gray-800" />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-white ">O equipamento/parte/peça, visualmente apresenta integridade estrutural?</p>
                        <div className="flex gap-5">
                            <button disabled={Resp.includes("Sim")} onClick={() => AddResp("Sim")} className="w-40 h-10 border border-gray-800 text-white rounded">SIM</button>
                            <button disabled={Resp.includes("Não")} onClick={() => AddResp("Não")} className="w-40 h-10 border border-gray-800 text-white rounded">NÃO</button>
                            <button disabled={Resp.includes("N/A")} onClick={() => AddResp("N/A")} className="w-40 h-10  border border-gray-800 text-white rounded ">N.A</button>   </div>

                        <hr className="border-gray-800" />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-white ">Foi dada entrada BLOQUEADA do materiak no sistema SAP?</p>
                        <div className="flex gap-5">
                            <button disabled={Resp.includes("Sim")} onClick={() => AddResp("Sim")} className="w-40 h-10 border border-gray-800 text-white rounded">SIM</button>
                            <button disabled={Resp.includes("Não")} onClick={() => AddResp("Não")} className="w-40 h-10 border border-gray-800 text-white rounded">NÃO</button>
                            <button disabled={Resp.includes("N/A")} onClick={() => AddResp("N/A")} className="w-40 h-10  border border-gray-800 text-white rounded ">N.A</button>     </div>

                        <hr className="border-gray-800" />
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center  bg-[#1D1D21] rounded-2xl border border-gray-800 w-140 h-30">
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-xl">Observações</p>
                    <textarea name="" id="" placeholder="Opcional" className="placeholder:text-gray-600    pl-3! pt-2! text-white   bg-[#1D1D21] rounded border border-gray-800 w-120 h-full  focus:border-[#FF5B78]  focus:outline-none transition"></textarea>
                </div>
            </div>

            <div className="flex gap-5">
                <button onClick={EtapaAtual} className=" w-full h-10 bg-[#FF5B78] hover:bg-[#ff4667] rounded-md text-white font-medium transition cursor-pointer">Finalizar vistoria</button>
                <button onClick={Voltar} className=" w-full h-10 border border-[#FF5B78] text-[#FF5B78] rounded-md hover:bg-[#FF5B78] hover:text-white transition-colors duration-200 px-4 py-2">Voltar</button>
            </div>
        </div>
    )
}