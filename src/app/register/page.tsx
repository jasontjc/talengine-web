'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-06 17:48:57
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'
import RegisterPanel, { type FormData } from '@/components/RegisterPanel'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/useToast'
import useRequest from '@/hooks/useRequest'

type RegisterPayload = {
  code: string
  confirmPassword?: string
  password?: string
  type: 'CANDIDATE' | 'EMPLOYERS'
  username: string
}

type RegisterResult = {}

const Register: FC = () => {
  const router = useRouter()
  const { toast } = useToast()
  const doRegisterReq = useRequest<RegisterPayload, RegisterResult>(
    '/api/register',
    'POST'
  )

  const handleSubmit = (data: FormData): void => {
    if (!data) return

    doRegisterReq({
      username: data.email,
      code: data.code,
      type: 'CANDIDATE'
    })
      .then((res) => {
        console.log(res)
        router.push('/register/process')
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          description: err.message
        })
      })
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center register-container">
      <RegisterPanel onSubmit={handleSubmit} />
    </div>
  )
}

export default Register
