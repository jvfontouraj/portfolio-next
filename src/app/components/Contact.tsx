import { i18n } from '@/assets/i18n'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/app/components/ui/use-toast'

export function Contact({ lang }: { lang: string }) {
  const contact = i18n[lang].contact
  const content = contact.content
  const { toast } = useToast()

  const formSchema = z.object({
    name: z.string().min(3, { message: 'Mínimo de 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    text: z.string().min(10, { message: 'Mínimo de 10 caracteres' }),
  })

  type FormSchema = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    await fetch('/api/me', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        text: data.text,
      }),
    })
    try {
      await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          text: data.text,
        }),
      })

      toast({
        title: 'Sucesso!',
        description:
          'Obrigado pelo contato! Em breve enviarei uma resposta para o email informado.',
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro!',
        description:
          'Ocorreu um erro ao enviar sua mensagem, tente novamente ou entre em contato pelo email: jvfjardim@gmail.com',
      })
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-3xl md:text-4xl">{contact.title}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-full max-w-[830px] flex-col justify-center gap-5"
      >
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <div className="flex w-full flex-col">
            <h3>{content.name}</h3>
            <input
              type="text"
              {...register('name')}
              placeholder={content.namePlaceholder}
              className="h-12 rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
            />
            {errors.name && (
              <span className="text-red-400">{errors.name.message}</span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <h3>{content.email}</h3>
            <input
              type="text"
              {...register('email')}
              placeholder={content.emailPlaceholder}
              className="h-12 rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h3>{content.message}</h3>
          <textarea
            {...register('text')}
            placeholder={content.messagePlaceholder}
            className="h-40 resize-none rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
          />
          {errors.text && (
            <span className="text-red-400">{errors.text.message}</span>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/joaovfjardim/"
              target="_blank"
            >
              <LinkedInLogoIcon className="h-8 w-8" />
            </Link>
            <Link href="https://github.com/jvfontouraj" target="_blank">
              <GitHubLogoIcon className="h-8 w-8" />
            </Link>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-[10px] border border-neutral-600 bg-white px-6 py-3 text-neutral-800 shadow-[0px_4px_4px_0px_#0000007f] dark:bg-neutral-800 dark:text-neutral-50 dark:disabled:bg-neutral-400"
          >
            {content.send}
          </button>
        </div>
      </form>
    </section>
  )
}
