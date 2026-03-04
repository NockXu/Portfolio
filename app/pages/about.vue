<script setup lang="ts">
// Timeline data for education
const timeline = [
	{
		year: '2020 - 2023',
		title: 'Baccalauréat',
		school: 'Lycée Sophie Berthelot',
		description: 'Baccalauréat Spécialité Mathématiques, NSI',
		details: [],
		icon: '',
	},
	{
		year: '2023 - 2024',
		title: 'BUT1',
		school: 'IUT de Calais',
		description: 'Entrée au BUT Informatique, j\'y ai revu mes bases en programmation et en algorithmique, j\'ai découvert l\'aspect conception avant la programmation (MLD/MCD en base de données), j\'ai aussi appris de nouveau language comme le java, le c, le postgreSQL, c\'est aussi l\'année où j\'ai pour la première fois participé à des gros projets de groupe comme la création d\'un site web et la création d\'un jeu textuelle en C.',
		details: [],
		icon: '',
	},
	{
		year: '2024 - 2025',
		title: 'BUT2',
		school: 'IUT de Calais',
		description: 'Durant cette deuxième année, j\'ai appris à créer, sécuriser, documenter et utiliser une API REST, j\'ai aussi utilisé des frameworks comme Node.js, Vue.js, Symfony pour créer des applications web. De plus, j\'ai appris à créer des tests unitaires et à mettre en place une CI/CD pour le déploiement automatique de mes projets',
		details: [],
		icon: '',
	},
	{
		year: '2025 - 2026',
		title: 'BUT3',
		school: 'IUT de Calais',
		description: 'Pendant cette troisième année, j\'ai étudié le domaine de l\'ia en découvrent comment faire du machine learning pour faire de la régression ainsi que de la classification. J\'ai aussi vue des notions sur le modèle transformer.',
		details: [],
		icon: '',
	},
];

// Hobbies data
const hobbies = [
	{
		name: 'Développement personnel',
		icon: 'i-heroicons-code-bracket',
		description: 'Projets open-source et exploration de nouvelles technologies',
		color: 'blue',
	},
	{
		name: 'Photographie',
		icon: 'i-heroicons-camera',
		description: 'Capture de paysages et moments de vie',
		color: 'green',
	},
	{
		name: 'Musique',
		icon: 'i-heroicons-musical-note',
		description: 'Écoute et découverte de nouveaux genres',
		color: 'purple',
	},
	{
		name: 'Sport',
		icon: 'i-heroicons-heart',
		description: 'Course à pied et fitness pour rester équilibré',
		color: 'red',
	},
];

// Reactive state for timeline interaction
const activeTimelineIndex = ref(0);
const navigationDirection = ref<'left' | 'right'>('right');
const activeElement = ref<any>(null);

// Watch for index changes and scroll to element
watch(activeTimelineIndex, (newIndex) => {
	nextTick(() => {
		if (activeElement.value) {
			const container = activeElement.value.$el?.closest('.overflow-y-auto') || activeElement.value.closest('.overflow-y-auto');
			if (container) {
				const element = activeElement.value.$el || activeElement.value;
				const elementTop = element.offsetTop;
				const containerHeight = container.clientHeight;
				const elementHeight = element.clientHeight;
				const scrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);

				container.scrollTo({
					top: scrollTop,
					behavior: 'smooth',
				});
			}
		}
	});
});

// Functions to handle navigation with direction tracking
const navigateLeft = () => {
	if (activeTimelineIndex.value > 0) {
		navigationDirection.value = 'left';
		activeTimelineIndex.value--;
	}
};

const navigateRight = () => {
	if (activeTimelineIndex.value < timeline.length - 1) {
		navigationDirection.value = 'right';
		activeTimelineIndex.value++;
	}
};

