import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styled'

//o codigo de estilização deve estar antes do componente

const Projeto = () => (
  <Card>
    <Titulo> Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas com buejs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
export default Projeto
