/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 11:51:30
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 12:00:20
 * @FilePath: /talengine-web/src/components/TopBar/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { type FC } from 'react'

const TopBar: FC = () => {
  return (
    <div className="w-full h-[68px] bg-main-black pl-[40px] pr-[40px] flex items-center justify-between">
      <Image
        src="/images/topbar-logo@2x.png"
        alt="topbar-logo"
        width={163}
        height={48}
      />
      <a className="text-black8-F4 text-[18px] cursor-pointer" href="">
        Login Out
      </a>
    </div>
  )
}

export default TopBar
