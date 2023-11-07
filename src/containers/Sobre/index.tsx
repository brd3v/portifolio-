import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Git } from './styled'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Sou um Desenvolvedor Front-End especializado em React. Possuo uma sólida
      experiência com a biblioteca React, bem como amplo conhecimento em
      JavaScript, CSS, SCSS, TypeScript e uma dose de Node.js. Atualmente, estou
      focado em me dedicar integralmente à programação, aproveitando o meu tempo
      livre enquanto estou desempregado. Além disso, estou envolvido em um
      projeto empreendedor na área de desenvolvimento web, no qual aplicamos as
      práticas mais atualizadas e eficazes. No entanto, não me limito apenas ao
      desenvolvimento web. Também tenho habilidades na criação de aplicações
      móveis, com vários pequenos projetos em React Native em meu portfólio. No
      momento, meu principal objetivo é conseguir meu primeiro emprego e
      construir uma carreira sólida no mercado. Tenho o desejo de continuar
      programando como hobby e, quem sabe, me aposentar assim no futuro. Além
      disso, sou o chefe de uma família de sete pessoas e estamos ansiosos para
      receber um novo membro em breve (graças a Deus). 😄
    </Paragrafo>
    <Git>
      <img
        src="https://github-readme-stats.vercel.app/api?username=brd3v&show_icons=true&theme=radical"
        alt=""
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=brd3v&layout=compact&langs_count=7&theme=dracula"
      />
    </Git>
  </section>
)
export default Sobre
