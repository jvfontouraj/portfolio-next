import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as React from 'react'
import EmailToMe from '@/emails/EmailtToMe'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: Request) {
  const content = await request.json()

  try {
    const emailToMe = await resend.sendEmail({
      from: 'contato@joaojardim.dev',
      to: ['contato@joaojardim.dev', 'joao@joaojardim.dev'],
      subject: 'Contato Portfólio',
      react: EmailToMe(content) as React.ReactElement,
    })

    return NextResponse.json(emailToMe)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
