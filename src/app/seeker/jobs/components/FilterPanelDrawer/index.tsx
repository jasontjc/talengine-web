/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2025-01-02 15:40:41
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 16:12:08
 * @FilePath: /talengine-web/src/app/seeker/jobs/components/FilterPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, type FC } from 'react'
import Drawer from '@/components/Drawer'
import Dropdown from '@/components/Dropdown'

type Props = {
  visible: boolean
  onClose: () => void
}

type FilterData = {
  location?: string
  type?: string
  role?: string
  industry?: string
  niche?: string
  scale?: string
  ips?: string
}

const FilterPanelDrawer: FC<Props> = (props: Props) => {
  const { visible, onClose } = props
  const [filterData, setFilterData] = useState<FilterData>({
    location: '',
    type: '',
    role: '',
    industry: '',
    niche: '',
    scale: '',
    ips: ''
  })

  const handleConfirm = (): void => {}

  const handleClose = (): void => {
    onClose()
  }

  return (
    <Drawer visible={visible} onClose={onClose}>
      <h5 className="text-black1-11 text-[24px] font-bold mt-[40px] px-[40px] mb-[11px]">
        Filters
      </h5>
      <div className="flex-1 overflow-auto pl-[40px] pr-[40px]">
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
        <div className="mb-[15px]">
          <Dropdown
            type="select"
            label="Location"
            value={filterData.location as string}
            placeholder="Please select location"
            options={[
              {
                label: 'US',
                value: 'US'
              }
            ]}
          />
        </div>
      </div>
      <div
        className="w-full h-[82px] px-[40px] flex justify-between items-center"
        style={{
          boxShadow: '0px 0px 36px 0px rgba(17, 17, 17, 0.06)'
        }}
      >
        <button
          className="border border-main-blue w-[190px] h-[48px] rounded-[40px] text-main-blue text-center leading-[38px] font-bold"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="border border-main-blue w-[190px] h-[48px] rounded-[40px] text-white bg-main-blue text-center leading-[38px] font-bold"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </Drawer>
  )
}

export default FilterPanelDrawer
