'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 16:03:27
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect, type FC } from 'react'
import Image from 'next/image'
import FilterPanelDrawer from './components/FilterPanelDrawer'

type Props = undefined

const Jobs: FC<Props> = () => {
  const [filterPanelDrawerVisible, setFilterPanelDrawerVisible] =
    useState<boolean>(false)

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {}

  const handleAction = (type: string): void => {
    switch (type) {
      case 'toggleFilter':
        if (filterPanelDrawerVisible) return

        setFilterPanelDrawerVisible(true)
        break
      default:
        break
    }
  }

  const handleFilerPanelDrawerClose = (): void => {
    if (!filterPanelDrawerVisible) return

    setFilterPanelDrawerVisible(false)
  }

  useEffect(init, [])

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      <div className="w-full pl-[80px] pr-[80px]">
        {/* title */}
        <h3 className="text-[32px] text-black1-11 font-bold leading-[40px] mt-[48px] flex justify-between">
          Active Jobs
          <a
            className="cursor-pointer flex items-center justify-end text-black2-44 text-[16px] font-normal leading-[22px]"
            onClick={() => handleAction('toggleFilter')}
          >
            <Image
              className="mr-[6px]"
              src="/icons/filters.svg"
              alt="job filters"
              width={18}
              height={18}
            />
            Filters
          </a>
        </h3>
      </div>
      <div className="w-full flex-1 min-h-0 overflow-y-auto overflow-x-hidden  pl-[80px] pr-[80px]">
        <ul className="w-full py-[32px]">
          <li
            className="w-full h-[132px] flex items-center justify-between mb-[20px] last:mb-0 pl-[36px] pr-[30px] rounded-[16px]"
            style={{
              boxShadow: '0px 6px 36px 0px rgba(17, 17, 17, 0.06)'
            }}
          >
            <div className="flex justify-start items-center">
              <Image
                className="mr-[33px]"
                src="/images/default-job-thumbnail@2x.png"
                alt="job thumbnail"
                width={66}
                height={66}
              />
              <div className="flex flex-col">
                <span className="text-black1-11 text-[24px] font-bold leading-[30px]">
                  Back End Engineer
                </span>
                <div className="flex items-center mt-[10px]">
                  {['Company  name', 'Department', 'Location'].map(
                    (val, index) => (
                      <span key={val}>
                        {index !== 0 && (
                          <span className="text-black3-66 mx-[10px]">|</span>
                        )}
                        <span
                          className="text-[14px] leading-[18px] text-black3-66"
                          key={val}
                        >
                          {val}
                        </span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-[65px]">
                  <span className="text-main-blue text-[20px] font-bold mb-[7px]">
                    100K USD
                  </span>
                  <span className="text-black1-11 text-[16px]">/Month</span>
                </div>
                <a className="mr-[40px]">
                  <Image
                    src="/icons/more.svg"
                    alt="more action"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <button className="w-[128px] h-[48px] rounded-[40px] bg-main-blue text-white font-bold text-[16px] leading-[48px]">
                Apply Now
              </button>
            </div>
          </li>
          <li
            className="w-full h-[132px] flex items-center justify-between mb-[20px] last:mb-0 pl-[36px] pr-[30px] rounded-[16px]"
            style={{
              boxShadow: '0px 6px 36px 0px rgba(17, 17, 17, 0.06)'
            }}
          >
            <div className="flex justify-start items-center">
              <Image
                className="mr-[33px]"
                src="/images/default-job-thumbnail@2x.png"
                alt="job thumbnail"
                width={66}
                height={66}
              />
              <div className="flex flex-col">
                <span className="text-black1-11 text-[24px] font-bold leading-[30px]">
                  Back End Engineer
                </span>
                <div className="flex items-center mt-[10px]">
                  {['Company  name', 'Department', 'Location'].map(
                    (val, index) => (
                      <span key={val}>
                        {index !== 0 && (
                          <span className="text-black3-66 mx-[10px]">|</span>
                        )}
                        <span
                          className="text-[14px] leading-[18px] text-black3-66"
                          key={val}
                        >
                          {val}
                        </span>
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-[65px]">
                  <span className="text-main-blue text-[20px] font-bold mb-[7px]">
                    100K USD
                  </span>
                  <span className="text-black1-11 text-[16px]">/Month</span>
                </div>
                <a className="mr-[40px]">
                  <Image
                    src="/icons/more.svg"
                    alt="more action"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <button className="w-[128px] h-[48px] rounded-[40px] bg-main-blue text-white font-bold text-[16px] leading-[48px]">
                Apply Now
              </button>
            </div>
          </li>
        </ul>
      </div>
      <FilterPanelDrawer
        visible={filterPanelDrawerVisible}
        onClose={handleFilerPanelDrawerClose}
      />
    </div>
  )
}

export default Jobs
