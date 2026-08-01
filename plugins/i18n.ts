import { createI18n } from 'vue-i18n'
import en from '~/lang/en'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en
    }
  })

  vueApp.use(i18n)
})