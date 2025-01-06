'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-06 16:42:31
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type ChangeEvent,
  type ClipboardEvent
} from 'react'

type Props = {
  email: string
  onFinish: (code: string) => void
  onPreview: () => void
}

const CodeStep: FC<Props> = (props: Props) => {
  const { email, onFinish, onPreview } = props
  const [code, setCode] = useState<string[]>(['', '', '', '', '', ''])
  const [available, setAvailable] = useState<boolean>(false)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1) // 记录当前 focus 的输入框索引
  const inputRefs = useRef<HTMLInputElement[]>([])

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {
    setCode(['', '', '', '', '', ''])
    setAvailable(false)
    setFocusedIndex(-1)
  }

  const handleSetCode = (val: string, index: number): void => {
    const newCode = code

    newCode[index] = val

    const validateResult = newCode.every((val) => !!val)

    setAvailable(validateResult)
    setCode(newCode)
  }

  const handleEmpty = (index: number): void => {
    handleSetCode('', index)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    handleSetCode(e.target.value, index)

    // 自动聚焦到下一个输入框
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus()
    } else {
      inputRefs.current[inputRefs.current.length - 1].blur()
    }
  }

  const handleBack = (): void => {
    onPreview()
  }

  const handleConfirm = (): void => {
    if (!available) return

    onFinish(code.join(''))
  }

  const handlePaste = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    e.preventDefault() // 阻止默认的粘贴行为
    const pasteData = e.clipboardData?.getData('text') || '' // 获取粘贴的内容

    if (!pasteData) return

    const newCode = [...code] // 创建一个新的数组以存储验证码

    for (let i = 0; i < pasteData.length; i++) {
      if (index + i < newCode.length) {
        newCode[index + i] = pasteData[i] // 将粘贴的字符逐一分配到输入框
      }
    }

    setCode(newCode) // 更新验证码状态
    const validateResult = newCode.every((val) => !!val) // 检查是否所有输入框都已填满

    setAvailable(validateResult)

    setTimeout(() => {
      inputRefs.current.forEach((inputRef) => inputRef.blur())
    })
  }

  useEffect((): (() => void) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log('handleKeyDown fired!')
      if (e.code === 'Backspace' && code[0] !== '') {
        let currIndex = -1

        for (const [key, value] of code.entries()) {
          if (value === '') {
            currIndex = key
            break
          }
        }

        handleSetCode('', currIndex - 1)
        inputRefs.current[currIndex - 1].focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [code])

  useEffect(init, [])

  return (
    <div className="w-[420px] flex flex-col items-center">
      <div className="w-full h-[30px] flex flex-row items-center justify-between mt-[56px]">
        <h5 className="text-[#1F1C27] text-[24px] font-bold">
          Enter verification code
        </h5>
      </div>
      <div className="w-full mt-[15px] flex flex-col">
        <span className="text-black2-44 leading-[28px] text-[16px]">
          Enter the verification code sent to your email
        </span>
        <span className="text-black2-44 leading-[28px] text-[16px] font-bold">
          &apos;{email}&apos;&nbsp;
          <a
            className="text-main-blue text-[16px] cursor-pointer"
            onClick={handleBack}
          >
            Change email
          </a>
        </span>
      </div>
      <div className="w-full mt-[44px] mb-[58px] pl-[11px] pr-[11px] flex justify-between">
        {code.map((val: string, index: number) => (
          <div
            className="w-[54px] h-[54px] relative flex flex-shrink-0 pt-[2px]"
            key={index}
          >
            <input
              ref={(ref) => {
                if (inputRefs && inputRefs.current) {
                  // @ts-ignore
                  inputRefs.current[index] = ref
                }
              }}
              className="w-full h-[44px] outline-none text-center text-black1-11 text-[32px]"
              value={val}
              onFocus={() => {
                handleEmpty(index)
                setFocusedIndex(index)
              }} // 设置当前 focus 的输入框索引
              onBlur={() => setFocusedIndex(-1)} // 失去焦点时清除索引
              onChange={(e) => handleChange(e, index)}
              onPaste={(e) => handlePaste(e, index)}
            />
            <div
              className={`absolute z-0 bottom-0 w-full h-[1px] border-b ${focusedIndex === index || val ? 'border-main-blue' : 'border-[#E4E3E7]'}`}
            />
          </div>
        ))}
      </div>
      <button
        className={`w-full h-[56px] bg-main-blue rounded-[40px] text-white font-bold flex items-center justify-center ${available ? 'opacity-100' : 'opacity-50'}`}
        onClick={handleConfirm}
      >
        Confirm
      </button>
      <div className="w-full h-[18px] mt-[30px] mb-[60px] flex items-center justify-center">
        <span className="text-[#6C6A73] text-[14px]">Resend OTP in: 00:28</span>
      </div>
    </div>
  )
}

export default CodeStep
