<script setup lang="ts">
const items = [ // pour attendre les vraies images
	'https://picsum.photos/640/640?random=1',
	'https://picsum.photos/640/640?random=2',
	'https://picsum.photos/640/640?random=3',
	'https://picsum.photos/640/640?random=4',
	'https://picsum.photos/640/640?random=5',
	'https://picsum.photos/640/640?random=6',
	'https://picsum.photos/640/640?random=7',
];
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-8x1 mx-auto">
			<!-- Hero Section -->
			<div class="mb-10 relative text-center">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white-500/20 blur-3xl -z-10" />
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse hover:scale-105 transition-all duration-300 w-fit mx-auto">
					DAVID Gabriel
				</h1>
				<UDivider class="w-32 mx-auto" />
				<p class="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
					Voici mon e-cv, ici mes projets et mon projet professionnel
				</p>
				<UButton
					class="mt-8 group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-8 py-4"
					href="/Gabriel_David_CV.pdf"
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
						Télécharger mon CV
						<UIcon
							name="i-heroicons-arrow-down-tray"
							class="ml-3 w-6 h-6 group-hover:animate-bounce"
						/>
					</span>
					<span class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
				</UButton>
			</div>

			<!-- Carousel Section -->
			<UCard class="w-full mb-10 hover:scale-101 transition-all duration-300">
				<UCarousel
					v-slot="{ item }"
					loop
					:items="items"
					auto-scroll
					class="rounded-xl"
					:ui="{ item: 'basis-1/3' }"
				>
					<div class="overflow-hidden rounded-lg flex justify-center">
						<img
							:src="item"
							:alt="`Project ${item}`"
							class="rounded-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
						>
					</div>
				</UCarousel>
				<div class="text-center mt-5">
					<NuxtLink
						to="/projects"
						class="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-0.5"
					>
						<span class="relative group-hover:translate-x-3 transition-all duration-500 ease-in-out z-10">Mes projets</span>
						<UIcon
							name="i-heroicons-arrow-right"
							class="ml-4 w-6 h-6 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
						/>
						<span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
					</NuxtLink>
				</div>
			</UCard>

			<!-- À propos Section -->
			<div class="flex flex-col md:flex-row gap-6 mb-10">
				<!-- Carte À propos -->
				<UCard class="hover:scale-101 transition-all duration-300 md:w-1/2 flex flex-col h-full mt-7">
					<template #header>
						<h2 class="text-3xl text-center font-semibold text-blue-300 hover:scale-105 transition-all duration-300">
							À propos de moi
						</h2>
					</template>

					<div class="flex flex-col justify-center h-full">
						<div class="mb-6">
							<p class="text-gray-300 text-lg leading-relaxed mb-4">
								Étudiant en informatique à l'IUT de Calais depuis plus de 2 ans.
							</p>
							<p class="text-gray-400 leading-relaxed">
								J'habite à Calais et j'ai 20 ans. Je suis passionné par le développement informatique. De plus, je suis sérieux, rigoureux et capable de travailler en équipe...
							</p>
						</div>

						<div class="text-center">
							<NuxtLink
								to="/about"
								class="group relative inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-0.5"
							>
								<span class="relative group-hover:translate-x-3 transition-all duration-500 ease-in-out z-10">En savoir plus sur moi</span>
								<UIcon
									name="i-heroicons-arrow-right"
									class="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-in-out"
								/>
								<span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
							</NuxtLink>
						</div>
					</div>
				</UCard>

				<!-- Image séparée -->
				<div class="md:w-1/2 flex justify-center items-center">
					<div class="w-full h-full rounded-xl overflow-hidden hover:scale-101 transition-all duration-300">
						<img
							src="https://picsum.photos/640/640?random=7"
							alt="Photo de profil"
							class="w-full h-full max-h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 px-4 bg-gradient-to-br from-gray-900/50 to-blue-950/50">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
					Compétences Acquises
				</h2>
			</div>

			<div class="space-y-8 max-w-4xl mx-auto">
				<!-- Compétence 1 -->
				<UCard class="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
					<template #header>
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
								<UIcon
									name="i-heroicons-code-bracket"
									class="w-6 h-6 text-blue-400"
								/>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-blue-300">
									UE6.1A - C1
								</h3>
								<p class="text-sm text-gray-400">
									Réaliser
								</p>
							</div>
						</div>
					</template>
					<div class="space-y-4">
						<p class="text-gray-300">
							Capacité à développer des applications complètes en suivant les bonnes pratiques de développement et les normes établies.
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Développement d'applications web</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Création d'API REST</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Développement de jeux vidéo</span>
							</div>
						</div>
					</div>
				</UCard>

				<!-- Compétence 2 -->
				<UCard class="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
					<template #header>
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
								<UIcon
									name="i-heroicons-cog-6-tooth"
									class="w-6 h-6 text-purple-400"
								/>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-purple-300">
									UE6.2 - C2
								</h3>
								<p class="text-sm text-gray-400">
									Optimiser
								</p>
							</div>
						</div>
					</template>
					<div class="space-y-4">
						<p class="text-gray-300">
							Aptitude à analyser et améliorer les performances des applications, ainsi qu'à optimiser les algorithmes et les structures de données.
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Optimisation de requêtes SQL</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Amélioration des performances web</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Refactorisation de code</span>
							</div>
						</div>
					</div>
				</UCard>

				<!-- Compétence 3 -->
				<UCard class="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
					<template #header>
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
								<UIcon
									name="i-heroicons-users"
									class="w-6 h-6 text-green-400"
								/>
							</div>
							<div>
								<h3 class="text-lg font-semibold text-green-300">
									UE6.6A - C6
								</h3>
								<p class="text-sm text-gray-400">
									Collaborer
								</p>
							</div>
						</div>
					</template>
					<div class="space-y-4">
						<p class="text-gray-300">
							Capacité à travailler efficacement en équipe, à communiquer clairement et à utiliser des outils de collaboration pour mener des projets à bien.
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Travail d'équipe sur projets</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Utilisation de Git/GitHub</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-check-circle"
									class="w-4 h-4 text-green-400"
								/>
								<span class="text-gray-300 text-sm">Communication technique</span>
							</div>
						</div>
					</div>
				</UCard>
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
