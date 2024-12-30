'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-29 00:48:47
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react'
import ProcessStep, { type StepInfo } from '@/components/ProcessStep'
import Step1, { type FormData as Step1FormData } from './components/Step1'
import Step2, { type FormData as Step2FormData } from './components/Step2'
import Step3 from './components/Step3'

type FormData = {
  // step 1
  country: string
  position: string
  salaryRange: [string, string]
  salaryUnit: string
  // step 2
  resumeFileUri: string
}

export default function RegisterProcess() {
  const [currStep, setCurrStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({
    country: '',
    position: '',
    salaryRange: ['', ''],
    salaryUnit: 'USD',
    resumeFileUri: ''
  })
  const [steps, setSteps] = useState<StepInfo[]>([
    {
      id: 1,
      num: 1,
      label: 'Expectations',
      status: 'processing'
    },
    {
      id: 2,
      num: 2,
      label: 'Resume',
      status: 'pending'
    },
    {
      id: 3,
      num: 3,
      label: 'Complete',
      status: 'pending'
    }
  ])

  const handleNext = (
    curr: number,
    data: Step1FormData | Step2FormData
  ): void => {
    if (curr === 1) {
      setFormData({
        ...formData,
        ...data
      })
      setCurrStep(2)
      setSteps((prev: StepInfo[]): StepInfo[] => {
        const newSteps = prev.map((val: StepInfo, index) => {
          if (index === 0) {
            return {
              ...val,
              status: 'done' as 'pending' | 'processing' | 'done'
            }
          }
          if (index === 1) {
            return {
              ...val,
              status: 'processing' as 'pending' | 'processing' | 'done'
            }
          }

          return val
        })

        return newSteps
      })
    } else if (curr === 2) {
      setFormData({
        ...formData,
        ...data
      })
      setCurrStep(3)
      setSteps((prev: StepInfo[]): StepInfo[] => {
        const newSteps = prev.map((val: StepInfo, index) => {
          if (index === 1) {
            return {
              ...val,
              status: 'done' as 'pending' | 'processing' | 'done'
            }
          }
          if (index === 2) {
            return {
              ...val,
              status: 'processing' as 'pending' | 'processing' | 'done'
            }
          }

          return val
        })

        return newSteps
      })
    }
  }

  return (
    <div className="relative w-full flex-1 min-h-0">
      {currStep !== 3 && (
        <a className="absolute top-[42px] right-[42px] text-black2-44 text-[18px] leading-[20px] underline">
          Skip
        </a>
      )}
      <div className="w-full h-full overflow-y-auto flex items-center justify-center">
        <div
          className={`${currStep !== 3 ? 'min-h-[100%]' : 'h-full'} flex flex-col items-center pt-[72px] pb-[84px]`}
        >
          {currStep !== 3 && <ProcessStep currStep={currStep} steps={steps} />}
          {currStep === 1 && (
            <Step1 onNext={(data: Step1FormData) => handleNext(1, data)} />
          )}
          {currStep === 2 && (
            <Step2 onNext={(data: Step2FormData) => handleNext(2, data)} />
          )}
          {currStep === 3 && <Step3 />}
        </div>
      </div>
    </div>
  )
}
