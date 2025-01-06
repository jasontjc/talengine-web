/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 13:30:11
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2025-01-03 17:45:00
 * @FilePath: /talengine-web/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from 'next'

console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}

export default nextConfig
