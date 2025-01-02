/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2025-01-02 15:32:55
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 16:04:00
 * @FilePath: /talengine-web/src/components/Drawer/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, type FC, type ReactNode } from 'react'

type Props = {
  visible: boolean
  children?: ReactNode | ReactNode[]
  onClose: () => void
}

const Drawer: FC<Props> = (props: Props) => {
  const { visible, children, onClose } = props

  if (!visible) return

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-[99999] ${
        visible ? 'backdrop-blur-[10px] bg-[rgba(0,0,0,0.3)]' : 'bg-transparent'
      } transition-all duration-300`}
      onClick={onClose} // 点击背景关闭抽屉
    >
      <div className="w-full h-full relative">
        <div
          className={`absolute top-0 h-full bg-white shadow-lg transition-transform duration-300 flex flex-col ${
            visible ? 'translate-x-0' : 'translate-x-[480px]'
          }`}
          style={{
            width: '490px',
            right: 0
          }}
          onClick={(e) => e.stopPropagation()} // 阻止点击事件冒泡
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Drawer
