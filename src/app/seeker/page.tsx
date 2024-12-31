'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-31 15:05:03
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, type FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const Basename = '/seeker'

const Seeker: FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {}

  useEffect((): void => {
    if (pathname === Basename) {
      router.replace([Basename, '/profile'].join(''))
      return
    }
  }, [pathname, router])

  useEffect(init, [])

  return <div className="relative w-full h-full flex flex-row"></div>
}

export default Seeker
