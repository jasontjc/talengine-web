/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 17:12:50
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 17:53:46
 * @FilePath: /talengine-web/src/app/login/components/LabelInput/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { type FC } from 'react'

type Props = {
  label: string
  value: string
  placeholder?: string
  onChange?: (val: string) => void
}

const LabelInput: FC<Props> = (props: Props) => {
  const { label, value, placeholder, onChange } = props

  return (
    // <div className="w-full flex flex-col justify-end">
    //   <label className="h-[18px] text-[#6C6A73] text-[14px] font-[500]">{label}</label>
    //   <div className="h-[54px] border-b border-[#E4E3E7] transition pb-[14px] pt-[14px] group focus-within:border-primary">
    //     <input className="w-full text-[#989790] outline-none" placeholder={placeholder} />
    //   </div>
    // </div>
    <div className="w-full flex flex-col justify-end">
      <label className="h-[18px] text-[#6C6A73] text-[14px] font-[500]">
        {label}
      </label>
      <div className="relative h-[54px] pb-[14px] pt-[14px] group">
        {/* 边框容器 */}
        <div className="absolute top-[54px] inset-0 border-b border-[#E4E3E7] group-focus-within:border-transparent">
          <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-primary to-primary scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100"></div>
        </div>
        {/* 输入框 */}
        <input
          className="relative w-full h-full placeholder-[#989790] outline-none bg-transparent text-black1-11 font-[500]"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default LabelInput
