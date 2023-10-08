import * as React from 'react'
import { PostTypes } from '../api/send/route'

export const EmailToUser: React.FC<Readonly<PostTypes>> = ({ content }) => (
  <div className="flex w-full flex-col gap-10">
    <h1>E-mail enviado com sucesso!</h1>
    <p>
      Olá {content.name}, obrigado por entrar em contato, já recebi seu email e
      responderei o mais breve possível.
    </p>
    <h2>Seguem os detalhes do e-mail enviado:</h2>
    <h3>E-mail: {content.email}</h3>
    <p>{content.text}</p>
  </div>
)

export const EmailToMe: React.FC<Readonly<PostTypes>> = ({ content }) => (
  <div className="flex w-full flex-col gap-10">
    <h1>Contato Portfólio!</h1>
    <h2>Nome: {content.name} </h2>
    <h3>E-mail: {content.email}</h3>
    <p>{content.text}</p>
  </div>
)
