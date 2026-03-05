<script setup lang="ts">
const { t } = useI18n();

// Timeline data for education
const timeline = computed(() => [
	{
		year: '2020 - 2023',
		title: t('about.timelineItems.bac.title'),
		school: t('about.timelineItems.bac.school'),
		description: t('about.timelineItems.bac.description'),
		details: [],
		icon: '',
	},
	{
		year: '2023 - 2024',
		title: t('about.timelineItems.but1.title'),
		school: t('about.timelineItems.but1.school'),
		description: t('about.timelineItems.but1.description'),
		details: [],
		icon: '',
	},
	{
		year: '2024 - 2025',
		title: t('about.timelineItems.but2.title'),
		school: t('about.timelineItems.but2.school'),
		description: t('about.timelineItems.but2.description'),
		details: [],
		icon: '',
	},
	{
		year: '2025 - 2026',
		title: t('about.timelineItems.but3.title'),
		school: t('about.timelineItems.but3.school'),
		description: t('about.timelineItems.but3.description'),
		details: [],
		icon: '',
	},
]);

// Reactive state for timeline interaction
const activeTimelineIndex = ref(0);
const navigationDirection = ref<'left' | 'right'>('right');
const scrollContainer = ref<HTMLElement | null>(null);
const itemRefs = ref<HTMLElement[]>([]);

const setItemRef = (el: any, index: number) => {
	if (el) itemRefs.value[index] = el.$el ?? el;
};

// Watch for index changes and scroll to center the active element
watch(activeTimelineIndex, (newIndex) => {
	nextTick(() => {
		const container = scrollContainer.value;
		const element = itemRefs.value[newIndex];
		if (!container || !element) return;

		const containerHeight = container.clientHeight;
		const elementTop = element.offsetTop;
		const elementHeight = element.offsetHeight;
		const scrollTop = elementTop - containerHeight / 2 + elementHeight / 2;

		container.scrollTo({ top: scrollTop, behavior: 'smooth' });
	});
});

const navigateLeft = () => {
	if (activeTimelineIndex.value > 0) {
		navigationDirection.value = 'left';
		activeTimelineIndex.value--;
	}
};

const navigateRight = () => {
	if (activeTimelineIndex.value < timeline.value.length - 1) {
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
					{{ $t('about.title') }}
				</h1>
				<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
			</div>

			<!-- Section 1: Image et Description Personnelle -->
			<UCard class="mb-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700">
				<div class="grid md:grid-cols-2 gap-8 items-center">
					<div class="relative group">
						<div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
						<div class="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
							<div class="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
								<img src="/photo.jpg">
							</div>
						</div>
					</div>

					<div class="space-y-4">
						<h2 class="text-3xl font-semibold text-blue-300">
							{{ $t('about.who') }}
						</h2>
						<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
						<p class="text-gray-300 text-lg leading-relaxed">
							{{ $t('about.desc1') }}
						</p>
						<p class="text-gray-300 text-lg leading-relaxed">
							{{ $t('about.desc2') }}
						</p>
						<p class="text-gray-300 text-lg leading-relaxed">
							{{ $t('about.desc3') }}
						</p>
					</div>
				</div>
			</UCard>

			<!-- Section 2: Frise Chronologique Interactive -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-purple-300 mb-8">
					{{ $t('about.timeline') }}
				</h2>
				<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />

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
				<div
					ref="scrollContainer"
					class="timeline-scroll-container relative max-h-[28rem] overflow-y-auto overflow-x-hidden scrollbar-visible scrollbar-thumb-purple-500 scrollbar-track-gray-800 rounded-lg p-4 pt-32 pb-32"
				>
					<div class="relative min-h-full">
						<div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500" />

						<div
							v-for="(item, index) in timeline"
							:key="index"
							:ref="el => setItemRef(el, index)"
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

			<!-- Section Vidéo -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-cyan-300 mb-8">
					{{ $t('about.video') }}
				</h2>
				<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />

				<UCard class="bg-gray-800/50 border-gray-700 overflow-hidden">
					<div class="relative w-full aspect-video">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube-nocookie.com/embed/5X32tMgCQmo?rel=0&modestbranding=1"
							:title="$t('about.videoTitle')"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							class="w-full h-full"
						/>
					</div>
				</UCard>
			</div>

			<!-- Section Compétences -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-green-300 mb-8">
					{{ $t('about.skills') }}
				</h2>
				<div class="h-1 w-1/6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-8" />

				<UCard class="bg-gray-800/50 border-gray-700">
					<div class="p-8">
						<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
							<!-- Langages -->
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-heroicons-code-bracket"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">JavaScript</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<img
										src="/icones/nodejs.png"
										alt="Node.js"
										class="w-8 h-8"
									>
								</div>
								<span class="text-gray-300 text-sm text-center">Node.js</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-heroicons-code-bracket"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">TypeScript</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<img
										src="/icones/java.png"
										alt="Java"
										class="w-8 h-8"
									>
								</div>
								<span class="text-gray-300 text-sm text-center">Java</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-c"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">C/C++</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-csharp"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">C#</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-300 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-html5"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">HTML</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-css3"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">CSS</span>
							</div>

							<!-- Frameworks -->
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<img
										src="/icones/vuejs.png"
										alt="Vue.js"
										class="w-8 h-8"
									>
								</div>
								<span class="text-gray-300 text-sm text-center">Vue.js</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-react"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">React</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<img
										src="/icones/nuxt.png"
										alt="Nuxt.js"
										class="w-8 h-8"
									>
								</div>
								<span class="text-gray-300 text-sm text-center">Nuxt.js</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-tailwindcss"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Tailwind</span>
							</div>

							<!-- Bases de données -->
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-postgresql"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">PostgreSQL</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-300 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-mongodb"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">MongoDB</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-prisma"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Prisma</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-mysql"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">MySQL</span>
							</div>

							<!-- Outils -->
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-git"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Git</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-docker"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Docker</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-300 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-kubernetes"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Kubernetes</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-figma"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Figma</span>
							</div>
							<div class="flex flex-col items-center group">
								<div class="w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
									<UIcon
										name="i-simple-icons-unrealengine"
										class="w-8 h-8 text-white"
									/>
								</div>
								<span class="text-gray-300 text-sm text-center">Unreal</span>
							</div>
						</div>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
