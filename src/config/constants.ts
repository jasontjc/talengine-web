/*
 * @Author: TangJiaChen tangjiachen@sundear.com
 * @Date: 2024-12-27 00:09:14
 * @LastEditors: TangJiaChen tangjiachen@sundear.com
 * @LastEditTime: 2024-12-31 13:42:27
 * @FilePath: /talengine-web/src/config/constants.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const MenuInfos = [
  { title: 'Talents', src: '' },
  { title: 'Jobs', src: '' }
]

export const IntroInfos = [
  {
    avatar: '/images/avatar-example@2x.png',
    name: 'Tomas',
    position: 'Backend engineer',
    location: 'Canada',
    desc: `I've been working with Talelngine for almost a year, and the experience has been great. A few weeks after I got in touch with them, they found me a good project. They were always easy to reach and to talk. It's one of the best experiences of remote work in my career. The opportunity that they presented me helped me to grow professionally.`
  },
  {
    avatar: '/images/avatar-example@2x.png',
    name: 'Tomas',
    position: 'Backend engineer',
    location: 'Canada',
    desc: `I've been working with Talelngine for almost a year, and the experience has been great. A few weeks after I got in touch with them, they found me a good project. They were always easy to reach and to talk. It's one of the best experiences of remote work in my career. The opportunity that they presented me helped me to grow professionally.`
  },
  {
    avatar: '/images/avatar-example@2x.png',
    name: 'Tomas',
    position: 'Backend engineer',
    location: 'Canada',
    desc: `I've been working with Talelngine for almost a year, and the experience has been great. A few weeks after I got in touch with them, they found me a good project. They were always easy to reach and to talk. It's one of the best experiences of remote work in my career. The opportunity that they presented me helped me to grow professionally.`
  },
  {
    avatar: '/images/avatar-example@2x.png',
    name: 'Tomas',
    position: 'Backend engineer',
    location: 'Canada',
    desc: `I've been working with Talelngine for almost a year, and the experience has been great. A few weeks after I got in touch with them, they found me a good project. They were always easy to reach and to talk. It's one of the best experiences of remote work in my career. The opportunity that they presented me helped me to grow professionally.`
  }
]

export const FooterLinks = [
  {
    title: 'Products',
    links: [
      {
        label: 'Human Data',
        src: ''
      },
      {
        label: 'Talent',
        src: ''
      },
      {
        label: 'AI Interview',
        src: ''
      },
      {
        label: 'COR',
        src: ''
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About us',
        src: ''
      },
      {
        label: 'Vetting process',
        src: ''
      },
      {
        label: 'API',
        src: ''
      }
    ]
  },
  {
    title: 'Blog',
    links: [
      {
        label: 'AI & Automation',
        src: ''
      },
      {
        label: 'Case Studies',
        src: ''
      },
      {
        label: 'Ethical AI',
        src: ''
      },
      {
        label: 'Sourcing & Vetting'
      }
    ]
  },
  {
    title: 'Other',
    links: [
      {
        label: 'Sitemap',
        src: ''
      },
      {
        label: 'Terms & conditions',
        src: ''
      },
      {
        label: 'Privacy policy',
        src: ''
      },
      {
        label: 'Cookie policy',
        src: ''
      }
    ]
  }
]

export const SeekerMenuInfos = [
  {
    label: 'My Profile',
    key: 'my-profile',
    path: '/seeker/profile',
    icon: '/icons/my-profile.svg'
  },
  {
    label: 'Active Jobs',
    key: 'active-jobs',
    path: '/seeker/jobs',
    icon: '/icons/active-jobs.svg'
  },
  {
    label: 'AI Mock',
    key: 'ai-mock',
    path: '/seeker/ai-mock',
    icon: '/icons/ai-mock.svg'
  },
  {
    label: 'AI Training',
    key: 'ai-training',
    path: '/seeker/ai-training',
    icon: '/icons/ai-training.svg'
  },
  {
    label: 'AI Resume',
    key: 'ai-resume',
    path: '/seeker/ai-resume',
    icon: '/icons/ai-resume.svg'
  }
]

export const Source = {
  China: {
    Language: 'Chinese',
    Currency: 'CNY'
  },
  'United States': {
    Language: 'English',
    Currency: 'USD'
  },
  'United Kingdom': {
    Language: 'English',
    Currency: 'GBP'
  },
  Japan: {
    Language: 'Japanese',
    Currency: 'JPY'
  },
  'South Korea': {
    Language: 'Korean',
    Currency: 'KRW'
  },
  Russia: {
    Language: 'Russian',
    Currency: 'RUB'
  },
  Germany: {
    Language: 'German',
    Currency: 'EUR'
  },
  France: {
    Language: 'French',
    Currency: 'EUR'
  },
  Italy: {
    Language: 'Italian',
    Currency: 'EUR'
  },
  Spain: {
    Language: 'Spanish',
    Currency: 'EUR'
  },
  Canada: {
    Language: 'English, French',
    Currency: 'CAD'
  },
  Australia: {
    Language: 'English',
    Currency: 'AUD'
  },
  Brazil: {
    Language: 'Portuguese',
    Currency: 'BRL'
  },
  India: {
    Language: 'Hindi, English',
    Currency: 'INR'
  },
  Argentina: {
    Language: 'Spanish',
    Currency: 'ARS'
  },
  'South Africa': {
    Language: 'Afrikaans, English, etc.',
    Currency: 'ZAR'
  },
  Egypt: {
    Language: 'Arabic',
    Currency: 'EGP'
  },
  Singapore: {
    Language: 'English, Malay, Chinese, Tamil',
    Currency: 'SGD'
  },
  'Saudi Arabia': {
    Language: 'Arabic',
    Currency: 'SAR'
  },
  Iran: {
    Language: 'Persian',
    Currency: 'IRR'
  },
  Iraq: {
    Language: 'Arabic, Kurdish',
    Currency: 'IQD'
  },
  Israel: {
    Language: 'Hebrew, Arabic',
    Currency: 'ILS'
  },
  'United Arab Emirates': {
    Language: 'Arabic',
    Currency: 'AED'
  }
}

export const CountryOptions = Object.keys(Source)
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  .map((country) => {
    return {
      label: country,
      value: country
    }
  })

export const UnitOptions = Object.values(Source)
  .sort((a, b) =>
    a.Currency.toLowerCase().localeCompare(b.Currency.toLowerCase())
  )
  .map(({ Currency }) => {
    return {
      label: Currency,
      value: Currency
    }
  })

export const LanguageOptions = Object.values(Source)
  .sort((a, b) =>
    a.Language.toLowerCase().localeCompare(b.Language.toLowerCase())
  )
  .map(({ Language }) => {
    return {
      label: Language,
      value: Language
    }
  })
  .sort()
