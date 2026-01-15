<script setup lang="ts">
const skills = [
	{ name: 'Vue.js / Nuxt', level: 90, icon: 'i-logos-vue' },
	{ name: 'TypeScript', level: 85, icon: 'i-logos-typescript-icon' },
	{ name: 'Node.js', level: 80, icon: 'i-logos-nodejs-icon' },
	{ name: 'Python', level: 75, icon: 'i-logos-python' },
	{ name: 'Docker', level: 70, icon: 'i-logos-docker-icon' },
	{ name: 'PostgreSQL', level: 80, icon: 'i-logos-postgresql' },
];

const experiences = [
	{
		title: 'Développeur Full-Stack',
		company: 'Entreprise Tech',
		period: '2023 - Présent',
		description: 'Développement d\'applications web modernes avec Vue.js et Node.js',
	},
	{
		title: 'Développeur Frontend',
		company: 'Startup Innovante',
		period: '2021 - 2023',
		description: 'Création d\'interfaces utilisateur performantes et responsives',
	},
];
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

			<!-- Bio Section -->
			<UCard class="mb-20">
				<template #header>
					<h2 class="text-3xl font-semibold text-blue-300">
						Qui suis-je ?
					</h2>
				</template>

				<p class="text-gray-300 text-lg leading-relaxed mb-4">
					Passionné par le développement web et les technologies émergentes, je crée des expériences digitales innovantes et performantes.
					Mon approche combine esthétique moderne et architecture solide.
				</p>
				<p class="text-gray-400 leading-relaxed">
					Toujours à l'affût des dernières tendances tech, j'aime relever des défis techniques et transformer des idées en solutions concrètes.
				</p>
			</UCard>

			<!-- Skills Section -->
			<div class="mb-20">
				<h2 class="text-3xl font-semibold text-purple-300 mb-8">
					Compétences
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<UCard
						v-for="skill in skills"
						:key="skill.name"
						class="hover:scale-105 transition-all duration-300"
					>
						<div class="flex items-center justify-between mb-3">
							<span class="text-white font-medium flex items-center gap-2">
								<UIcon
									:name="skill.icon"
									class="w-6 h-6"
								/>
								{{ skill.name }}
							</span>
							<UBadge
								color="primary"
								variant="subtle"
							>
								{{ skill.level }}%
							</UBadge>
						</div>
						<UProgress
							:value="skill.level"
							color="primary"
						/>
					</UCard>
				</div>
			</div>

			<!-- Experience Section -->
			<div>
				<h2 class="text-3xl font-semibold text-cyan-300 mb-8">
					Expérience
				</h2>
				<div class="space-y-6">
					<UCard
						v-for="(exp, index) in experiences"
						:key="index"
						class="hover:border-cyan-400/50 transition-all duration-300"
					>
						<h3 class="text-2xl font-bold text-white mb-2">
							{{ exp.title }}
						</h3>
						<div class="flex items-center gap-2 mb-3">
							<UBadge
								color="cyan"
								variant="soft"
							>
								{{ exp.company }}
							</UBadge>
							<span class="text-cyan-400">{{ exp.period }}</span>
						</div>
						<p class="text-gray-400">
							{{ exp.description }}
						</p>
					</UCard>
				</div>
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
