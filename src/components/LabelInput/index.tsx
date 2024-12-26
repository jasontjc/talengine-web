'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 17:12:50
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 23:56:15
 * @FilePath: /talengine-web/src/app/login/components/LabelInput/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ChangeEvent,
  type ForwardedRef
} from 'react'

export type LabelInputRefType = {
  focus: () => void
  blur: () => void
}

type Props = {
  label: string
  value: string
  placeholder?: string
  errorMessage?: string
  onFocus?: () => void
  onBlur?: () => void
  onChange?: (val: string) => void
}

const LabelInput = forwardRef(
  (props: Props, ref: ForwardedRef<LabelInputRefType>) => {
    const {
      label,
      value,
      placeholder,
      errorMessage,
      onFocus,
      onBlur,
      onChange
    } = props
    const inputRef = useRef<HTMLInputElement | null>(null)

    useImperativeHandle(ref, () => {
      return {
        focus(): void {
          inputRef.current?.focus()
        },
        blur(): void {
          inputRef.current?.blur()
        }
      }
    })

    const handleFocus = (): void => {
      onFocus?.()
    }

    const handleBlur = (): void => {
      onBlur?.()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e.target.value)
    }

    return (
      <div className="w-full flex flex-col justify-end">
        <label className="h-[18px] text-[#6C6A73] text-[14px] font-[500]">
          {label}
        </label>
        <div className="relative h-[54px] pb-[14px] pt-[14px] group">
          {/* 边框容器 */}
          {errorMessage && (
            <div className="absolute top-[54px] inset-0 border-b border-[#F21859]">
              <div className="text-[#F21859] leading-[18px] text-[14px] absolute top-[3px]">
                {errorMessage}
              </div>
            </div>
          )}
          {!errorMessage && (
            <div className="absolute top-[54px] inset-0 border-b border-[#E4E3E7] group-focus-within:border-transparent">
              <div className="absolute inset-0 h-[1px] bg-gradient-to-r from-primary to-primary scale-x-0 origin-left transition-transform duration-300 group-focus-within:scale-x-100"></div>
            </div>
          )}
          {/* 输入框 */}
          <input
            ref={inputRef}
            className="relative w-full h-full placeholder-[#989790] outline-none bg-transparent text-black1-11 font-[500]"
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }
)

LabelInput.displayName = 'LabelInput'

// color: #F21859;
// font-family: Outfit;
// font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
export default LabelInput
