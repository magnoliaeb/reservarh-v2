import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3005,
  },
  head: {
    titleTemplate: '%s | Reservar H Mayorista',
		title: 'Reservar H Mayorista',
    htmlAttrs: {
      lang: "es",
    },
    meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: '',
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: '',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'msapplication-TileColor', content: '#ffffff' },
			{ name: 'theme-color', content: '#ffffff' },
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Reservar H Mayorista',
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'Reservar H Mayorista',
			},
		],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "animate.css/animate.min.css",
  ],
  env: {
    VUE_APP_ENV: process.env.VUE_APP_RECAPTCHA,
		VUE_APP_ENDPOINT: process.env.VUE_APP_ENDPOINT,
		VUE_APP_RECAPTCHA: process.env.VUE_APP_RECAPTCHA,
		VUE_APP_WEBURL: process.env.VUE_APP_WEBURL,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/app' },
		{ src: '@/plugins/recaptcha.js', mode: 'client', ssr: false },
		{ src: '@plugins/slick-slide.js', mode: 'client' },
		{ src: '~/plugins/sweet-modal', mode: 'client' },
		{ src: '~/plugins/infinite-loading', ssr: false },
		// { src: '~/plugins/vue-wow' },
		{ src: '~/plugins/vee-validate' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
		customVariables: ['~/assets/variables.scss'],
		treeShake: true,
		icons: {
			iconfont: 'mdi', // default - only for display purposes
		},

		breakpoint: {
			// mobileBreakpoint: 'md',
			thresholds: {},
			scrollBarWidth: 0,
		},
		theme: {
			dark: false,
			themes: {
				dark: {},
				light: {
					primary: '#E81414',
					black: '#000',
					white: '#fff',
					secondary: '#2d2d2d',
				},
			},
		},
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    extend(config, ctx) {},
  },
  axios: {
    baseURL: process.env.VUE_APP_ENDPOINT,
  },
  publicRuntimeConfig: {
		$public: {
			//
		},
	},
};
