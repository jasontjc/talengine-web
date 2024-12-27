'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 11:36:14
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'
import RegisterPanel, { type FormData } from '@/components/RegisterPanel'
import { useRouter } from 'next/navigation'

const Register: FC = () => {
  const router = useRouter()

  const handleSubmit = (data: FormData): void => {
    if (!data) return

    router.push('/register/process')
  }

  return (
    <div className="w-full h-full flex items-center justify-center register-container">
      <RegisterPanel onSubmit={handleSubmit} />
    </div>
  )
}

export default Register
