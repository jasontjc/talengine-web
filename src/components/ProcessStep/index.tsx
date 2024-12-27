/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 13:46:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 14:31:57
 * @FilePath: /talengine-web/src/components/ProcessStep/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'
import Image from 'next/image'

type Props = {
  currStep: number
  onNext: () => void
  onPrev: () => void
}

type StepInfo = {
  id: number
  num: number
  label: string
  status: 'pending' | 'processing' | 'done'
}

const StepItems: StepInfo[] = [
  {
    id: 1,
    num: 1,
    label: 'Expectations',
    status: 'done'
  },
  {
    id: 2,
    num: 2,
    label: 'Resume',
    status: 'processing'
  },
  {
    id: 3,
    num: 3,
    label: 'Complete',
    status: 'pending'
  }
]

const ProcessStep: FC<Props> = (props: Props) => {
  const { currStep, onNext, onPrev } = props

  return (
    <div className="w-[356px] flex justify-between pl-[2px] pr-[2px]">
      {StepItems.map((step: StepInfo, index: number) => (
        <div
          className="relative w-[70px] flex flex-col items-center justify-center"
          key={step.id}
        >
          <div
            className={`w-[48px] h-[48px] rounded-[50%] flex items-center justify-center text-[18px] font-bold ${currStep === step.id ? 'border-[1.5px] text-main-blue border-main-blue' : 'border text-black5-BB border-black5-BB'}`}
          >
            {step.status !== 'done' && step.num}
            {step.status === 'done' && (
              <div className="w-[36px] h-[36px] rounded-[50%] bg-main-blue flex items-center justify-center opacity-[0.07]">
                <Image
                  // className="w-[24px] h-[24px]"
                  src="/images/process-done@2x.png"
                  alt="process-done"
                  width={24}
                  height={24}
                />
              </div>
            )}
          </div>
          <div
            className={`text-[12px] mt-[10px] ${currStep === step.id ? 'text-black1-11' : 'text-black4-99'}`}
          >
            {step.label}
          </div>
          {index !== StepItems.length - 1 && (
            <span
              className={`absolute w-[46px] h-[1px] left-[80px] top-[24px] border border-dashed ${currStep === step.id ? 'border-main-blue' : 'border-black4-99'}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProcessStep
