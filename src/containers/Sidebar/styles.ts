import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: #eee;
  border-radius: 12px;
  padding: 8px;
  background-color: #282a35;
  cursor: pointer;
`
export const SidebarContainers = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`