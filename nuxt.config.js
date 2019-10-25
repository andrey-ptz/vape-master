const sortCSSmq = require('sort-css-media-queries');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
			{ hid: 'og:image', name: 'og:image', content: '/img/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../favicon-32x32.png' }
		],
		script: [
			{ src: "/js/nouislider.min.js", body: true },
			{ src: "/js/polyfills.js", body: true }
		]
	},
	// animation between routes
	pageTransition: {
		name: 'fade',
		mode: 'out-in'
	},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
		{ src: '~/assets/sass/main.sass', lang: 'sass'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		'~/plugins/bus'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios'
	],
	styleResources: {
		sass: [
			'~assets/sass/utils/_vars.sass',
			'~assets/sass/mixins/_smart-grid.sass',
			'~assets/sass/mixins/_retina.sass'
		]
	},
	axios: {
    proxyHeaders: false
  },
  /*
  ** Build configuration
  */
 
  build: {
		postcss: {
			plugins: {
				'css-mqpacker': { 
					sort: sortCSSmq 
				}
			}
		},
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
			
    }
	},
	env: {
		baseUrl: process.env.BASE_URL || 'https://vape-e7da1.firebaseio.com'
	}
}
