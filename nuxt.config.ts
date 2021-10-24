import { Configuration } from '@nuxt/types';
import Sass from 'sass';
import Fiber from 'fibers';

const config: Configuration = {
  srcDir: 'src',
  target: 'static',
  head: {
    title: 'amon.house',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap', rel: 'stylesheet' },
    ],
  },
  css: ['~/assets/styles/global.scss'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],
  modules: ['@nuxt/content'],
  styleResources: {
    scss: ['~assets/styles/_variables.scss', '~assets/styles/_mixins/_media-query.scss'],
  },
  fontawesome: {
    addCss: false,
    component: 'Fa',
    suffix: true,
    icons: {
      brands: ['faTwitter', 'faGithub'],
    },
  },
  content: {
    dir: '../content',
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
};

export default config;
