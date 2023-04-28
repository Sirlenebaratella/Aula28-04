
import './App.css'
import ButtonFatec from './components/buttonFatec'

function App() {
  const mgs = 'Olá mundo !'
  return (
    <>
      <p>
        {mgs} 
      </p>
      <ButtonFatec type="button" label="Teste" />
      <ButtonFatec type="button" label="Outro Teste" />
    </>
  )
}

export default App
