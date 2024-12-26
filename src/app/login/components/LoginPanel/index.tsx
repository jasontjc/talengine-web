'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 00:42:28
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, type FC } from 'react'
import Image from 'next/image'
import EmailStep from './EmailStep'

type FormData = {
  email: string
  code: string
}

enum STEP {
  EMAIL,
  CODE
}

const LoginPanel: FC = () => {
  const [step, setStep] = useState<STEP>(STEP.EMAIL)
  const [form, setForm] = useState<FormData>({
    email: '',
    code: ''
  })

  const handleEmailComplete = (email: string): void => {
    if (!email) return

    setForm({
      ...form,
      email
    })

    setStep(STEP.CODE)
  }

  return (
    <div className="w-[520px] rounded-[16px] bg-white px-[50px] flex flex-col items-center">
      <Image
        className="mt-[35px]"
        src="/images/login-logo@2x.jpg"
        alt="Talengine Logo"
        width={214}
        height={60}
      />
      {step === STEP.EMAIL && <EmailStep onFinish={handleEmailComplete} />}
      {/* {step === STEP.CODE && <CodeStep />} */}
    </div>
  )
}

export default LoginPanel
