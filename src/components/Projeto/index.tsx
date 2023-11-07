import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, Flex, LinkBotao } from './styled'

//o codigo de estilização deve estar antes do componente

const Projeto = () => (
  <Flex>
    <Card>
      <Titulo>Projeto Azul Roteiros.</Titulo>
      <Paragrafo tipo="secundario">
        Projeto Full stack utilizei Nodejs para fazer a API, e React no front
        end, Bootstrap para estilização e o git para versionamento de codigo
      </Paragrafo>
      <LinkBotao target="blank" href="https://github.com/brd3v/novoFront">
        Visualizar
      </LinkBotao>
    </Card>
    <Card>
      <Titulo>Calculadora IMC - Mobile</Titulo>
      <Paragrafo tipo="secundario">
        Neste projeto programei uma simples Calculadora imc que retorna em
        termpo real o seu IMC e sua classificação na tabela IMC, neste projeto
        utilizei React-Native e Styled Components
      </Paragrafo>
      <LinkBotao
        target="blank"
        href="https://github.com/brd3v/ReactNative_Imc_Calculator"
      >
        Visualizar
      </LinkBotao>
    </Card>
    <Card>
      <Titulo>Termometro</Titulo>
      <Paragrafo tipo="secundario">
        Um projeto que simula um termometro atravves de requisições Ajax, o
        front end foi feito em React retorna a sua temperatura em tempo real e a
        descrição do tema de forma automatica.
      </Paragrafo>
      <LinkBotao target="blank" href="https://github.com/brd3v/temperatura">
        Visualizar
      </LinkBotao>
    </Card>
    <Card>
      <Titulo>Mangá News</Titulo>
      <Paragrafo tipo="secundario">
        Um porotal de notícias de Animes/Mangás e Games através de uma API de
        terceiros que atualiza o meu front end, foi um dos meus primeiros
        projetos com Reactjs
      </Paragrafo>
      <LinkBotao target="blank" href="https://github.com/brd3v/temperatura">
        Visualizar
      </LinkBotao>
    </Card>
  </Flex>
)
export default Projeto