const goToIndex = (index: number) => {
	navigationDirection.value = index > activeTimelineIndex.value ? 'right' : 'left';
	activeTimelineIndex.value = index;
};
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<!-- Hero Section -->
			<div class="mb-20 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse">
					À Propos
				</h1>
				<UDivider class="w-32" />
			</div>

			<!-- Section 1: Image et Description Personnelle -->
			<UCard class="mb-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700">
				<template #header>
					<h2 class="text-3xl font-semibold text-blue-300">
						Qui suis-je ?
					</h2>
				</template>

				<div class="grid md:grid-cols-2 gap-8 items-center">
					<!-- Image placeholder - vous pouvez remplacer avec votre vraie photo -->
					<div class="relative group">
						<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
						<div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
							<div class="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
								<UIcon
									name="i-heroicons-user-circle"
									class="w-32 h-32 text-blue-400"
								/>
							</div>
							<p class="text-center text-gray-400 mt-4 text-sm">
								Votre photo ici
							</p>
						</div>
					</div>

					<!-- Description -->
					<div class="space-y-4">
						<p class="text-gray-300 text-lg leading-relaxed">
							Passionné par l'informatique depuis tout petit, je me suis spécialisé dans le développement d'applications.
						</p>
						<p class="text-gray-400 leading-relaxed">
							Étudiant en troisième année de BUT Informatique à l'IUT de Calais, je porte mon intérêt vers les technologies d'ia.
						</p>
					</div>
				</div>
			</UCard>

			<!-- Section 2: Frise Chronologique Interactive -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-purple-300 mb-8">
					Parcours Scolaire
				</h2>

				<!-- Timeline Navigation with Arrows -->
				<div class="flex items-center justify-center gap-8 mb-8 top-24 from-gray-900 via-blue-950 to-gray-900 py-4 z-10 backdrop-blur-sm rounded-lg">
					<button
						:disabled="activeTimelineIndex === 0"
						:class="[
							'p-3 rounded-full transition-all duration-300',
							activeTimelineIndex === 0
								? 'bg-gray-800 text-gray-600 cursor-not-allowed'
								: 'bg-gray-700 text-white hover:bg-gray-600 hover:-translate-x-1 hover:scale-110',
						]"
						@click="navigateLeft()"
					>
						<UIcon
							name="i-heroicons-chevron-left"
							class="w-6 h-6"
						/>
					</button>

					<div class="text-center relative h-16 flex items-center justify-center">
						<Transition
							:name="navigationDirection === 'left' ? 'year-slide-right' : 'year-slide-left'"
							mode="out-in"
						>
							<div
								:key="activeTimelineIndex"
								class="text-2xl font-bold text-white"
							>
								{{ timeline[activeTimelineIndex]?.year }}
							</div>
						</Transition>
					</div>

					<button
						:disabled="activeTimelineIndex === timeline.length - 1"
						:class="[
							'p-3 rounded-full transition-all duration-300',
							activeTimelineIndex === timeline.length - 1
								? 'bg-gray-800 text-gray-600 cursor-not-allowed'
								: 'bg-gray-700 text-white hover:bg-gray-600 hover:translate-x-1 hover:scale-110',
						]"
						@click="navigateRight()"
					>
						<UIcon
							name="i-heroicons-chevron-right"
							class="w-6 h-6"
						/>
					</button>
				</div>

				<!-- Timeline Content with Scroll -->
				<div class="timeline-scroll-container relative max-h-[28rem] overflow-y-auto overflow-x-hidden scrollbar-visible scrollbar-thumb-purple-500 scrollbar-track-gray-800 rounded-lg p-4 pt-32 pb-32">
					<div class="relative min-h-full">
						<div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500" />

						<div
							v-for="(item, index) in timeline"
							:key="index"
							:ref="el => { if (index === activeTimelineIndex) activeElement = el }"
							:class="[
								'relative flex items-center mb-16 transition-all duration-500 min-h-48',
								activeTimelineIndex === index ? 'opacity-100 scale-100' : 'opacity-40 scale-95',
							]"
						>
							<div
								:class="[
									'w-full md:w-1/2',
									index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8',
								]"
							>
								<UCard class="hover:shadow-2xl transition-all duration-300 border-gray-700">
									<div
										class="flex items-center gap-3 mb-3"
										:class="index % 2 === 0 ? 'md:justify-end' : ''"
									>
										<UIcon
											:name="item.icon"
											class="w-8 h-8 text-purple-400"
										/>
										<h3 class="text-xl font-bold text-white">
											{{ item.title }}
										</h3>
									</div>
									<p class="text-purple-300 font-medium mb-2">
										{{ item.school }}
									</p>
									<p class="text-gray-300 mb-4">
										{{ item.description }}
									</p>
									<div
										class="flex flex-wrap gap-2"
										:class="index % 2 === 0 ? 'md:justify-end' : ''"
									>
										<UBadge
											v-for="detail in item.details"
											:key="detail"
											color="primary"
											variant="soft"
											size="sm"
										>
											{{ detail }}
										</UBadge>
									</div>
								</UCard>
							</div>

							<!-- Timeline dot -->
							<div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900" />
						</div>
					</div>
				</div>

				<!-- Navigation dots indicator -->
				<div class="flex justify-center gap-2 mt-8">
					<button
						v-for="(_, index) in timeline"
						:key="index"
						:class="[
							'w-2 h-2 rounded-full transition-all duration-300',
							activeTimelineIndex === index
								? 'bg-purple-500 w-8'
								: 'bg-gray-600 hover:bg-gray-500',
						]"
						@click="goToIndex(index)"
					/>
				</div>
			</div>

			<!-- Section 3: Hobbies -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-cyan-300 mb-8">
					Centres d'Intérêt
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<UCard
						v-for="hobby in hobbies"
						:key="hobby.name"
						class="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-400/50"
					>
						<div class="text-center space-y-4">
							<div
								:class="[
									'w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300',
									`bg-${hobby.color}-500/20 group-hover:bg-${hobby.color}-500/30`,
								]"
							>
								<UIcon
									:name="hobby.icon"
									:class="`w-8 h-8 text-${hobby.color}-400`"
								/>
							</div>
							<h3 class="text-lg font-semibold text-white">
								{{ hobby.name }}
							</h3>
							<p class="text-gray-400 text-sm">
								{{ hobby.description }}
							</p>
						</div>
					</UCard>
				</div>
			</div>
		</div>
	</div>
