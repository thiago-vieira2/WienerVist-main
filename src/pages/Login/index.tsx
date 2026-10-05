import { Link, useNavigate } from "react-router-dom"
import "./index.css"
import { useState } from "react"

export default function Login() {

    const [senha, setSenha] = useState("")
    const [user, setUser] = useState("")
    const [erro, setErro] = useState('');
    const navigate = useNavigate()
    function Submit(e: any) {
        e.preventDefault()
        if (!user.trim() && !senha.trim()) {
            setErro('O campo não pode ficar vazio!');
            return; // O 'return' impede que o código de navegação abaixo rode

        }

        setErro("")
        navigate('/home')
    }

    return (
        <div className="bg-[#1D1D21] border border-gray-800 rounded-2xl w-105 min-h-130 flex flex-col justify-center items-center">

            {/* Cabeçalho */}
            <div className="text-center mb-8 flex flex-col gap-5">
                <h1 className="text-white text-3xl font-bold">
                    Wiener <span className="text-[#FF5B78]">Lab.</span>
                </h1>
                <div>
                    <h2 className="text-white text-xl font-medium mt-1">
                        Wiener Vision
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                        Sistema de Inspeção de Equipamentos
                    </p>
                </div>

            </div>

            {/* Formulário - 75% do card */}
            <div className="w-3/4 flex flex-col gap-5">

                {/* E-mail */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-gray-300 text-sm"
                    >
                        E-mail ou usuário
                    </label>

                    <input
                        id="text"
                        type="text"
                        placeholder="Digite seu e-mail ou usuário"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className={`
                            w-full
                            h-10

                            bg-[#1D1D21]
                            border
                            ${erro && !user.trim() ? "border-red-500 focus:border-red-500" : "border-gray-800 focus:border-[#FF5B78]"}
                            rounded-md
                            pl-5!
                            text-white
                            placeholder:text-gray-600
                           
                            focus:outline-none
                            transition 
                        `}
                    />
                </div>

                {/* Senha */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="password"
                        className="text-gray-300 text-sm"
                    >
                        Senha
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className={`
                            w-full
                            h-10
                            pl-5!
                            bg-[#1D1D21]
                            border
                            ${erro && !senha.trim() ? "border-red-500 focus:border-red-500" : "border-gray-800 focus:border-[#FF5B78]"}
                            rounded-md
                           
                            
                             text-white
                            placeholder:text-gray-600
                         
                            focus:outline-none
                            transition
                        `}
                    />

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-[#FF5B78] text-sm hover:underline"
                        >
                            Esqueceu a senha?
                        </button>
                    </div>
                </div>

                <button
                    onClick={Submit}
                    className="
                                flex items-center justify-center
                                w-full
                                h-10
                                bg-[#FF5B78]
                                hover:bg-[#ff4667]
                                rounded-md
                                text-white
                                font-medium
                                transition
                                cursor-pointer
                            "
                >
                    Entrar
                </button>

            </div>

            
            <p className="text-gray-400 text-sm text-center mt-7">
                Não tem conta?{" "}
                <button
                    type="button"
                    className="text-[#FF5B78] hover:underline"
                >
                    Criar conta
                </button>
            </p>

        </div>
    )
}
