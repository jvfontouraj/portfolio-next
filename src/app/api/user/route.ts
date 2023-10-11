import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as React from 'react'
import { EmailToUser } from '@/app/components/EmailTemplates'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: Request) {
  const content = await request.json()

  try {
    const emailToUser = await resend.sendEmail({
      from: 'contato@joaojardim.dev',
      to: [content.email],
      subject: 'Contato Dev João Jardim',
      react: EmailToUser(content) as React.ReactElement,
    })

    return NextResponse.json(emailToUser)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
