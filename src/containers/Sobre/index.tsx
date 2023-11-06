import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Git } from './styled'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id placeat
      dolorum rem aliquid voluptatum itaque consequatur eveniet. Illum, ipsa
      magnam? Harum reprehenderit doloribus amet quod temporibus dignissimos
      perferendis iure tempore.
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
