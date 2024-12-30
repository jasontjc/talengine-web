'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 23:13:10
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-28 21:45:32
 * @FilePath: /talengine-web/src/app/register/process/components/Step1.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState, type FC } from 'react'
import Image from 'next/image'
import Dropdown, { type DropdownOptionProps } from '@/components/Dropdown'
import SalaryRangeInput from '@/components/SalaryRangeInput'
import { CountryOptions, UnitOptions } from '@/config/constants'

export type FormData = {
  country: string
  position: string
  salaryRange: [string, string]
  salaryUnit: string
}

type Props = {
  onNext: (data: FormData) => void
}

const Step1: FC<Props> = (props: Props) => {
  const { onNext } = props
  const [country, setCountry] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [salaryRange, setSalaryRange] = useState<[string, string]>(['', ''])
  const [salaryUnit, setSalaryUnit] = useState<string>('USD')
  const [available, setAvailable] = useState<boolean>(false)

  const handleDropdownSelect = (key: string, option: DropdownOptionProps) => {
    switch (key) {
      case 'country':
        if (country && option.value === country) return

        setCountry(option.value)
        break
      case 'position':
        if (position && option.value === position) return

        setPosition(option.value)
        break
      default:
        break
    }
  }

  const handleSalaryRangeChange = (range: [string, string]): void => {
    setSalaryRange(range)
  }

  const handleUnitChange = (unit: string): void => {
    setSalaryUnit(unit)
  }

  const handleNext = (): void => {
    onNext({
      country,
      position,
      salaryRange,
      salaryUnit
    })
  }

  useEffect((): void => {
    if (country && position && salaryRange[0] && salaryRange[1] && salaryUnit) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  }, [country, position, salaryRange, salaryUnit])

  return (
    <div className="w-[480px] flex flex-col">
      <h3 className="mt-[70px] text-black1-11 text-[24px] font-bold leading-[30px] text-left">
        Tell Us Your Personal Expectations
      </h3>
      <p className="text-black3-66 text-[14px] leading-[18px] mt-[10px] mb-[50px]">
        Please clarify your personal expectations in order to  match efficienly
      </p>
      <div className="w-full mb-[30px]">
        <Dropdown
          type="select"
          label="Expected Location"
          value={country}
          placeholder="Choose one country"
          options={CountryOptions}
          onChange={(opt) => handleDropdownSelect('country', opt)}
        />
      </div>
      <div className="w-full mb-[30px]">
        <Dropdown
          type="select"
          label="Expected Position"
          value={position}
          placeholder="Choose one position"
          options={['Back-end development engineer'].map((val) => ({
            label: val,
            value: val
          }))}
          onChange={(opt) => handleDropdownSelect('position', opt)}
        />
      </div>
      <div className="w-full mb-[42px]">
        <SalaryRangeInput
          label="Expected Monthly Salary"
          value={salaryRange}
          placeholder="Enter"
          unit={salaryUnit}
          units={UnitOptions}
          onChange={handleSalaryRangeChange}
          onUnitChange={handleUnitChange}
        />
      </div>
      <button
        className={`w-full h-[56px] bg-main-blue rounded-[40px] cursor-pointer text-white font-bold flex items-center justify-center ${available ? 'opacity-100' : 'opacity-50'}`}
        disabled={!available}
        onClick={handleNext}
      >
        Next
        <Image
          className="ml-[4px]"
          src="/icons/arrow1.svg"
          alt="login continu"
          width={24}
          height={24}
        />
      </button>
      <p className="text-black3-66 text-[14px] mt-[26px] text-center">
        All fields are required
      </p>
    </div>
  )
}

export default Step1
