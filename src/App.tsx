import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Porjetos from './containers/Porjetos'

function App() {
  return (
    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Porjetos />
        </main>
      </Container>
    </div>
  )
}

export default App
