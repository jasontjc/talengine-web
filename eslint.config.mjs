/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 13:30:11
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 18:27:12
 * @FilePath: /talengine-web/eslint.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  )
]

export default eslintConfig
