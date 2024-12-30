/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 13:30:11
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-30 17:50:45
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
        'black3-66': '#6C6A73',
        'black4-99': '#98979C',
        'black5-BB': '#BBB9C0',
        'black6-E4': '#E4E3E7',
        'black7-F0': '#F0F0F1',
        'black8-F4': '#F4F4F5',
        'main-blue': '#5E28F3',
        'main-black': '#0B051A'
      }
    },
    animation: {
      'spin-slow': 'spin 2s linear infinite',
      scroll: 'scroll 20s linear infinite'
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }
      }
    }
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover']
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-text-fill')() // 添加插件支持
  ]
} satisfies Config
