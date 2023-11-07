import React, { useState } from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import { ThemeProvider } from 'styled-components'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'

function App() {
  const [estadUsandoThemaDark, setEstaUsandoTemaDark] = useState(false)
  function trocaTema() {
    setEstaUsandoTemaDark(!estadUsandoThemaDark)
  }
  return (
    <ThemeProvider theme={estadUsandoThemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
