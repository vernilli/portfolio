// import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Victor Vernilli',
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'icon', 
        type: 'image/png', 
        href: '/favicon/favicon.ico', 
        sizes: '48x48' 
      },{
        rel: 'preconnect',
        href: 'https://www.google-analytics.com'
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0TWX0Q06NN', async: true,
      },{
        children: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-0TWX0Q06NN");'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-svg-loader',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'lg',
        breakpoints: {
          xs: 0,
          sm: 576,
          md: 768,
          lg: 992,
          xl: Infinity
        }
      }
    ],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        seo: false,
        vueI18nLoader: true,
        strategy: 'prefix_except_default',
        undefinedDomainStrategy: 'prefix',
        detectBrowserLanguage: false,
        defaultLocale: 'en',
        vueI18n: {
          silentTranslationWarn: true,
          silentFallbackWarn: true,
          fallbackLocale: 'en',
        },
        parsePages: false,
        pages: {
          about: {
            'en': '/about',
          },
        },
      }
    ]
  ],
  gtag: {
    id: 'G-0TWX0Q06NN'
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { removeDoctype: true },
        { removeComments: true },
        { prefixIds: false }
      ]
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)||(.svg$)/
        })
      }
    }
  },
}
