import { useEffect, useState } from "react";
import Identificacao from "../../components/UI/Identificacao";
import Checklist, { type RespostasChecklist } from "../../components/UI/Checklist";
import VistoriaConcluida from "../../components/UI/VistoriaConcluida";

export default function NovaVistoria() {
    const [modelo, setModelo] = useState('');
    const [patrimonio, setPatrimonio] = useState("");
    const [os, setOs] = useState("");
    const [etapa, setEtapa] = useState(1);
    const [titulo, setTitulo] = useState("Identificando equipamento");

    // Guardamos um objeto { [idPergunta]: "SIM" | "NÃO" | "N.A" }
    const [resp, setResp] = useState<RespostasChecklist>({});

    useEffect(() => {
        if (etapa === 1) {
            setTitulo("Identificando equipamento");
        } else if (etapa === 2) {
            setTitulo("Checklist da vistoria");
        } else if (etapa === 3) {
            setTitulo("Vistoria concluída");
        }
    }, [etapa]);

    // Função para adicionar/atualizar a resposta individual de cada pergunta
    function AdicionarArray(perguntaId: number, NewResp: string) {
        setResp((prevResp: any) => ({
            ...prevResp,
            [perguntaId]: NewResp,
        }));
    }

    function EtapaAtual() {
        if (etapa < 3) {
            setEtapa((prev) => prev + 1);
        }
    }

    function Voltar() {
        if (etapa === 2) {
            setEtapa((prev) => prev - 1);
        }
    }

    function Inicio() {
        setEtapa(1);
        setResp({}); // Limpa as respostas ao reiniciar o fluxo
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div></div>

            <div className="flex flex-col justify-start w-140">
                <h1 className="text-2xl text-white font-bold">{titulo}</h1>
                <p className="text-sm text-gray-600">passo {etapa} de 3</p>
            </div>

            <div>
                {etapa === 1 && (
                    <Identificacao
                        Patrimonio={patrimonio}
                        setPatrimonio={setPatrimonio}
                        Modelo={modelo}
                        setModelo={setModelo}
                        OS={os}
                        setOs={setOs}
                        EtapaAtual={EtapaAtual}
                    />
                )}
                {etapa === 2 && (
                    <Checklist
                        Voltar={Voltar}
                        EtapaAtual={EtapaAtual}
                        Modelo={modelo}
                        Patrimonio={patrimonio}
                        OS={os}
                        Resp={resp}
                        AddResp={AdicionarArray}
                    />
                )}
                {etapa === 3 && (
                    <VistoriaConcluida
                        OS={os}
                        Modelo={modelo}
                        Patrimonio={patrimonio}
                        Inicio={Inicio}
                      
                    />
                )}
            </div>
        </div>
    );
}