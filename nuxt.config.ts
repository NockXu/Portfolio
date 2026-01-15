export default defineNuxtConfig({
	modules: [
		'@nuxtjs/i18n',
		'@nuxt/eslint',
		// Activate @prisma/nuxt only in development
		...(process.env.NODE_ENV === 'production' ? [] : ['@prisma/nuxt']),
		'@nuxt/ui',
		'@nuxtjs/google-fonts',
	],
	pages: true,
	devtools: { enabled: process.env.NODE_ENV !== 'production' },

	css: ['~/assets/css/main.css'],
	compatibilityDate: '2025-07-15',

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},

	googleFonts: {
		families: {
			Poppins: {
				wght: [300, 400, 500, 600, 700],
			},
		},
		display: 'swap',
	},

	i18n: {
		defaultLocale: 'fr',
		locales: [
			{ code: 'fr', name: 'France', file: 'fr.json' },
			{ code: 'en', name: 'English', file: 'en.json' },
		],
		strategy: 'no_prefix',
		langDir: 'i18n/locales',
	},

	prisma: {
		autoSetupPrisma: false,
	},
});
