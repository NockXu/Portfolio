<script setup lang="ts">
const projectImages = [
	'/projects/rando_passion/accueil.png',
	'/projects/rando_passion/archive.png',
	'/projects/rando_passion/view.png',
	'/projects/traitement_image/code1.png',
	'/projects/traitement_image/code2.png',
	'/projects/traitement_image/space.png',
	'/projects/xenon_space/game.png',
	'/projects/xenon_space/menu.png',
	'/projects/vr/CrafCake_Affiche.png',
];

const getRandomImages = () => {
	const shuffled = [...projectImages].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, Math.min(10, shuffled.length));
};

const items = getRandomImages();
const currentImageIndex = ref(0);

const changeImage = () => {
	currentImageIndex.value = (currentImageIndex.value + 1) % items.length;
};

onMounted(() => {
	setInterval(changeImage, 4000);
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
		<!-- Carousel Section -->
		<div class="relative w-full h-[32rem] overflow-hidden border-b border-gray-700">
			<div
				v-for="(image, index) in items"
				:key="index"
				class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
				:class="{ 'opacity-100': index === currentImageIndex, 'opacity-0': index !== currentImageIndex }"
			>
				<img
					:src="image"
					:alt="`Project ${image}`"
					class="w-full h-full object-cover"
				>
			</div>

			<div class="absolute inset-0 bg-black/55" />

			<div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 animate-pulse hover:scale-105 transition-all duration-300 w-fit mx-auto">
					{{ $t('index.title') }}
				</h1>
				<UDivider class="w-32 mx-auto mb-4" />
				<p class="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
					{{ $t('index.subtitle') }}
				</p>
				<UButton
					class="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-4"
					href="/CV/DAVID_Gabriel_CV_fr.pdf"
					target="_blank"
					:ui="{
						shadow: 'shadow-lg shadow-blue-500/20',
						truncate: 'truncate',
						rounded: 'rounded-xl',
						padding: 'px-6 py-3',
						font: 'font-semibold',
						base: 'relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30',
					}"
				>
					<span class="relative z-10 flex items-center text-lg">
						{{ $t('index.downloadCV') }}
						<UIcon
							name="i-heroicons-arrow-down-tray"
							class="ml-3 w-6 h-6 group-hover:animate-bounce"
						/>
					</span>
					<span class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
				</UButton>
			</div>
		</div>

		<!-- Section À propos -->
		<div class="w-full flex flex-col md:flex-row items-stretch min-h-[28rem] mt-8 mb-8">
			<div class="flex-1 flex flex-col justify-center px-12 py-16 text-right">
				<h2 class="text-5xl font-bold text-blue-300 pb-4 mb-4">
					{{ $t('index.about.title') }}
				</h2>
				<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 ml-auto" />
				<p class="text-gray-300 text-lg leading-relaxed mb-4">
					{{ $t('index.about.text1') }}
				</p>
				<p class="text-gray-400 leading-relaxed mb-10">
					{{ $t('index.about.text2') }}
				</p>
				<div>
					<NuxtLink
						to="/about"
						class="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-0.5"
					>
						<span class="relative group-hover:translate-x-3 transition-all duration-500 ease-in-out z-10">{{ $t('index.about.more') }}</span>
						<UIcon
							name="i-heroicons-arrow-right"
							class="ml-4 w-6 h-6 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
						/>
						<span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
					</NuxtLink>
				</div>
			</div>

			<div class="flex-1 flex items-center justify-center overflow-hidden p-8">
				<img
					src="/photo2.jpg"
					alt="Photo de profil"
					class="rounded-xl w-2/4 h-auto object-cover hover:scale-105 transition-transform duration-500 border-4 border-blue-500/30 shadow-2xl"
				>
			</div>
		</div>

		<!-- Section Projets -->
		<div class="w-full flex flex-col md:flex-row items-stretch min-h-[28rem]">
			<div class="flex-1 flex flex-col justify-center px-12 py-16 bg-gray-900/60">
				<h2 class="text-5xl font-bold text-blue-300 pb-4 mb-4">
					{{ $t('index.projects.title') }}
				</h2>
				<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
				<p class="text-gray-300 text-lg leading-relaxed mb-4">
					{{ $t('index.projects.text1') }}
				</p>
				<p class="text-gray-400 leading-relaxed mb-10">
					{{ $t('index.projects.text2') }}
				</p>
				<div>
					<NuxtLink
						to="/projects"
						class="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-0.5"
					>
						<span class="relative group-hover:translate-x-3 transition-all duration-500 ease-in-out z-10">{{ $t('index.projects.see') }}</span>
						<UIcon
							name="i-heroicons-arrow-right"
							class="ml-4 w-6 h-6 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
						/>
						<span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
					</NuxtLink>
				</div>
			</div>

			<div class="flex-1 min-h-[28rem] overflow-hidden">
				<img
					src="/projects/borne_arcade/borne.jpg"
					alt="Aperçu projet"
					class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
				>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.8; }
}

.animate-pulse {
	animation: pulse 3s ease-in-out infinite;
}
</style>
