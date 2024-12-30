'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-28 00:25:53
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRef, useState, useEffect, type FC } from 'react'
import Image from 'next/image'
import LabelInput, { LabelInputRefType } from '@/components/LabelInput'
import useRegex from '@/hooks/useRegex'

type Props = {
  email: string
  onFinish: (email: string) => void
}

const EmailStep: FC<Props> = (props: Props) => {
  const { email: initialEmail, onFinish } = props
  const { validEmail } = useRegex()
  const [email, setEmail] = useState<string>('jason.tang880414@gmail.com')
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('')
  const inputRef = useRef<LabelInputRefType | null>(null)

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {
    setEmail('')
    setEmailErrorMessage('')
  }

  const handleEmailFocus = (): void => {
    setEmailErrorMessage('')
  }

  const handleEmailBlur = (): void => {
    if (!email) {
      setEmailErrorMessage('Please provide an email address.')
      return
    }

    const emailValidateResult = validEmail(email)

    if (!emailValidateResult) setEmailErrorMessage('Invalid email format.')
  }

  const handleEmailChange = (val: string): void => {
    setEmail(val)
  }

  const handleContinue = (): void => {
    inputRef.current?.blur()

    handleEmailBlur()

    if (emailErrorMessage) return

    onFinish(email)
  }

  useEffect((): void => {
    if (initialEmail) {
      setEmail(initialEmail)
    }
  }, [initialEmail])

  useEffect(init, [])

  return (
    <div className="w-[420px] flex flex-col items-center">
      <div className="w-full h-[30px] flex flex-row items-center justify-between mt-[56px]">
        <h5 className="text-[#1F1C27] text-[24px] font-bold">
          Talent Register
        </h5>
        <a className="text-[#5E28F3] text-[18px]" href="">
          Login
        </a>
      </div>
      <div className="w-full mt-[40px] mb-[40px]">
        <LabelInput
          ref={inputRef}
          label="Your email address"
          value={email}
          errorMessage={emailErrorMessage}
          placeholder="Enter your address"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />
      </div>
      <button
        className="w-full h-[56px] bg-main-blue rounded-[40px] cursor-pointer text-white font-bold flex items-center justify-center"
        onClick={handleContinue}
      >
        Continu
        <Image
          className="ml-[4px]"
          src="/icons/arrow1.svg"
          alt="login continu"
          width={24}
          height={24}
        />
      </button>
      <div className="w-[109px] h-[22px] relative flex items-center mt-[15px] mb-[15px]">
        <span className="w-[42.5px] h-[1px] border border-[#F0F0F1]"></span>
        <span className="w-[15px] h-[22px] leading-[22px] ml-[4.5px] mr-[4.5px] text-[14px] text-black4-99">
          or
        </span>
        <span className="w-[42.5px] h-[1px] border border-[#F0F0F1]"></span>
      </div>
      <button className="w-full h-[56px] bg-white rounded-[40px] text-black font-bold flex items-center justify-center border-[2px] border-black6-E4">
        <Image
          className="mr-[12px]"
          src="/icons/google.svg"
          alt="google icon"
          width={18}
          height={18}
        />
        Continu with Google
      </button>
      <div className="w-full h-[18px] mt-[30px] mb-[60px] flex items-center justify-center">
        <span className="text-[#6C6A73] text-[14px]">
          By continuing, you agree to the
        </span>
        &nbsp;
        <a className="text-[#1F1C27] text-[14px] font-bold underline" href="">
          terms & conditions
        </a>
      </div>
    </div>
  )
}

export default EmailStep
