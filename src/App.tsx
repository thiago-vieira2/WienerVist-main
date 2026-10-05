
import './App.css'

import Header from './components/header'
import Identificacao from './components/UI/Identificacao'
import Home from './pages/home'
import NovaVistoria from './pages/NovaVistoria'
import Rotas from './Routes'

function App() {
   
  return (
       <div className='flex flex-col gap-5'>

              <Rotas/>
            
           
        </div>


  )
}

export default App