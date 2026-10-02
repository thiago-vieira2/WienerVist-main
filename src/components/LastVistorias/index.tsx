import InfoVistorias from '../UI/InfoVistorias'
import './index.css'

export default function LastVistorias() {

    const Info = [
        {Equipamento: "CMD 800", Patrimonio: 11858, User: "Thiago", Date: "20/09/2026 - 08:54"},
        {Equipamento: "CMD 800", Patrimonio: 11858, User: "Thiago", Date: "20/09/2026 - 08:54"}
        
    ]

    return(
        <div className='flex flex-col gap-2  bg-[#1D1D21] border-gray-800  border rounded-2xl  w-200 h-max '>
            <div className='flex justify-between pl-6! pr-6! pt-4!'>
                <h1 className='text-xl font-bold text-white'>Últimas vistorias</h1>
                <a href="" className='text-[#FF5B78]'>Ver todas</a>
            </div>

             <hr className='border-gray-800 '/>


             <div className='flex flex-col gap-4'>
                {Info.map((a, index) => (
                    <InfoVistorias key={index} Equipamento={a.Equipamento} Patrimonio = {a.Patrimonio} User = {a.User} Date = {a.Date}/>
                ))}
             </div>
        </div>
    )
}