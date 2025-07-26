import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import styled from 'styled-components'

import { Cores } from '../../styles'

export const FormPesquisa = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const ButtonPesquisa = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const InputPesquisa = styled.input<
  InputHTMLAttributes<HTMLInputElement>
>`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
`
