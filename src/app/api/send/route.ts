import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as React from 'react'
import { EmailToUser, EmailToMe } from '@/app/components/EmailTemplates'

export interface PostTypes {
  content: {
    name: string
    email: string
    text: string
  }
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST({ content }: PostTypes) {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['jvfjardim@gmail.com'],
      subject: 'Contato Portfólio',
      react: EmailToMe({ content }) as React.ReactElement,
    })

    const emailToUser = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [content.email],
      subject: 'Contato Dev João Jardim',
      react: EmailToUser({ content }) as React.ReactElement,
    })

    return NextResponse.json(emailToUser)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
