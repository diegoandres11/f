import './App.css'
import BotonComponente from './components/BotonComponente'
import NavBar from './components/NavBar'
import ContadorComponente from './components/ContadorComponente'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Patitas Felices!"/>
    </>
  )
}

export default App
