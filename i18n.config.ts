import en from './locales/en.json'
import zh_cn from './locales/zh-CN.json'

export const i18nDefined = {
  en: en,
  'zh-CN': zh_cn
}

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh-CN',
    messages: i18nDefined
  }))