<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const { t, locale, setLocale } = useI18n();

const route = useRoute();

const router = useRouter();

const items = computed<NavigationMenuItem[]>(() => [

	{
		label: t('nav.home'),
		to: '/',
	},
	{

		label: t('nav.about'),

		to: '/about',

		active: route.path.startsWith('/about'),

	},

	{

		label: t('nav.projects'),

		to: '/projects',

		active: route.path.startsWith('/projects'),

	},

	{

		label: t('nav.contact'),

		to: '/contact',

		active: route.path.startsWith('/contact'),

	},

]);

const changeLanguage = (lang: 'en' | 'fr') => {
	// Sauvegarder la langue dans le localStorage

	localStorage.setItem('locale', lang);

	// Changer la langue simplement

	setLocale(lang);
};

const currentLanguage = computed(() => locale.value);

const pageTitle = computed(() => {
	return route.path === '/' ? 'Mon E-CV' : 'DAVID Gabriel';
});
</script>

<template>
	<UHeader

		class="bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50"

		:ui="{

			container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',

			left: 'flex items-center gap-8',

			center: 'flex-1 flex items-center justify-center',

			right: 'flex items-center gap-4',

		}"

		title="DAVID Gabriel"
	>
		<div class="flex items-center gap-8">
			<Logo class="h-8 w-auto transition-transform duration-300 hover:scale-105" />
		</div>

		<!-- Navigation -->

		<UNavigationMenu

			:items="items"

			class="flex items-center gap-8"
		/>

		<!-- Language selector -->

		<div class="hidden sm:flex items-center bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
			<UButton

				:variant="currentLanguage === 'fr' ? 'solid' : 'ghost'"

				size="sm"

				color="primary"

				class="px-3 py-1 text-sm font-medium transition-all duration-200"

				@click="changeLanguage('fr')"
			>
				FR
			</UButton>

			<UButton

				:variant="currentLanguage === 'en' ? 'solid' : 'ghost'"

				size="sm"

				color="primary"

				class="px-3 py-1 text-sm font-medium transition-all duration-200"

				@click="changeLanguage('en')"
			>
				EN
			</UButton>
		</div>
	</UHeader>
</template>
