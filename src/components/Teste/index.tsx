import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
  fontSize: string
}
const Btn = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const Teste = () => {
  return (
    <>
      <Btn fontSize="18px" principal={false}>
        Enviar
      </Btn>

      <Btn fontSize="14px" principal>
        Canlelar
      </Btn>
    </>
  )
}

export default Teste
