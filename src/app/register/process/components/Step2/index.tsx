'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 23:13:10
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-28 22:28:09
 * @FilePath: /talengine-web/src/app/register/process/components/Step1.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ChangeEvent, use, useEffect, useRef, useState, type FC } from 'react'
import Image from 'next/image'

export type FormData = {
  resumeFileUri: string
}

type Props = {
  onNext: (data: FormData) => void
}

const Step2: FC<Props> = (props: Props) => {
  const { onNext } = props
  const [resumeFileUri, setResumeFileUri] = useState<string>()
  const [available, setAvailable] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadClick = () => {
    // 触发隐藏的 input file 点击事件
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log('Selected file:', file.name)
      // 在这里处理文件上传逻辑
    }
  }

  const handleNext = (): void => {
    onNext({
      resumeFileUri
    })
  }

  useEffect((): void => {
    if (resumeFileUri) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  }, [resumeFileUri])

  useEffect((): void => {
    setTimeout(() => {
      setResumeFileUri(
        '1734603285127-a95ef502-1ef8-49cc-836a-f7411fb2744b-lunathomasresume.pdf'
      )
    }, 5000)
  }, [])

  return (
    <div className="w-[480px] flex flex-col">
      <h3 className="mt-[70px] text-black1-11 text-[24px] font-bold leading-[30px] text-left">
        Upload Your Resume
      </h3>
      <p className="text-black3-66 text-[14px] leading-[18px] mt-[10px] mb-[36px]">
        Please clarify your personal expectations in order to  match efficienly
      </p>
      <div className="w-full mb-[35px]">
        <div
          className="w-full h-[238px] cursor-pointer rounded-[20px] border border-black5-BB bg-[#FBFBFB] flex items-center justify-center"
          onClick={handleUploadClick}
        >
          <Image
            className="mr-[15px]"
            src="/icons/upload.svg"
            alt="upload file"
            width={24}
            height={24}
          />
          {resumeFileUri ? (
            <span className="max-w-[350px] whitespace-normal text-black1-11 text-[18px] leading-[32px]">
              {resumeFileUri}
            </span>
          ) : (
            <span className="text-black4-99 text-[18px] leading-[32px]">
              Drag & Drop or click to upload (.pdf)
            </span>
          )}
          {/* 隐藏的 input file */}
          <input
            type="file"
            ref={fileInputRef} // 通过 ref 引用 input
            style={{ display: 'none' }} // 隐藏 input
            onChange={handleFileChange} // 监听文件选择事件
            accept=".pdf" // 限制文件类型为 PDF
          />
        </div>
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
    </div>
  )
}

export default Step2
