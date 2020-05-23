import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

// element-ui built-in lang
import eleLocale from 'element-ui/lib/locale'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import elementEsLocale from 'element-ui/lib/locale/lang/es'
// import elementJaLocale from 'element-ui/lib/locale/lang/ja'
// import elementKoLocale from 'element-ui/lib/locale/lang/ko'

// User defined lang
import zhLocale from './zh'
import enLocale from './en'
// import esLocale from './es'
// import jaLocale from './ja'
// import koLocale from './ko'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
  // es: {
  //   ...esLocale,
  //   ...elementEsLocale
  // },
  // ja: {
  //   ...jaLocale,
  //   ...elementJaLocale
  // },
  // ko: {
  //   ...koLocale,
  //   ...elementKoLocale
  // }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is chinese
  return 'zh'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

eleLocale.i18n((key: any, value: any) => i18n.t(key, value)) // 为了实现element插件的多语言切换

export default i18n
