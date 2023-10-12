import './App.css'
import { Aptv } from './components/aptv'
import BgHeader from './components/bgheader'
import { InfHome } from './components/infhome'
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
