import { FormEvent, useState } from 'react'

import { FormPesquisa, ButtonPesquisa, InputPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonPesquisa type="submit">Pesquisar</ButtonPesquisa>
    </FormPesquisa>
  )
}
export default FormVagas
