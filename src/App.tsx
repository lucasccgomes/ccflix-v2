import './App.css'
import { Aptv } from './components/aptv'
import { Assine } from './components/assine'
import BgHeader from './components/bgheader'
import Button from './components/button'
import { InfHome } from './components/infhome'
import InInput from './components/input'
import { Navbar } from './components/navbar'

function App() {

  return (
    <>
      <BgHeader>
        <Navbar />
        <InfHome />
     
      </BgHeader>
        <Aptv />
    </>
  )
}

export default App
