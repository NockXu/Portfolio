<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const { t, locale } = useI18n();

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
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
	{
		label: 'Github',
		to: 'https://github.com/NockXu',
		target: '_blank',
	},
]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value = computed({
	get: () => locale.value === 'en',
	set: (val: boolean) => {
		locale.value = val ? 'en' : 'fr';
	},
});
</script>

<template>
	<UHeader>
		<Logo class="h-6 w-auto" />
		<UNavigationMenu :items="items" />
		<!-- <span class="flex items-center justify-center gap-2">
			<USwitch v-model="value" />
			<p class="text-sm mb-1">
				{{ value ? 'EN' : 'FR' }}
			</p>
		</span> -->
	</UHeader>
</template>