</template>

  <style scoped>
  /* Fondu progressif en haut et en bas du conteneur de la frise */
  .timeline-scroll-container {
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 15%,
      black 85%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 15%,
      black 85%,
      transparent 100%
    );
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  .animate-pulse {
    animation: pulse 3s ease-in-out infinite;
  }

  /* Animation pour la transition de l'année vers la droite */
  .year-slide-right-enter-active,
  .year-slide-right-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .year-slide-right-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  .year-slide-right-leave-to {
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
  }

  .year-slide-right-enter-to,
  .year-slide-right-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  /* Animation pour la transition de l'année vers la gauche (effet inversé) */
  .year-slide-left-enter-active,
  .year-slide-left-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .year-slide-left-enter-from {
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
  }

  .year-slide-left-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  .year-slide-left-enter-to,
  .year-slide-left-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  /* Styles pour la barre de scroll toujours visible */
  .scrollbar-visible {
    scrollbar-width: thin;
    scrollbar-color: rgb(168 85 247) rgb(31 41 55);
  }

  .scrollbar-visible::-webkit-scrollbar {
    width: 8px;
  }

  .scrollbar-visible::-webkit-scrollbar-track {
    background: rgb(31 41 55);
    border-radius: 4px;
  }

  .scrollbar-visible::-webkit-scrollbar-thumb {
    background: rgb(168 85 247);
    border-radius: 4px;
  }

  .scrollbar-visible::-webkit-scrollbar-thumb:hover {
    background: rgb(196 181 253);
  }

  .scrollbar-visible::-webkit-scrollbar-corner {
    background: rgb(31 41 55);
  }
  </style>
