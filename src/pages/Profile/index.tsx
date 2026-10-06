export default function Profile() {
    return (
        <div className="flex flex-col gap-5">
            <div className=" bg-[#1D1D21] rounded-2xl border justify-center items-center border-gray-800 w-140 h-50">
                <div className="flex items-center gap-5 pl-5!">
                    <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#2A1116] text-[#E31837] text-xl">TV</div>
                    <div>
                        <h1 className="font-bold text-white">Thiago Vieira</h1>
                        <h2 className="text-gray-600">Colaborador</h2>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">E-MAIL</p>
                        <p className="text-sm text-white font-bold mt-1">thiago.vieira@wienerlab.com.br</p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Vistorias Realizadas</p>
                        <p className="text-sm text-white font-bold mt-1">3</p>
                    </div>

                    <div className="flex flex-col col-span-2">
                        <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">USUÁRIO</p>
                        <p className="text-sm text-white font-bold mt-1">adwdawd</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <button
                    className="w-full h-10 bg-[#FF5B78] hover:bg-[#ff4667] rounded-md text-white font-medium transition cursor-pointer"

                >
                    Editar perfil
                </button>
                <button className="w-full h-10 border border-[#FF5B78] text-[#FF5B78] rounded-md hover:bg-[#FF5B78] hover:text-white transition-colors duration-200 px-4 py-2">
                    Sair
                </button>
            </div>
        </div>
    )
}