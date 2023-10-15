import React from 'react'
import { Html } from '@react-email/html'

export interface PostTypes {
  name: string
  email: string
  text: string
}

export default function EmailToUser(content: PostTypes) {
  return (
    <Html className="flex w-full flex-col gap-10">
      <h1>E-mail enviado com sucesso!</h1>
      <p>
        Olá {content.name}, obrigado por entrar em contato, já recebi seu email
        e responderei o mais breve possível.
      </p>
      <h2>Seguem os detalhes do e-mail enviado:</h2>
      <h3>E-mail: {content.email}</h3>
      <p>{content.text}</p>
    </Html>
  )
}
