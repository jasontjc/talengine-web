'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:28:15
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-31 15:03:25
 * @FilePath: /talengine-web/src/app/login/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect, type ReactNode, type FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import SideBar from '@/components/SideBar'
import { SeekerMenuInfos } from '@/config/constants'

type Props = {
  children: ReactNode
}

const SeekerLayout: FC<Props> = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  const pathname = usePathname()
  const router = useRouter()
  const [currMenuKey, setCurrMenuKey] = useState<string>('')

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {}

  const handleMenuClick = (key: string): void => {
    let matchedMenuInfo

    for (const prop of SeekerMenuInfos) {
      if (prop.key === key) {
        matchedMenuInfo = prop
        break
      }
    }

    if (!matchedMenuInfo) return

    setCurrMenuKey(matchedMenuInfo.key)
    router.push(matchedMenuInfo.path)
  }

  useEffect((): void => {
    if (pathname) {
      let matchedMenuInfo

      for (const prop of SeekerMenuInfos) {
        if (prop.path === pathname) {
          matchedMenuInfo = prop
          break
        }
      }

      if (!matchedMenuInfo) return

      setCurrMenuKey(matchedMenuInfo.key)
    }
  }, [pathname, router])

  useEffect(init, [])

  return (
    <div className="relative w-full h-full flex flex-row">
      <SideBar
        activeKey={currMenuKey}
        menuItems={SeekerMenuInfos}
        onMenuClick={handleMenuClick}
      />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default SeekerLayout
