import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Cores } from '../../styles'

export const ListaVagas = styled.ul`
  border: 1px solid ${Cores.corPrincipal};
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${Cores.corPrincipal};
    color: ${Cores.corSecundaria};
  }

  :hover a {
    border-color: ${Cores.corPrincipal};
    background-color: ${Cores.corSecundaria};
    color: ${Cores.corPrincipal};
  }
`

export const TituloVagas = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkVagas = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>`
  border-color: ${Cores.corSecundaria};
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
