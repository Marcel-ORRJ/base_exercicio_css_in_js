import { ListaVagas, TituloVagas, LinkVagas } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ListaVagas>
    <TituloVagas>
      <h3>{props.titulo}</h3>
    </TituloVagas>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <LinkVagas href="#">Ver detalhes e candidatar-se</LinkVagas>
  </ListaVagas>
)

export default Vaga
