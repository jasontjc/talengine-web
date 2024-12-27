/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 13:30:11
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-27 13:55:08
 * @FilePath: /talengine-web/tailwind.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E28F3',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'black1-11': '#1F1C27',
        'black2-44': '#414045',
        'black4-99': '#98979C',
        'black5-BB': '#BBB9C0',
        'black6-E4': '#E4E3E7',
        'black8-F4': '#F4F4F5',
        'main-blue': '#5E28F3',
        'main-black': '#0B051A'
      }
    }
  },
  plugins: []
} satisfies Config
