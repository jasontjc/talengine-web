/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 16:35:27
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 18:20:27
 * @FilePath: /talengine-web/src/app/login/components/LoginPanel/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import LabelInput from '../LabelInput'

const LoginPanel = () => {
  return (
    <div className="w-[520px] rounded-[16px] bg-white px-[50px] flex flex-col items-center">
      <Image
        className="mt-[35px]"
        src="/images/login-logo@2x.jpg"
        alt="Talengine Logo"
        width={214}
        height={60}
      />
      <div className="w-[420px] h-[30px] flex flex-row items-center justify-between mt-[56px]">
        <h5 className="text-[#1F1C27] text-[24px] font-bold">
          Talent Register
        </h5>
        <a className="text-[#5E28F3] text-[18px]" href="">
          Login
        </a>
      </div>
      <div className="w-[420px] mt-[40px] mb-[40px]">
        <LabelInput
          label="Your email address"
          value=""
          placeholder="Enter your address"
        />
      </div>
      <button className="w-[420px] h-[56px] bg-main-blue rounded-[40px] text-white font-bold flex items-center justify-center">
        Continu
        <Image
          className="ml-[4px]"
          src="/icons/arrow1.svg"
          alt="login continu"
          width={24}
          height={24}
        />
      </button>
      <div className="w-[109px] h-[22px] relative flex items-center mt-[15px] mb-[15px]">
        <span className="w-[42.5px] h-[1px] border border-[#F0F0F1]"></span>
        <span className="w-[15px] h-[22px] leading-[22px] ml-[4.5px] mr-[4.5px] text-[14px] text-black4-99">
          or
        </span>
        <span className="w-[42.5px] h-[1px] border border-[#F0F0F1]"></span>
      </div>
      <button className="w-[420px] h-[56px] bg-white rounded-[40px] text-black font-bold flex items-center justify-center border-[2px] border-black6-E4">
        <Image
          className="mr-[12px]"
          src="/icons/google.svg"
          alt="google icon"
          width={18}
          height={18}
        />
        Continu with Google
      </button>
      <div className="w-[420px] h-[18px] mt-[30px] mb-[60px] flex items-center justify-center">
        <span className="text-[#6C6A73] text-[14px]">
          By continuing, you agree to the
        </span>
        &nbsp;
        <a className="text-[#1F1C27] text-[14px] font-bold underline" href="">
          terms & conditions
        </a>
      </div>
    </div>
  )
}

export default LoginPanel
