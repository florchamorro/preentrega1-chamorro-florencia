
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <div className='App'>
      <NavBar />
      <h1 className='texto'>Invader Studio</h1>
      <div className='listContainer'>
        <ItemListContainer producto="Merengue" id="1" precio="5000" />
        <ItemListContainer producto="Salsa" id="2" precio="5200" />
        <ItemListContainer producto="Reggaeton" id="3" precio="4040" />
      </div>
    </div>
  )
}

export default App
