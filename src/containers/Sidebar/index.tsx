import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainers } from './styles'
type Props = {
  trocaTema: () => void
}
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainers>
      <Avatar />
      <Titulo fontSize={20}> Bruno Pedro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Brd3v
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>{' '}
    </SidebarContainers>
  </aside>
)
export default Sidebar
