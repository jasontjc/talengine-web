/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2025-01-02 14:30:12
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 14:57:17
 * @FilePath: /talengine-web/src/app/seeker/profile/components/AppendSkillModal/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ChangeEvent, useState, type FC } from 'react'
import Modal from '@/components/Modal'
import Dropdown from '@/components/Dropdown'

type Props = {
  visible: boolean
  onConfirm: (val: string, next: (isSucc: boolean) => void) => void
  onClose: () => void
}

const AppendSkillModal: FC<Props> = (props: Props) => {
  const { visible, onConfirm, onClose } = props
  const [appendSkillName, setAppendSkillName] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAppendSkillName(e.target.value)
  }

  const handleConfirm = (): void => {
    onConfirm(appendSkillName, (isSucc: boolean): void => {
      if (isSucc) {
        handleClose()
      }
    })
  }

  const handleClose = (): void => {
    onClose()
  }

  return (
    <Modal title="Add new skills" visible={visible} onClose={handleClose}>
      <div className="w-full flex flex-col items-center">
        <p className="text-black3-66 text-[14px] leading-[20px]">
          Add your top skills and make sure to accurately rate yourself on each
          skill. Please note that for any skills you add, you will need to
          successfully attempt the Al interview test to validate your
          proficiency.
        </p>
        <div className="w-full mt-[38px] mb-[45px]">
          <Dropdown
            type="input"
            label="Main skills"
            value={appendSkillName}
            placeholder="Enter main skills"
            // @ts-ignore
            onChange={handleChange}
          />
        </div>
        <button
          className="w-[280px] h-[48px] rounded-[40px] bg-main-blue text-white font-bold leading-[48px] text-center"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </Modal>
  )
}

export default AppendSkillModal
