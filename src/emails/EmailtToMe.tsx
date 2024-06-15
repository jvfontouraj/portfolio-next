import React from 'react'
import { PostTypes } from './EmailToUser'
import { Html } from '@react-email/html'

export default function EmailToMe(content: PostTypes) {
  return (
    <Html className="flex w-full flex-col gap-10">
      <h1>Contato Portfólio!</h1>
      <h2>Nome: {content.name} </h2>
      <h3>E-mail: {content.email}</h3>
      <p>{content.text}</p>
    </Html>
  )
}
