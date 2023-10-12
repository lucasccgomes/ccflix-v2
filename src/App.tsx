import './App.css'
import { Aptv } from './components/aptv'
import BgHeader from './components/bgheader'
import { InfHome } from './components/infhome'
import { Navbar } from './components/navbar'

function App() {

  return (
    <div className='bg-black'>
      <BgHeader>
        <Navbar />
        <InfHome />
      </BgHeader>
      <div className='mt-3'>
        <Aptv />
        </div>
    </div>
  )
}

export default App
