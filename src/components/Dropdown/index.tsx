/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 23:23:13
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 14:51:35
 * @FilePath: /talengine-web/src/components/Dropdown/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { useState, useRef, useEffect, type FC, ChangeEvent } from 'react'

export type DropdownOptionProps = {
  label: string
  value: string
}

type Props = {
  type: 'select' | 'input'
  label: string
  value: string | [number, number]
  placeholder: string
  options?: DropdownOptionProps[]
  onChange?: (
    option: DropdownOptionProps | ChangeEvent<HTMLInputElement>
  ) => void
}

const Dropdown: FC<Props> = (props: Props) => {
  const { type, label, value, placeholder, options, onChange } = props
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState('down') // 控制下拉方向
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // 切换下拉框的显示状态
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option: DropdownOptionProps): void => {
    onChange?.(option as DropdownOptionProps)
    console.log(`你选择了：${option}`)
    setIsOpen(false)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e as ChangeEvent<HTMLInputElement>)
  }

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 动态判断下拉框位置
  useEffect(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.bottom + 150 > viewportHeight) {
        setPosition('up') // 如果下方空间不足，向上展开
      } else {
        setPosition('down') // 默认向下展开
      }
    }
  }, [isOpen])

  if (type === 'input') {
    return (
      <div className="relative w-full pt-[7px] flex flex-col" ref={dropdownRef}>
        <label className="text-black3-66 text-[14px] leading-[18px]">
          {label}
        </label>
        <div className="w-full pt-[14px] pb-[14px] cursor-pointer border-b border-[#E4E3E7] flex justify-between items-center">
          <input
            className="text-black1-11 outline-none text-[18px] leading-[26px] font-bold placeholder:text-black4-99 placeholder:font-normal"
            value={value as string}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full pt-[7px] flex flex-col" ref={dropdownRef}>
      <label className="text-black3-66 text-[14px] leading-[18px]">
        {label}
      </label>
      <div
        className="w-full pt-[14px] pb-[14px] cursor-pointer border-b border-[#E4E3E7] flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {value ? (
          // value
          <span className="text-black1-11 text-[18px] leading-[26px] font-bold select-none">
            {value}
          </span>
        ) : (
          // placeholder
          <span className="text-black4-99 text-[18px] leading-[26px] select-none">
            {placeholder}
          </span>
        )}
        <Image
          className="mr-[8px]"
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={18}
          height={18}
        />
      </div>
      {/* 下拉框 */}
      <div
        className={`absolute max-h-[300px] overflow-y-auto bg-white left-0 w-full border border-[#F0F0F1] pt-[12px] pb-[16px] rounded-[6px] ${isOpen ? 'open' : ''}`}
        style={{
          top: position === 'down' ? 'calc(100% + 10px)' : 'auto',
          bottom: position === 'up' ? '100%' : 'auto',
          boxShadow: '0px 6px 36px rgba(17, 17, 17, 0.10)',
          // overflow: 'hidden',
          transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: position === 'down' ? 'top' : 'bottom',
          transition: 'transform 0.2s ease-in-out',
          zIndex: 1000
        }}
      >
        {options &&
          options.map((option) => (
            <div
              className={`h-[44px] pl-[26px] flex items-center cursor-pointer hover:bg-[#F8F5FF] ${option.value === value ? 'bg-[#F8F5FF]' : 'bg-white'}`}
              key={option.value}
              onClick={() => handleSelect(option)}
            >
              <span className="text-[16px] text-black2-44">{option.label}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dropdown
