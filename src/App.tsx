
import './App.css'

import Header from './components/header'
import Identificacao from './components/UI/Identificacao'
import Home from './pages/home'
import NovaVistoria from './pages/NovaVistoria'

function App() {
   
  return (
       <div className='flex flex-col gap-5'>
          
            <Header/>
            <NovaVistoria/>
        </div>


  )
}

export default App
