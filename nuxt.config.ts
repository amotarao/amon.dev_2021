import { Configuration } from '@nuxt/types';

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
  modules: ['@nuxt/content'],
  content: {
    dir: '../content',
  },
  build: {},
};

export default config;
