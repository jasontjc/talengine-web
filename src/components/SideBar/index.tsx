'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-31 10:39:30
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-31 16:35:21
 * @FilePath: /talengine-web/src/components/SideBar/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect, type FC } from 'react'
import Image from 'next/image'

type Props = {
  activeKey: string
  menuItems: { label: string; key: string; path: string; icon: string }[]
  onMenuClick?: (key: string) => void
}

const SideBar: FC<Props> = (props: Props) => {
  const { activeKey, menuItems, onMenuClick } = props
  const [translateY, setTranslateY] = useState<number>(0) // 用于控制动画的 translateY 值
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const handleMenuClick = (key: string, index: number): void => {
    if (activeKey && activeKey === key) return

    if (isCollapsed) {
      // 更新 translateY 值
      setTranslateY(index * (96 + 15)) // 每个菜单项高度为 60px
    } else {
      // 更新 translateY 值
      setTranslateY(index * 60) // 每个菜单项高度为 60px
    }

    onMenuClick?.(key)
  }

  const hadnelToggleSideBar = (): void => {
    setIsCollapsed(!isCollapsed)
  }

  useEffect(() => {
    // 初始化时根据 activeKey 设置 translateY
    const activeIndex = menuItems.findIndex((menu) => menu.key === activeKey)
    if (activeIndex !== -1) {
      if (isCollapsed) {
        setTranslateY(activeIndex * (96 + 15))
      } else {
        setTranslateY(activeIndex * 60)
      }
    }
  }, [activeKey, menuItems, isCollapsed])

  return (
    <div
      className={`bg-main-black h-full flex flex-col items-center min-h-0 transition-all duration-300 ease-in-out flex-shrink-0 ${isCollapsed ? 'pt-[34px]' : 'pt-[40px]'}`}
      style={{
        width: isCollapsed ? '170px' : '248px' // 动态设置宽度
      }}
    >
      {isCollapsed ? (
        <div className="flex flex-col items-center">
          <Image
            src="/images/collapsed-logo@2x.png"
            alt="logo"
            width={165}
            height={43}
          />
          <span className="text-white text-[18px] leading-[24px]">
            Talengine
          </span>
        </div>
      ) : (
        <Image
          src="/images/home-logo@2x.png"
          alt="logo"
          width={186}
          height={48}
        />
      )}
      <div
        className={`relative w-full flex-1 ${isCollapsed ? 'mt-[55px]' : 'mt-[32px]'}`}
      >
        <ul className="w-full">
          {menuItems.map((menu, index) => (
            <li
              className={`relative w-full flex items-center group cursor-pointer ${isCollapsed ? 'h-[96px] mb-[15px] last:mb-0 flex-col items-center' : 'h-[60px] flex-row pl-[32px]'}`}
              key={menu.key}
              onClick={() => handleMenuClick(menu.key, index)}
            >
              <div
                className={`${isCollapsed ? 'w-[50px] h-[50px] mt-[5px]' : 'w-[32px] h-[32px]'} flex items-center justify-center transition-transform duration-300 ease-in-out ${activeKey === menu.key ? 'rounded-[10px]' : ''}`}
                style={{
                  background:
                    activeKey === menu.key
                      ? 'linear-gradient(139deg, #5E28F3 37%, #289BF3 102.84%)'
                      : isCollapsed
                        ? '#1F1C27'
                        : ''
                }}
              >
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  width={isCollapsed ? 34 : 24}
                  height={isCollapsed ? 34 : 24}
                />
              </div>
              <span
                className={`${isCollapsed ? 'text-[16px] mt-[8px]' : 'text-[18px] ml-[18px]'} ${
                  activeKey === menu.key
                    ? 'text-black8-F4 font-bold'
                    : 'text-black5-BB'
                }`}
              >
                {menu.label}
              </span>
              {/* <span
                className={`text-[18px] ml-[18px] ${activeKey === menu.key ? 'text-black8-F4 font-bold' : 'text-black5-BB'}`}
              >
                {menu.label}
              </span> */}
            </li>
          ))}
        </ul>
        {/* 动态移动的 Image */}
        <a
          className={`absolute cursor-pointer right-[-9px] transition-transform duration-300 ease-in-out ${isCollapsed ? ' top-[-10px]' : ' top-[-18px]'}`}
          style={{
            transform: `translateY(${translateY}px)` // 动态设置 translateY
          }}
          onClick={hadnelToggleSideBar}
        >
          <Image
            src="/images/menu-active-mark@2x.png"
            alt="active mark"
            width={28}
            height={97}
          />
        </a>
      </div>
      <div
        className={`w-full flex items-center transition-transform duration-300 ease-in-out ${isCollapsed ? 'flex-col pb-[34px]' : 'flex-row justify-between  pl-[25px] pr-[20px] pb-[32px]'}`}
      >
        <div
          className={`flex items-center ${isCollapsed ? 'flex-col' : 'flex-row justify-start'}`}
        >
          <Image
            src="/images/default-admin-avatar@2x.png"
            alt="admin avatar"
            width={48}
            height={48}
          />
          <span
            className={`text-[14px] text-black8-F4 ${isCollapsed ? 'mt-[6px]' : 'ml-[8px]'}`}
          >
            Claire Wilson
          </span>
        </div>
        {isCollapsed ? (
          <a
            className="text-black4-99 text-[11px] leading-[14px] mt-[11px]"
            href=""
          >
            Login Out
          </a>
        ) : (
          <div className="flex justify-end items-center">
            <a href="">
              <Image
                src="/icons/logout.svg"
                alt="logout"
                width={20}
                height={20}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default SideBar
