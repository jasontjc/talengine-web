'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 11:50:39
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState, type FC } from 'react'
import Image from 'next/image'
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

const RegisterPanel: FC<Props> = (props: Props) => {
  const { onSubmit } = props
  const [step, setStep] = useState<STEP>(STEP.EMAIL)
  const [form, setForm] = useState<FormData>({
    email: '',
    code: ''
  })

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

    setStep(STEP.CODE)
  }

  const handleCodeComplete = (code: string): void => {
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
