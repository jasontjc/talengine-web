/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-26 18:22:57
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-26 18:23:01
 * @FilePath: /talengine-web/lintstagedrc.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
