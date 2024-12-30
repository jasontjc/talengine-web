'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 23:23:13
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-28 17:10:01
 * @FilePath: /talengine-web/src/components/Dropdown/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { useState, useRef, useEffect, type FC, ChangeEvent } from 'react'

export type UnitProps = {
  label: string
  value: string
}

type Props = {
  label: string
  value: [string, string]
  placeholder: string
  unit?: string
  units?: UnitProps[]
  onChange?: (value: [string, string]) => void
  onUnitChange?: (unit: string) => void
}

const SalaryRangeInput: FC<Props> = (props: Props) => {
  const { label, value, placeholder, unit, units, onChange, onUnitChange } =
    props
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState('down') // 控制下拉方向
  const [startValue, setStartValue] = useState<string>('')
  const [endValue, setEndValue] = useState<string>('')
  const [positionType, setPositionType] = useState<string>('')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // 切换下拉框的显示状态
  const toggleDropdown = (type: string) => {
    if (isOpen) {
      setPositionType('')
    } else {
      setPositionType(type)
    }

    setIsOpen(!isOpen)
  }

  const handleSelect = (unitOpt: UnitProps): void => {
    onUnitChange?.(unitOpt.value)
    console.log(`你选择了：${unitOpt}`)
    setIsOpen(false)
  }

  const handleStartValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value

    if (val) {
      const salary = parseInt(val.replace(/,/g, ''), 10)

      if (!isNaN(salary)) {
        setStartValue(parseInt(val.replace(/,/g, ''), 10).toLocaleString())

        onChange?.([salary.toString(), endValue])
      } else {
        setStartValue('')

        onChange?.(['', endValue])
      }
    } else {
      setStartValue('')

      onChange?.(['', endValue])
    }
  }

  const handleEndValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value

    if (val) {
      const salary = parseInt(val.replace(/,/g, ''), 10)

      if (!isNaN(salary)) {
        setEndValue(parseInt(val.replace(/,/g, ''), 10).toLocaleString())

        onChange?.([startValue, salary.toString()])
      } else {
        setEndValue('')

        onChange?.([startValue, ''])
      }
    } else {
      setEndValue('')

      onChange?.([startValue, ''])
    }
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

  useEffect((): void => {
    if (isOpen) {
      if (value[0]) {
        setStartValue(value[0])
      }
      if (value[1]) {
        setEndValue(value[1])
      }
    }
  }, [isOpen, value])

  console.log(startValue)

  return (
    <div className="relative w-full pt-[7px] flex flex-col" ref={dropdownRef}>
      <label className="text-black3-66 text-[14px] leading-[18px]">
        {label}
      </label>
      <div className="w-full flex justify-between items-center">
        <div className="pt-[14px] pb-[14px] border-b border-[#E4E3E7] flex justify-between items-center">
          <div className="flex flex-1 justify-start">
            <input
              className="w-full outline-none text-black1-11 text-[18px] leading-[26px] font-bold select-none placeholder:font-normal"
              value={startValue}
              placeholder={placeholder || 'Enter'}
              onChange={handleStartValueChange}
            />
          </div>
          <div
            className="relative flex justify-end cursor-pointer"
            onClick={() => toggleDropdown('start')}
          >
            <div className="text-black2-44 text-[16px] mr-[6px]">{unit}</div>
            <Image
              className="mr-[8px]"
              src="/icons/arrow-down.svg"
              alt="arrow-down"
              width={18}
              height={18}
            />
            {/* 下拉框 */}
            {positionType === 'start' && (
              <div
                className={`absolute min-w-[120px] bg-white w-full border border-[#F0F0F1] pt-[12px] pb-[16px] rounded-[6px] ${isOpen ? 'open' : ''}`}
                style={{
                  top: position === 'down' ? 'calc(100% + 10px)' : 'auto',
                  bottom: position === 'up' ? '100%' : 'auto',
                  right: 0,
                  boxShadow: '0px 6px 36px rgba(17, 17, 17, 0.10)',
                  overflow: 'hidden',
                  transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: position === 'down' ? 'top' : 'bottom',
                  transition: 'transform 0.2s ease-in-out',
                  zIndex: 1000
                }}
              >
                {units &&
                  units.map((opt) => (
                    <div
                      className={`h-[44px] pl-[26px] flex items-center cursor-pointer hover:bg-[#F8F5FF] ${opt.value === unit ? 'bg-[#F8F5FF]' : 'bg-white'}`}
                      key={opt.value}
                      onClick={() => handleSelect(opt)}
                    >
                      <span className="text-[16px] text-black2-44">
                        {opt.label}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-[18px] h-[1px] bg-black ml-[30px] mr-[30px]" />
        <div className="pt-[14px] pb-[14px] border-b border-[#E4E3E7] flex justify-between items-center">
          <div className="flex flex-1 justify-start">
            <input
              className="w-full outline-none text-black1-11 text-[18px] leading-[26px] font-bold select-none placeholder:font-normal"
              value={endValue}
              placeholder={placeholder || 'Enter'}
              onChange={handleEndValueChange}
            />
          </div>
          <div
            className="relative flex justify-end cursor-pointer"
            onClick={() => toggleDropdown('end')}
          >
            <div className="text-black2-44 text-[16px] mr-[6px]">{unit}</div>
            <Image
              className="mr-[8px]"
              src="/icons/arrow-down.svg"
              alt="arrow-down"
              width={18}
              height={18}
            />
            {/* 下拉框 */}
            {positionType === 'end' && (
              <div
                className={`absolute min-w-[120px] bg-white w-full border border-[#F0F0F1] pt-[12px] pb-[16px] rounded-[6px] ${isOpen ? 'open' : ''}`}
                style={{
                  top: position === 'down' ? 'calc(100% + 10px)' : 'auto',
                  bottom: position === 'up' ? '100%' : 'auto',
                  right: 0,
                  boxShadow: '0px 6px 36px rgba(17, 17, 17, 0.10)',
                  overflow: 'hidden',
                  transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: position === 'down' ? 'top' : 'bottom',
                  transition: 'transform 0.2s ease-in-out',
                  zIndex: 1000
                }}
              >
                {units &&
                  units.map((opt) => (
                    <div
                      className={`h-[44px] pl-[26px] flex items-center cursor-pointer hover:bg-[#F8F5FF] ${opt.value === unit ? 'bg-[#F8F5FF]' : 'bg-white'}`}
                      key={opt.value}
                      onClick={() => handleSelect(opt)}
                    >
                      <span className="text-[16px] text-black2-44">
                        {opt.label}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalaryRangeInput
