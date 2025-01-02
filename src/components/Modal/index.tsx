/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2025-01-02 14:11:18
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 14:41:17
 * @FilePath: /talengine-web/src/components/Modal/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import React, { useRef, useEffect, type FC, type ReactNode } from 'react'

type Props = {
  title: string
  visible: boolean
  children?: ReactNode
  onClose?: () => void
}

const Modal: FC<Props> = (props: Props) => {
  const { title, visible, children, onClose } = props
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) return

    if (visible) {
      if (!dialog.open) {
        dialog.showModal() // 打开模态框
      }
    } else {
      if (dialog.open) {
        dialog.close() // 关闭模态框
      }
    }

    // 监听关闭事件
    const handleClose = () => {
      onClose?.()
    }

    dialog.addEventListener('close', handleClose)

    return () => {
      dialog.removeEventListener('close', handleClose)
    }
  }, [visible, onClose])

  return (
    <dialog
      ref={dialogRef}
      className="relative bg-white rounded-[16px] w-[580px] backdrop:bg-[#00000080]"
      style={{
        boxShadow: '0 6px 36px 0 rgba(17, 17, 17, 0.06)'
      }}
    >
      <div className="w-full flex flex-col pt-[56px] px-[72px] pb-[66px]">
        <h5 className="text-black1-11 text-[24px] font-bold text-center leading-[30px] mb-[18px]">
          {title}
        </h5>
        {children}
      </div>
      <button
        className="absolute top-[24px] right-[24px] outline-none"
        onClick={() => dialogRef.current?.close()}
      >
        <Image
          src="/icons/modal-close.svg"
          alt="dialog close"
          width={18}
          height={18}
        />
      </button>
    </dialog>
  )
}

export default Modal
