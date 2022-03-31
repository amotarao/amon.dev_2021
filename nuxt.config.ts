import { Configuration } from '@nuxt/types';
import Sass from 'sass';
import Fiber from 'fibers';

const config: Configuration = {
  srcDir: 'src',
  target: 'static',
  head: {
    title: 'Amon Sawamura',
    htmlAttrs: {
      lang: 'ja-JP',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content: 'さわむらあもんのページ',
        hid: 'description',
      },
      {
        property: 'og:title',
        content: 'Amon Sawamura',
        hid: 'og:title',
      },
      {
        property: 'og:description',
        content: 'さわむらあもんのページ',
        hid: 'og:description',
      },
      {
        property: 'og:site_name',
        content: 'Amon Sawamura',
      },
      {
        property: 'og:locale',
        content: 'ja_JP',
        hid: 'og:locale',
      },
      {
        property: 'og:type',
        content: 'website',
        hid: 'og:type',
      },
      {
        property: 'og:url',
        content: 'https://amon.dev',
        hid: 'og:url',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@amotarao',
      },
      {
        name: 'twitter:creator',
        content: '@amotarao',
      },
      {
        name: 'note:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@500&family=Zen+Kaku+Gothic+New&display=swap',
        rel: 'stylesheet',
      },
      { rel: 'canonical', href: 'https://amon.dev', hid: 'canonical' },
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
  modules: ['@nuxt/content', '@nuxtjs/google-gtag'],
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
  'google-gtag': {
    id: 'G-66Q4T2X9Q1',
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
