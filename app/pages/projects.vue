<script setup lang="ts">
const projects = [
	{
		title: 'Application de traitement d\'image',
		description: 'Application permettant de traiter et manipuler des images avec différents filtres et effets',
		tech: ['Python', 'Pillow', 'Tkinter'],
		image: 'https://picsum.photos/600/400?random=10',
		github: 'https://github.com/NockXu',
		category: 'Application',
	},
	{
		title: 'Site Web Portfolio',
		description: 'Développement d\'un portfolio moderne et responsive avec Nuxt 4',
		tech: ['Nuxt', 'Vue.js', 'TypeScript', 'Tailwind'],
		image: 'https://picsum.photos/600/400?random=11',
		github: 'https://github.com/NockXu',
		category: 'Web',
	},
	{
		title: 'Gestion de Base de Données',
		description: 'Conception et implémentation d\'une base de données relationnelle complexe',
		tech: ['PostgreSQL', 'SQL', 'Node.js'],
		image: 'https://picsum.photos/600/400?random=12',
		github: '',
		category: 'Base de données',
	},
	{
		title: 'Interface Graphique',
		description: 'Création d\'interfaces utilisateur intuitives et modernes',
		tech: ['Vue.js', 'CSS', 'JavaScript'],
		image: 'https://picsum.photos/600/400?random=13',
		github: 'https://github.com/NockXu',
		category: 'Interface',
	},
	{
		title: 'Application Web Full-Stack',
		description: 'Développement d\'une application web complète avec authentification',
		tech: ['Node.js', 'Express', 'MongoDB', 'Vue.js'],
		image: 'https://picsum.photos/600/400?random=14',
		github: 'https://github.com/NockXu',
		category: 'Web',
	},
	{
		title: 'Projet IUT',
		description: 'Projet collaboratif réalisé dans le cadre de la formation à l\'IUT de Calais',
		tech: ['Python', 'Git', 'Collaboration'],
		image: 'https://picsum.photos/600/400?random=15',
		github: '',
		category: 'Application',
	},
];

const selectedFilter = ref('Tous');
const filters = [
	{ label: 'Tous', value: 'Tous' },
	{ label: 'Web', value: 'Web' },
	{ label: 'Application', value: 'Application' },
	{ label: 'Base de données', value: 'Base de données' },
	{ label: 'Interface', value: 'Interface' },
];
const searchQuery = ref('');
const searchTag = ref('');

const filteredProjects = computed(() => {
	let result = projects;

	// Filtre par catégorie
	if (selectedFilter.value !== 'Tous') {
		result = result.filter(p => p.category === selectedFilter.value);
	}

	// Filtre par recherche de titre
	if (searchQuery.value.trim()) {
		result = result.filter(p =>
			p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			|| p.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
		);
	}

	// Filtre par recherche de tag
	if (searchTag.value.trim()) {
		result = result.filter(p =>
			p.tech.some(tech => tech.toLowerCase().includes(searchTag.value.toLowerCase())),
		);
	}

	return result;
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-7xl mx-auto">
			<!-- Hero Section -->
			<div class="mb-20 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse">
					Mes Projets
				</h1>
				<UDivider class="w-32" />
			</div>

			<!-- Description Section -->
			<UCard class="mb-12">
				<p class="text-gray-300 text-lg leading-relaxed">
					Au cours de mon parcours, j'ai eu l'opportunité de me lancer dans le développement d'applications. J'ai aussi eu l'occasion de créer des sites web, de travailler sur des interfaces graphiques et de concevoir des bases de données...
				</p>
			</UCard>

			<!-- Search Bars -->
			<div class="mb-8">
				<UInput
					v-model="searchQuery"
					icon="i-heroicons-magnifying-glass"
					size="lg"
					placeholder="Rechercher un projet par titre ou description..."
				/>
			</div>

			<!-- Filters et recherche par tag -->
			<div class="mb-12 flex flex-col md:flex-row gap-4 items-start md:items-center">
				<UInput
					v-model="searchTag"
					icon="i-heroicons-tag"
					size="lg"
					placeholder="Rechercher par technologie..."
					class="w-full md:w-80"
				/>

				<UButtonGroup class="flex-1">
					<UButton
						v-for="filter in filters"
						:key="filter.value"
						:variant="selectedFilter === filter.value ? 'solid' : 'outline'"
						:color="selectedFilter === filter.value ? 'primary' : 'gray'"
						@click="selectedFilter = filter.value"
					>
						{{ filter.label }}
					</UButton>
				</UButtonGroup>
			</div>

			<!-- Projects Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<UCard
					v-for="(project, index) in filteredProjects"
					:key="index"
					:ui="{
						body: { padding: 'p-0' },
						header: { padding: 'p-0' },
					}"
					class="overflow-hidden hover:scale-105 transition-all duration-500"
				>
					<template #header>
						<div class="relative h-48">
							<img
								:src="project.image"
								:alt="project.title"
								class="w-full h-full object-cover"
							>
							<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

							<UButton
								v-if="project.github"
								:to="project.github"
								target="_blank"
								icon="i-simple-icons-github"
								color="gray"
								variant="solid"
								class="absolute top-4 right-4"
								square
							/>
						</div>
					</template>

					<div class="p-6">
						<h3 class="text-2xl font-bold text-white mb-3">
							{{ project.title }}
						</h3>
						<p class="text-gray-400 mb-4 text-sm leading-relaxed">
							{{ project.description }}
						</p>

						<div class="flex flex-wrap gap-2">
							<UBadge
								v-for="tech in project.tech"
								:key="tech"
								color="primary"
								variant="soft"
							>
								{{ tech }}
							</UBadge>
						</div>
					</div>
				</UCard>
			</div>

			<!-- No results -->
			<UAlert
				v-if="filteredProjects.length === 0"
				icon="i-heroicons-information-circle"
				color="primary"
				variant="subtle"
				title="Aucun projet trouvé"
				description="Essayez de modifier vos critères de recherche."
				class="mt-8"
			/>
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
