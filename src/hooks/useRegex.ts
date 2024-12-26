/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 23:56:32
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 23:57:52
 * @FilePath: /talengine-web/src/hooks/useRegex.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const useRegex = () => {
  const validEmail = (val: string): boolean => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
  }

  const validPassword = (val: string): boolean => {
    return /^[a-zA-Z0-9]{6,32}$/.test(val)
  }

  return {
    validEmail,
    validPassword
  }
}

export default useRegex
