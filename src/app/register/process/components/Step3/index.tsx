'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-29 00:25:46
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-29 00:47:33
 * @FilePath: /talengine-web/src/app/register/process/components/Step3/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'
import Image from 'next/image'

type Props = {
  onNext: () => void
}

const Step3: FC<Props> = (props: Props) => {
  const { onNext } = props

  const handleNext = (): void => {
    onNext()
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-[468px] h-[362px] rounded-[16px] mr-[115px] flex flex-col items-center justify-center"
        style={{
          boxShadow: '0px 6px 36px 0px rgba(17, 17, 17, 0.06)'
        }}
      >
        <div className="relative w-20 h-20">
          {/* <!-- 背景圆 --> */}
          <div className="absolute inset-0 rounded-full bg-[#F8F5FF] border-[6px] border-[#FBFBFF]"></div>
          {/* <!-- 旋转的圆弧 --> */}
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#FBFBFF] border-r-[#337CE9] border-b-[#5E28F3] animate-spin-slow"></div>
          {/* <!-- 三角形 --> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-[#651FFF]"></div>
          {/* <!-- 圆点 --> */}
          <div className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#651FFF] rounded-full"></div>
        </div>
        <div className="flex flex-col mt-[60px] items-center">
          <div className="h-[54px] flex flex-col items-center justify-between">
            <p className="text-black2-44 text-[14px] leading-[18px]">
              Your op skills library is being generated.
            </p>
            <p className="text-black2-44 text-[14px] leading-[18px]">
              Please wait a few minutes to check in{' '}
            </p>
          </div>
          <h5 className="mt-[8px] text-black1-11 font-bold leading-[22px]">
            ‘My profile - Vetting Results’.
          </h5>
        </div>
      </div>
      <div className="h-[362px] rounded-[16px] mr-[115px] flex flex-col items-start justify-center">
        <p className="mb-[17px] text-[18px] text-black1-11 font-bold leading-[23px]">
          Claire，
        </p>
        <h3 className="mb-[17px] text-[32px] text-black1-11 font-bold leading-[40px]">
          Congratulations!
        </h3>
        <div className="flex flex-col mb-[43px]">
          <p className="text-black2-44 text-[16px] leading-[28px]">
            You have registered successfully！
          </p>
          <p className="text-black2-44 text-[16px] leading-[28px]">
            New to Talengine？
          </p>
          <p className="text-black2-44 text-[16px] leading-[28px]">
            Click here for an Overview.
          </p>
        </div>
        <button
          className={`w-full h-[56px] bg-main-blue rounded-[40px] cursor-pointer text-white font-bold flex items-center justify-center`}
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
      </div>
    </div>
  )
}

export default Step3
