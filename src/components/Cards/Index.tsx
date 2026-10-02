import "./index.css"


interface Proplegal  {
    Text: string,
    Qtd: number
}

export default function Cards({Text, Qtd} : Proplegal) {


    return (
        <div className="p-10! flex flex-col justify-center gap-0.5 w-64 h-24 bg-[#1D1D21] border border-gray-800 rounded-2xl ">
            <div className=" ">
                <h1 className="text-3xl text-white font-bold">
                    {Qtd}
                </h1>   
                <p className="text-gray-600 text-sm">{Text}</p>
     
            </div>
        
        </div>
    )
}