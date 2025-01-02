'use client'
/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:21:31
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 13:24:13
 * @FilePath: /talengine-web/src/app/login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect, type FC } from 'react'
import Image from 'next/image'
import Result from './components/Result'
import Experience from './components/Experience'

const ProfileTabs = [
  {
    label: 'Vetting results',
    key: 'result'
  },
  {
    label: 'Experience',
    key: 'experience'
  }
]

const Profile: FC = () => {
  const [profileInfos, setProfileInfos] = useState<
    { label: string; icon: string; value: string }[][]
  >([
    [
      {
        label: 'Country',
        icon: '/icons/location.svg',
        value: 'US'
      },
      {
        label: 'Industry',
        icon: '/icons/industry.svg',
        value: 'Web3+Socail'
      }
    ],
    [
      {
        label: 'Availability',
        icon: '/icons/availability.svg',
        value: 'Available'
      },
      {
        label: 'Perference',
        icon: '/icons/perference.svg',
        value: 'Full time'
      }
    ]
  ])
  const [currTab, setCurrTab] = useState<string>('result')

  const init = (): (() => void) => {
    return destroy
  }

  const destroy = (): void => {}

  const handleTabClick = (tab: { label: string; key: string }): void => {
    if (currTab && currTab === tab.key) return

    setCurrTab(tab.key)
  }

  useEffect(init, [])

  return (
    <div className="relative w-full h-full flex flex-row overflow-y-auto overflow-x-hidden">
      <div className="w-full pl-[80px] pr-[80px]">
        {/* title */}
        <h3 className="text-[32px] text-black1-11 font-bold leading-[40px] mt-[48px]">
          My Profile
        </h3>
        {/* profile */}
        <div className="relative w-full flex flex-row items-center mt-[41px]">
          <button className="absolute top-0 right-0 flex flex-row items-center py-[5px] text-black2-44 text-[16px]">
            <Image
              className="mr-[8px]"
              src="/icons/edit.svg"
              alt="edit"
              width={18}
              height={18}
            />
            Edit
          </button>
          <Image
            className="mr-[40px] flex-shrink-0"
            src="/images/default-admin-avatar@4x.png"
            alt="seeker avatar"
            width={168}
            height={168}
          />
          <div className="flex flex-1 flex-col">
            <h5 className="text-black1-11 text-[24px] leading-[28px]">
              Claire Wilson
            </h5>
            <p className="flex mt-[8px] items-center">
              <span className="px-[7px] py-[2px] h-[24px] rounded-[6px] bg-[#F1ECFF] text-[14px] text-main-blue leading-[20px]">
                Back end developer
              </span>
            </p>
            <ul className="w-full flex flex-row mt-[24px]">
              {profileInfos.map((profileInfo, index) => (
                <li className="flex-1 flex flex-col" key={index}>
                  {profileInfo.map((item) => (
                    <div
                      className="flex flex-row mb-[11px] last:mb-0"
                      key={item.label}
                    >
                      <Image
                        className="mr-[6px]"
                        src={item.icon}
                        alt={item.icon}
                        width={15}
                        height={15}
                      />
                      <span className="text-black3-66 text-[14px] leading-[20px]">
                        {item.label}&nbsp;:&nbsp;{item.value}
                      </span>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* tab group */}
        <div className="w-full mt-[98] flex flex-col">
          <ul className="flex flex-row border-b border-[#E4E3E7]">
            {ProfileTabs.map((tab) => (
              <li
                className={`cursor-pointer text-[24px] border-b-[3px] pb-[14px] leading-[30px] mr-[60px] last:mr-[60px] ${currTab === tab.key ? 'text-black1-11 border-main-blue' : 'text-black4-99 border-transparent'}`}
                key={tab.key}
                onClick={() => handleTabClick(tab)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
          {currTab === 'result' && <Result />}
          {currTab === 'experience' && <Experience />}
        </div>
      </div>
    </div>
  )
}

export default Profile
