/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 13:46:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-28 17:24:22
 * @FilePath: /talengine-web/src/components/ProcessStep/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'
import Image from 'next/image'

type Props = {
  currStep: number
  steps: StepInfo[]
  // onNext: () => void
  // onPrev: () => void
}

export type StepInfo = {
  id: number
  num: number
  label: string
  status: 'pending' | 'processing' | 'done'
}

const ProcessStep: FC<Props> = (props: Props) => {
  const { currStep, steps } = props

  return (
    <div className="w-[356px] flex justify-between pl-[2px] pr-[2px]">
      {steps.map((step: StepInfo, index: number) => (
        <div
          className="relative w-[70px] flex flex-col items-center justify-center"
          key={step.id}
        >
          <div
            className={`relative w-[48px] h-[48px] rounded-[50%] flex items-center justify-center text-[18px] font-bold ${['done', 'processing'].includes(step.status) ? 'border-[1.5px] text-main-blue border-main-blue' : 'border text-black5-BB border-black5-BB'}`}
          >
            {step.status !== 'done' && step.num}
            {step.status === 'done' && (
              <>
                <Image
                  className="absolute"
                  src="/icons/process-done.svg"
                  alt="process-done"
                  width={24}
                  height={24}
                  priority
                />
                <div className="absolute w-[36px] h-[36px] rounded-[50%] bg-main-blue flex items-center justify-center opacity-[0.07]"></div>
              </>
            )}
          </div>
          <div
            className={`text-[12px] mt-[10px] ${['done', 'processing'].includes(step.status) ? 'text-black1-11' : 'text-black4-99'}`}
          >
            {step.label}
          </div>
          {index !== steps.length - 1 && (
            <span
              className={`absolute w-[46px] h-[1px] left-[80px] top-[24px] border border-dashed ${['done', 'processing'].includes(step.status) ? 'border-main-blue' : 'border-black4-99'}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProcessStep
