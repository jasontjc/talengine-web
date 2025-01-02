/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-31 16:56:02
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-02 14:32:10
 * @FilePath: /talengine-web/src/app/seeker/profile/components/Experience/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CSSProperties, useEffect, useState, type FC } from 'react'
import Image from 'next/image'
import AppendSkillModal from '../AppendSkillModal'

type Props = {}

const SkillIconMap: Record<string, string> = {
  react: '/images/skill-react@2x.png',
  python: '/images/skill-python@2x.png',
  aws: '/images/skill-aws@2x.png',
  javascript: '/images/skill-js@2x.png'
}

const SkillLevelColorMap: Record<string, CSSProperties> = {
  junior: {
    color: '#6C6A73',
    backgroundColor: '#F0F0F1'
  },
  'mid-level': {
    color: '#B56000',
    backgroundColor: '#FFF7CD'
  },
  senior: {
    color: '#009962',
    backgroundColor: '#DDF9EF'
  }
}

const Result: FC<Props> = (props: Props) => {
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [appendSkillModalVisible, setAppendSkillModalVisible] =
    useState<boolean>(false)
  const [skills, setSkills] = useState<
    {
      label: string
      key: string
      level: 'junior' | 'mid-level' | 'senior'
      experience: number
    }[]
  >([
    {
      label: 'React',
      key: 'react',
      level: 'senior',
      experience: 10
    },
    {
      label: 'Python',
      key: 'python',
      level: 'mid-level',
      experience: 10
    },
    {
      label: 'AWS',
      key: 'aws',
      level: 'senior',
      experience: 10
    },
    {
      label: 'JS',
      key: 'javascript',
      level: 'junior',
      experience: 12
    }
  ])

  const getExperienceDesc = (experience: number): string => {
    let result = ''

    if (experience < 3) {
      result = 'less 3'
    } else if (experience >= 3 && experience < 5) {
      result = '3+'
    } else if (experience >= 5 && experience < 10) {
      result = '5+'
    } else if (experience >= 10) {
      result = '10+'
    }

    return result
  }

  const handleAction = (type: string): void => {
    switch (type) {
      case 'appendSkill':
        if (appendSkillModalVisible) return

        setAppendSkillModalVisible(true)
        break
      default:
        break
    }
  }

  const handleAppendSkillModalConfirm = (val: string, next: (isSucc: boolean) => void): void => {
    // TODO

    next(true)
  }

  const handleAppendSkillModalClose = (): void => {
    if (!appendSkillModalVisible) return

    setAppendSkillModalVisible(false)
  }

  useEffect((): void => {}, [])

  // upload
  // return (
  //   <div className="w-full items-center justify-center flex flex-col pt-[60px] pb-[147px]">
  //     <Image
  //       src="/images/vetting-upload@2x.png"
  //       alt="upload"
  //       width={140}
  //       height={112}
  //     />
  //     <p className="text-black3-66 text-[18px] leading-[28px]">
  //       Please upload your profile
  //     </p>
  //     <button className="w-[242px] h-[56px] bg-main-blue rounded-[40px] text-center mt-[42px] text-white text-[18px] font-bold leading-[28px] py-[14px]">
  //       Upload
  //     </button>
  //   </div>
  // )

  // generating
  // return (
  //   <div className="w-full items-center justify-center flex flex-col pt-[60px] pb-[147px]">
  //     <div className="relative w-20 h-20">
  //       {/* <!-- 背景圆 --> */}
  //       <div className="absolute inset-0 rounded-full bg-[#F8F5FF] border-[6px] border-[#FBFBFF]"></div>
  //       {/* <!-- 旋转的圆弧 --> */}
  //       <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#FBFBFF] border-r-[#337CE9] border-b-[#5E28F3] animate-spin-slow"></div>
  //       {/* <!-- 三角形 --> */}
  //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-[#651FFF]"></div>
  //       {/* <!-- 圆点 --> */}
  //       <div className="absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#651FFF] rounded-full"></div>
  //     </div>
  //     <p className="text-black3-66 text-[18px] text-center leading-[28px] mt-[12px]">
  //       Your op skills  library is being generated.
  //       <br />
  //       Please wait a few minutes.
  //     </p>
  //   </div>
  // )

  // vetted info
  return (
    <div className="w-full flex flex-col pt-[40px] pb-[55px]">
      <div className="w-full flex flex-col">
        <h5 className="text-[22px] text-black1-11 leading-[28px] mb-[30px] flex justify-between items-center">
          Vetted Technical Skills
          <a
            className="flex items-center text-[16px] text-black2-44 leading-[22px]"
            onClick={() => handleAction('appendSkill')}
          >
            <Image
              className="mr-[6px]"
              src="/icons/plus-black.svg"
              alt="add skill"
              width={18}
              height={18}
            />
            Add another
          </a>
        </h5>
        <ul className="w-full flex flex-row justify-start flex-wrap gap-[40px]">
          {skills.map((skill) => (
            <li
              className="w-[calc(50%-20px)] flex-shrink-0 h-[102px] rounded-[16px] flex items-center justify-between pl-[30px] pr-[20px]"
              style={{
                boxShadow: '0px 6px 36px 0px rgba(17, 17, 17, 0.06)'
              }}
              key={skill.key}
            >
              <div className="flex flex-row items-center">
                <Image
                  className="mr-[20px]"
                  src={SkillIconMap[skill.key]}
                  alt={skill.key}
                  width={66}
                  height={66}
                />
                <div className="flex flex-col justify-center">
                  <span className="text-black1-11 text-[20px] leading-[26px] mb-[9px]">
                    {skill.label}
                  </span>
                  <span className="text-black4-99 text-[16px] leading-[20px]">
                    {getExperienceDesc(skill.experience)}&nbsp;years of
                    experience
                  </span>
                </div>
              </div>
              <div>
                <span
                  className="rounded-[6px] h-[26px] text-[16px] leading-[20px] px-[9px] py-[3px]"
                  style={SkillLevelColorMap[skill.level]}
                >
                  {skill.level}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex flex-col mt-[60px]">
        <h5 className="text-[22px] text-black1-11 leading-[28px] mb-[30px]">
          Technical interview notes:
        </h5>
        <div
          className="w-full rounded-[16px] p-[30px] flex"
          style={{
            boxShadow: '0px 6px 36px 0px rgba(17, 17, 17, 0.06)'
          }}
        >
          <div className="flex-1">
            <div className="text-black3-66 text-[16px] leading-[28px]">
              Dynamic and results-driven software engineer with 5+ years of
              experience in designing and optimizing scalable APIs and backend
              systems. Proven expertise in crafting robust RESTful and GraphQL
              APIs, ensuring seamless integrations for cross-platform
              applications. 3+ years of hands-on experience with cloud platforms
              like AWS and Azure, leveraging microservices architecture to build
              high-performance solutions. Passionate about enhancing user
              experiences through efficient system design and innovative
              problem-solving. Skilled in Python, Node.js, and Go, with a track
              record of delivering impactful solutions in agile environments.
            </div>
            <a className="cursor-pointer text-main-blue text-[16px] leading-[28px] mt-[8px]">
              Read more
            </a>
          </div>
          <div className="border-l border-[#F0F0F1] ml-[24px] pl-[54px] flex flex-col items-center">
            <Image
              className="rounded-[16px]"
              src="/images/interview-captal@2x.png"
              alt="interview captal"
              width={315}
              height={236}
            />
            <p className="text-black text-[16px] leading-[32px] mt-[11px] text-center">
              3 min snippet from the interview
            </p>
          </div>
        </div>
      </div>
      <AppendSkillModal
        visible={appendSkillModalVisible}
        onConfirm={handleAppendSkillModalConfirm}
        onClose={handleAppendSkillModalClose}
      />
    </div>
  )
}

export default Result
