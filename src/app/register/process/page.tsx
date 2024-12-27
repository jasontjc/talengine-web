'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 14:19:21
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react'
import ProcessStep from '@/components/ProcessStep'

type FormData = {
  // step 1
  country: string
  position: string
  salaryRange: [number, number]
  salaryUnit: 'USD'
  // step 2
  resumeFileUri: string
}

export default function RegisterProcess() {
  const [currStep, setCurrStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({})

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <ProcessStep currStep={currStep} />
      {/* {currStep === 1 && <Step1 />}
      {currStep === 2 && <Step2 />}
      {currStep === 3 && <Step3 />} */}
    </div>
  )
}
