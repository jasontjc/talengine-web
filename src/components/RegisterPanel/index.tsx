'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-06 17:45:54
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState, type FC } from 'react'
import Image from 'next/image'
import { useToast } from '@/hooks/useToast'
import useRequest from '@/hooks/useRequest'
import EmailStep from './EmailStep'
import CodeStep from './CodeStep'

type Props = {
  onSubmit: (data: FormData) => void
}

export type FormData = {
  email: string
  code: string
}

enum STEP {
  EMAIL,
  CODE
}

type SendEmailCodePayload = {
  receiveEmail: string
}

type SendEmailCodeResult = unknown

const RegisterPanel: FC<Props> = (props: Props) => {
  const { onSubmit } = props
  const { toast } = useToast()
  const [step, setStep] = useState<STEP>(STEP.EMAIL)
  const [form, setForm] = useState<FormData>({
    email: 'jason.tang880414@gmail.com',
    code: ''
  })
  const sendEmailCodeReq = useRequest<
    SendEmailCodePayload,
    SendEmailCodeResult
  >('/api/getCode', 'POST')

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {
    setForm({
      email: '',
      code: ''
    })
  }

  const handleEmailComplete = (email: string): void => {
    if (!email) return

    setForm({
      ...form,
      email
    })

    sendEmailCodeReq({
      receiveEmail: email
    })
      .then((res) => {
        console.log(res)
        toast({
          description: 'The verification code has been sent to your email.'
        })
        setStep(STEP.CODE)
      })
      .catch((err) => {
        console.error(err)
        // message.error(err.message, 1)
        toast({
          variant: 'destructive',
          description: err.message
        })
      })
  }

  const handleCodeComplete = (code: string): void => {
    console.log('code', code)
    if (!code) return

    const newForm = form

    newForm.code = code

    setForm(newForm)
    onSubmit(newForm)
  }

  const handlePreview = (): void => {
    setStep(STEP.EMAIL)
  }

  useEffect(init, [])

  return (
    <div className="w-[520px] rounded-[16px] bg-white px-[50px] flex flex-col items-center">
      <Image
        className="mt-[35px]"
        src="/images/register-logo@2x.jpg"
        alt="Talengine Logo"
        width={214}
        height={60}
      />
      {step === STEP.EMAIL && (
        <EmailStep email={form.email} onFinish={handleEmailComplete} />
      )}
      {step === STEP.CODE && (
        <CodeStep
          email={form.email}
          onFinish={handleCodeComplete}
          onPreview={handlePreview}
        />
      )}
    </div>
  )
}

export default RegisterPanel
