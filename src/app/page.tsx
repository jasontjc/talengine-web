'use client'
import { useEffect, type FC } from 'react'
import Image from 'next/image'
import { FooterLinks, IntroInfos, MenuInfos } from '@/config/constants'

const Home: FC = () => {
  useEffect((): void => {
    const container = document.querySelector('.animate-scroll')

    if (!container) return

    const content = container.innerHTML

    // 动态复制内容，确保宽度足够
    const screenWidth = window.innerWidth
    const contentWidth = container.scrollWidth

    if (contentWidth < screenWidth * 2) {
      const copiesNeeded = Math.ceil((screenWidth * 2) / contentWidth)
      for (let i = 0; i < copiesNeeded; i++) {
        container.innerHTML += content
      }
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-main-black overflow-y-auto overflow-x-hidden">
      <div className="w-screen home-bg h-[5764px] relative">
        <div className="relative content">
          {/* header */}
          <div className="w-full h-[48px] flex justify-between items-center">
            <div className="h-full flex justify-start items-center">
              <Image
                src="/images/home-logo@2x.png"
                alt="logo"
                width={174}
                height={48}
              />
              <ul className="ml-[60px] flex">
                {MenuInfos.map((opt) => (
                  <li className="mr-[57px] last:mr-0" key={opt.title}>
                    <a
                      className="cusror-pointer text-white font-[18px] leading-[28px]"
                      href=""
                    >
                      {opt.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full flex justify-end items-center">
              <a
                className="w-[120px] h-[36px] cursor-pointer border border-white rounded-[40px] text-white text-[16px] text-center leading-[34px] font-bold"
                href="/recruiter"
              >
                Hire Talents
              </a>
              <a
                className="w-[120px] h-[36px] cursor-pointer ml-[24px] border border-main-blue bg-main-blue rounded-[40px] text-white text-[16px] text-center leading-[34px] font-bold"
                href="/seeker"
              >
                Get started
              </a>
            </div>
          </div>
          {/* matrix */}
          <Image
            className="absolute top-[148px] left-[538px]"
            src="/icons/matrix1.svg"
            alt="matrix1"
            width={110}
            height={75}
          />
          <Image
            className="absolute top-[99px] right-[-260px]"
            src="/icons/matrix2.svg"
            alt="matrix2"
            width={145}
            height={252}
          />
          <Image
            className="absolute top-[531px] left-[-332px]"
            src="/icons/matrix3.svg"
            alt="matrix3"
            width={252}
            height={145}
          />
          <Image
            className="absolute top-[4635px] right-[-260px]"
            src="/icons/matrix4.svg"
            alt="matrix4"
            width={145}
            height={252}
          />
          <Image
            className="absolute top-[5117px] left-[-180px]"
            src="/icons/matrix5.svg"
            alt="matrix5"
            width={110}
            height={75}
          />
          <Image
            className="absolute top-[5510px] left-[-310px]"
            src="/icons/matrix6.svg"
            alt="matrix6"
            width={252}
            height={145}
          />
          {/*  */}
          <Image
            className="absolute top-[205px] right-[426px]"
            src="/icons/plus.svg"
            alt="icon"
            width={24}
            height={24}
          />
          <Image
            className="absolute top-[690px] left-[430px]"
            src="/icons/circle.svg"
            alt="icon"
            width={24}
            height={24}
          />
          <Image
            className="absolute top-[5000px] left-[100px]"
            src="/icons/plus.svg"
            alt="icon"
            width={24}
            height={24}
          />
          <Image
            className="absolute top-[247px] left-[796px]"
            src="/images/example@2x.png"
            alt="example"
            width={468}
            height={403}
          />
          {/* <Image
          className="absolute top-[187px] left-[1056px]"
          src="/images/interview-panel@2x.png"
          alt="interview-panel"
          width={240}
          height={180}
          // height={180}
        /> */}
          <div className="absolute top-[214px] left-[1082px]">
            <div className="relative w-[194px] h-[150px]">
              <Image
                className="absolute top-0 right-0 bottom-0 left-0 z-0"
                src="/images/interview-panel@2x.png"
                alt="interview-panel"
                width={194}
                height={150}
              />
              <p className="absolute top-[5px] left-[45px] text-white text-[14px] leading-[38px] whitespace-nowrap z-20">
                Technical interview
              </p>
              {/* Video */}
              <Image
                className="absolute top-[45px] left-[25px] rounded-[13px] overflow-hidden z-20"
                src="/images/example-video@2x.png"
                alt="example video"
                width={160}
                height={96}
              />
            </div>
          </div>
          <Image
            className="absolute top-[530px] left-[726px]"
            src="/images/certification-mark@2x.png"
            alt="cerification"
            width={117}
            height={117}
          />
          <Image
            className="absolute top-[338px] left-[806px] rotate-[108]"
            src="/images/magnifier@2x.png"
            alt="magnifier"
            width={74}
            height={64}
          />
          {/*  */}
          <div className="h-[240px] mt-[174px]">
            <h2 className="text-white text-[66px] leading-[80px] font-bold">
              Work with top
            </h2>
            <h1 className="relative bottom-[17px] text-[92px] leading-[116px] text-4xl font-bold bg-gradient-to-r from-[#5E28F3] via-[#5AB8FF] to-[#5AB8FF] bg-clip-text text-transparent">
              Silicon Valley
            </h1>
            <h5 className="relative bottom-[40px] text-white text-[66px] leading-[80px] font-bold">
              companies
            </h5>
          </div>
          <div className="mt-[52px]">
            <p className="text-black6-E4 text-[20px] leading-[36px]">
              Quickly and Fairly to access to the high-tech recruitment
            </p>
            <p className="text-black6-E4 text-[20px] leading-[36px]">
              Define your own rate, get bi-weekly pay, and long term engagements
            </p>
          </div>
          <button className="w-[248px] h-[64px] mt-[43px] text-white text-center font-bold bg-main-blue rounded-[40px]">
            Land a Job Now
          </button>
          <ul className="flex flex-row items-center justify-between mt-[152px]">
            {IntroInfos.map((info, index) => (
              <li
                className="intro-card w-[280px] h-[404px] group pl-[20px] pr-[20px] rounded-[16px] border border-[#352856] bg-[#0B051A57] relative hover:cursor-pointer flex flex-col items-center"
                key={`${info.name}-${index}`}
              >
                <div className="w-[110px] h-[110px] mt-[20px] rounded-[50%] bg-[#D8D8D8] overflow-hidden">
                  <Image
                    src={info.avatar}
                    alt={`${info.name}' avatar`}
                    width={110}
                    height={110}
                  />
                </div>
                <span className="text-white text-[24px] mt-[23px] font-bold group-hover:!hidden">
                  {info.name}
                </span>
                <span className="text-black5-BB text-[16px] mt-[7px] group-hover:!hidden">
                  {info.position}
                </span>
                <span className="mt-[9px] flex items-center text-black5-BB text-[14px] group-hover:!hidden">
                  <Image
                    className="mr-[4px]"
                    src="/icons/location.svg"
                    alt="location"
                    width={13}
                    height={13}
                  />
                  {info.location}
                </span>
                <div className="w-[240px] mt-[34px] text-black5-BB text-[16px] leading-[22px] truncate-multiline">
                  {info.desc}
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-[116px] text-white text-[48px] font-bold text-center">
            Unlock Your Dream Job
          </h3>
          <ul className="mt-[60px] w-[1000px] mx-auto">
            <li
              className="w-full h-[112px] mb-[30px] border border-[#31157E] rounded-[16px] flex justify-between items-center pl-[50px] pr-[45px]"
              style={{
                background:
                  'linear-gradient(248deg, rgba(11, 5, 26, 0.00) -18.82%, #3B158F 101.59%);'
              }}
            >
              <div className="flex flex-col">
                <Image
                  src="/icons/optimism-brand.svg"
                  alt="brand"
                  width={115}
                  height={22}
                />
                <div className="mt-[5px] flex items-center">
                  <span className="text-[28px] text-white font-bold">
                    Senior Back-End Engineer
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Remote
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Full-time
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className="w-[142px] h-[41px] rounded-tl-[15px] rounded-br-[15px] text-white text-[28px] font-bold text-center"
                  style={{
                    background:
                      'linear-gradient(203deg, #651FFF 16.47%, #454AFB 59.72%, #03A9F4 96.57%)'
                  }}
                >
                  $195,000
                </div>
              </div>
            </li>
            <li
              className="w-full h-[112px] mb-[30px] border border-[#31157E] rounded-[16px] flex justify-between items-center pl-[50px] pr-[45px]"
              style={{
                background:
                  'linear-gradient(248deg, rgba(11, 5, 26, 0.00) -18.82%, #3B158F 101.59%);'
              }}
            >
              <div className="flex flex-col">
                <Image
                  src="/icons/optimism-brand.svg"
                  alt="brand"
                  width={115}
                  height={22}
                />
                <div className="mt-[5px] flex items-center">
                  <span className="text-[28px] text-white font-bold">
                    Smart Contract Engineer
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Remote
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Full-time
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className="w-[142px] h-[41px] rounded-tl-[15px] rounded-br-[15px] text-white text-[28px] font-bold text-center"
                  style={{
                    background:
                      'linear-gradient(203deg, #651FFF 16.47%, #454AFB 59.72%, #03A9F4 96.57%)'
                  }}
                >
                  $195,000
                </div>
              </div>
            </li>
            <li
              className="w-full h-[112px] mb-[30px] border border-[#31157E] rounded-[16px] flex justify-between items-center pl-[50px] pr-[45px]"
              style={{
                background:
                  'linear-gradient(248deg, rgba(11, 5, 26, 0.00) -18.82%, #3B158F 101.59%);'
              }}
            >
              <div className="flex flex-col">
                <Image
                  src="/icons/optimism-brand.svg"
                  alt="brand"
                  width={115}
                  height={22}
                />
                <div className="mt-[5px] flex items-center">
                  <span className="text-[28px] text-white font-bold">
                    Senior Back-End Engineer
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Remote
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Full-time
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className="w-[142px] h-[41px] rounded-tl-[15px] rounded-br-[15px] text-white text-[28px] font-bold text-center"
                  style={{
                    background:
                      'linear-gradient(203deg, #651FFF 16.47%, #454AFB 59.72%, #03A9F4 96.57%)'
                  }}
                >
                  $195,000
                </div>
              </div>
            </li>
            <li
              className="w-full h-[112px] mb-[30px] border border-[#31157E] rounded-[16px] flex justify-between items-center pl-[50px] pr-[45px]"
              style={{
                background:
                  'linear-gradient(248deg, rgba(11, 5, 26, 0.00) -18.82%, #3B158F 101.59%);'
              }}
            >
              <div className="flex flex-col">
                <Image
                  src="/icons/optimism-brand.svg"
                  alt="brand"
                  width={115}
                  height={22}
                />
                <div className="mt-[5px] flex items-center">
                  <span className="text-[28px] text-white font-bold">
                    Business Development
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Remote
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Full-time
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className="w-[142px] h-[41px] rounded-tl-[15px] rounded-br-[15px] text-white text-[28px] font-bold text-center"
                  style={{
                    background:
                      'linear-gradient(203deg, #651FFF 16.47%, #454AFB 59.72%, #03A9F4 96.57%)'
                  }}
                >
                  $195,000
                </div>
              </div>
            </li>
            <li
              className="w-full h-[112px] mb-[30px] border border-[#31157E] rounded-[16px] flex justify-between items-center pl-[50px] pr-[45px]"
              style={{
                background:
                  'linear-gradient(248deg, rgba(11, 5, 26, 0.00) -18.82%, #3B158F 101.59%);'
              }}
            >
              <div className="flex flex-col">
                <Image
                  src="/icons/optimism-brand.svg"
                  alt="brand"
                  width={115}
                  height={22}
                />
                <div className="mt-[5px] flex items-center">
                  <span className="text-[28px] text-white font-bold">
                    UX/UI Designer
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Remote
                  </span>
                  <span
                    className="h-[28px] pl-[14px] pr-[14px] rounded-[20px] ml-[16px] text-[18px] text-white inline-flex leading-[28px]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    Full-time
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div
                  className="w-[142px] h-[41px] rounded-tl-[15px] rounded-br-[15px] text-white text-[28px] font-bold text-center"
                  style={{
                    background:
                      'linear-gradient(203deg, #651FFF 16.47%, #454AFB 59.72%, #03A9F4 96.57%)'
                  }}
                >
                  $195,000
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-[60px]">
            <button className="w-[315px] h-[64px] text-white text-center font-bold bg-main-blue rounded-[40px]">
              Apply Now
            </button>
          </div>
          <div className="h-[86px] flex items-baseline justify-center mt-[160px]">
            <span className="text-[36px] text-white">Trusted by</span>
            <strong
              className="text-[68px] font-bold leading-[86px] mx-[18px]"
              style={{
                background:
                  'linear-gradient(310deg, #5E28F3 15.92%, #5AB8FF 55.55%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
                // '-webkit-text-fill-color': 'transparent'
              }}
            >
              100+
            </strong>
            <span className="text-[36px] text-white">amazing companies</span>
          </div>
          {/* 保留brand scroll位置 */}
          <h5 className="mt-[368px] text-white font-bold text-[48px] text-center">
            Fixed Salary
          </h5>
          <div className="relative mt-[78px] fixed-salary-panel">
            <Image
              className="absolute left-[6px] bottom-[41px]"
              src="/images/fixed-salary@2x.png"
              alt="fixed salary"
              width={416}
              height={240}
            />
            <div className="h-[108px] absolute top-[60px] right-[98px] flex flex-col items-center">
              <p
                className="text-black7-F0 text-[28px] leading-[54px] font-semibold"
                style={{ letterSpacing: 0 }}
              >
                We pay you what you believe is fair.
              </p>
              <p
                className="text-black7-F0 text-[28px] leading-[54px] font-semibold"
                style={{ letterSpacing: 0 }}
              >
                Pay is a fixed monthly salary and is paid bi-weekly.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[37px]">
            <button className="w-[315px] h-[64px] text-white text-center font-bold bg-main-blue rounded-[40px]">
              Apply as Talent
            </button>
          </div>
          <h5 className="mt-[160px] text-white text-center text-[48px] font-bold">
            Why the Best Talent Join Talengine
          </h5>
          <ul className="w-[1196px] mt-[33px] flex flex-row justify-between items-center">
            {[
              {
                src: '/images/reason-1@2x.png',
                desc: ['Access to Silicon', 'Valley companies']
              },
              {
                src: '/images/reason-2@2x.png',
                desc: ['Vetted once,', 'certified for life']
              },
              {
                src: '/images/reason-3@2x.png',
                desc: ['Competitive &', 'stable income']
              },
              {
                src: '/images/reason-4@2x.png',
                desc: ['Receive healthcare', 'and other benefits']
              }
            ].map((opt) => (
              <li
                className="w-[287px] flex flex-col items-center justify-center"
                key={opt.desc.join('')}
              >
                <div
                  className="w-[174px] h-[174px] rounded-[50%]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <Image
                    src={opt.src}
                    alt={opt.desc.join('')}
                    width={174}
                    height={174}
                  />
                </div>
                <div className="flex flex-col items-center  mt-[14px]">
                  {opt.desc.map((text) => (
                    <span
                      className="text-center text-white text-[24px] leading-[36px] whitespace-normal"
                      key={text}
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <h5 className="mt-[160px] text-white text-center text-[48px] font-bold">
            How It Works
          </h5>
          <div className="mt-[40px] flex flex-row">
            <Image
              className="flex-shrink-0 relative right-[91px]"
              src="/images/how-it-works@2x.png"
              alt="how it works"
              width={647}
              height={573}
            />
            <ul className="flex flex-col pt-[46px]">
              {[
                'Enter your expectations and upload your profile',
                'AI interview to certified your skills',
                'Partner Communications (depends on companies)',
                'Confirm the salary',
                'Get hired'
              ].map((opt, index) => (
                <li
                  className={`w-[510px] mb-[40px] pl-[22px] pr-[22px] last:mb-0 flex items-start ${index === 0 ? 'pt-[25px] pb-[22px] rounded-[16px]' : ''}`}
                  style={{
                    background:
                      index === 0
                        ? 'linear-gradient(245deg, rgba(11, 5, 26, 0.00) 1.42%, #5E28F3 105.58%)'
                        : ''
                  }}
                  key={opt}
                >
                  <span
                    className={` w-[37px] h-[37px] leading-[37px] flex-shrink-0 font-bold rounded-[50%] mr-[18px]
                    ${
                      index === 0
                        ? 'text-main-blue text-center bg-white'
                        : 'text-white border border-[#98979C]  text-center'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-[24px] leading-[37px] ${index === 0 ? 'text-black7-F0 font-bold' : 'text-black5-BB'}`}
                  >
                    {opt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <h5 className="mt-[255px] text-white text-center text-[48px] font-bold">
            Join Talengine. Get Hired Today.
          </h5>
          <div className="flex justify-center mt-[60px]">
            <button className="w-[315px] h-[64px] text-white text-center font-bold bg-main-blue rounded-[40px]">
              Join Now
            </button>
          </div>
          <Image
            className="absolute top-[4890px] right-[-300px] z-[-1]"
            src="/images/triangle@2x.png"
            alt="triangle"
            width={582}
            height={436}
          />
        </div>
        <div className="absolute top-[2570px] left-0 right-0">
          <div className="relative overflow-hidden w-screen h-[151px] mt-[57px] border-t border-b border-[#FFFFFF1F]">
            <div className="absolute h-full flex flex-row items-center animate-scroll whitespace-nowrap">
              {[
                {
                  alt: 'stageglass',
                  src: '/brands/stageglass@2x.png',
                  size: {
                    width: 214,
                    height: 36
                  }
                },
                {
                  alt: 'ogara',
                  src: '/brands/ogabara@2x.png',
                  size: {
                    width: 235,
                    height: 36
                  }
                },
                {
                  alt: 'tubescience',
                  src: '/brands/tubescience@2x.png',
                  size: {
                    width: 166,
                    height: 36
                  }
                },
                {
                  alt: 'donotpay',
                  src: '/brands/donotpay@2x.png',
                  size: {
                    width: 180,
                    height: 36
                  }
                },
                {
                  alt: 'immutable',
                  src: '/brands/immutable@2x.png',
                  size: {
                    width: 144,
                    height: 36
                  }
                },
                {
                  alt: 'runpod',
                  src: '/brands/runpod@2x.png',
                  size: {
                    width: 116,
                    height: 36
                  }
                },
                {
                  alt: 'monday',
                  src: '/brands/monday@2x.png',
                  size: {
                    width: 196,
                    height: 36
                  }
                }
              ].map((opt) => (
                <a
                  className="mx-[24px]"
                  style={{
                    ...opt.size
                  }}
                  key={opt.alt}
                >
                  <Image src={opt.src} alt={opt.alt} {...opt.size} />
                </a>
              ))}
              {/* 复制一份内容 */}
              {[
                {
                  alt: 'stageglass',
                  src: '/brands/stageglass@2x.png',
                  size: {
                    width: 214,
                    height: 36
                  }
                },
                {
                  alt: 'ogara',
                  src: '/brands/ogabara@2x.png',
                  size: {
                    width: 235,
                    height: 36
                  }
                },
                {
                  alt: 'tubescience',
                  src: '/brands/tubescience@2x.png',
                  size: {
                    width: 166,
                    height: 36
                  }
                },
                {
                  alt: 'donotpay',
                  src: '/brands/donotpay@2x.png',
                  size: {
                    width: 180,
                    height: 36
                  }
                },
                {
                  alt: 'immutable',
                  src: '/brands/immutable@2x.png',
                  size: {
                    width: 144,
                    height: 36
                  }
                },
                {
                  alt: 'runpod',
                  src: '/brands/runpod@2x.png',
                  size: {
                    width: 116,
                    height: 36
                  }
                },
                {
                  alt: 'monday',
                  src: '/brands/monday@2x.png',
                  size: {
                    width: 196,
                    height: 36
                  }
                }
              ].map((opt, index) => (
                <a
                  className="mx-[24px]"
                  style={{
                    ...opt.size
                  }}
                  key={`${opt.alt}-copy-${index}`}
                >
                  <Image src={opt.src} alt={opt.alt} {...opt.size} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-screen top-[5294px] left-0 right-0 border-t border-[#FFFFFF26] flex flex-col items-center">
          <div className="w-[1200px] mx-auto flex pt-[66px]">
            <div className="flex flex-col items-center flex-shrink-0">
              <Image
                src="/images/home-logo@2x.png"
                alt="logo"
                width={250}
                height={70}
              />
              <p className="mt-[18px] text-black4-99 font-[14px] leading-[40px]">
                Copyright © 2024 Talengine
              </p>
            </div>
            <ul className="flex flex-row flex-1 ml-[136px] justify-between">
              {FooterLinks.map((category) => (
                <li key={category.title}>
                  <p className="text-[20px] text-black7-F0 font-bold mb-[18px]">
                    {category.title}
                  </p>
                  <ul>
                    {category.links.map((link) => (
                      <li
                        className="text-[18px] text-black4-99 leading-[42px]"
                        key={link.label}
                      >
                        <a href={link.src}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-black4-99 font-[14px] leading-[40px] mt-[150px]">
            Copyright © 2024 Talengine
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
