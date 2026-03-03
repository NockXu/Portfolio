<script setup lang="ts">
import type { ProjectMeta } from '~/types/Project';

// Scanne automatiquement tous les fichiers dans pages/projects/
const modules = import.meta.glob<{ projectMeta: ProjectMeta }>('./*.vue', { eager: true });

const projects = Object.entries(modules)
	.filter(([, mod]) => mod.projectMeta)
	.map(([path, mod]) => {
		const slug = path.replace('./', '').replace('.vue', '');
		return { slug, link: `/projects/${slug}`, ...mod.projectMeta };
	})
	.sort((a, b) => b.year.localeCompare(a.year));

const selectedFilter = ref('Tous');
const searchQuery = ref('');
const searchTag = ref('');

const categories = computed(() => ['Tous', ...new Set(projects.map(p => p.category))]);

const statusColor = (status: string) => {
	if (status === 'En cours') return 'success';
	if (status === 'Archivé') return 'warning';
	return 'primary';
};

const filteredProjects = computed(() => {
	let result = projects;
	if (selectedFilter.value !== 'Tous')
		result = result.filter(p => p.category === selectedFilter.value);
	if (searchQuery.value.trim())
		result = result.filter(p =>
			p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			|| p.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
		);
	if (searchTag.value.trim())
		result = result.filter(p =>
			p.tech.some(t => t.toLowerCase().includes(searchTag.value.toLowerCase())),
		);
	return result;
});
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="mb-20 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse">
					Mes Projets
				</h1>
				<UDivider class="w-32" />
			</div>

			<UCard class="mb-12">
				<p class="text-gray-300 text-lg leading-relaxed">
					Au cours de mon parcours, j'ai eu l'opportunité de me lancer dans le développement d'applications. J'ai aussi eu l'occasion de créer des sites web, de travailler sur des interfaces graphiques et de concevoir des bases de données...
				</p>
			</UCard>

			<div class="mb-8">
				<UInput
					v-model="searchQuery"
					icon="i-heroicons-magnifying-glass"
					size="lg"
					placeholder="Rechercher un projet par titre ou description..."
				/>
			</div>

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
						v-for="cat in categories"
						:key="cat"
						:variant="selectedFilter === cat ? 'solid' : 'outline'"
						:color="selectedFilter === cat ? 'primary' : 'gray'"
						@click="selectedFilter = cat"
					>
						{{ cat }}
					</UButton>
				</UButtonGroup>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<NuxtLink
					v-for="project in filteredProjects"
					:key="project.slug"
					:to="project.link"
					class="group block"
				>
					<UCard
						:ui="{ body: { padding: 'p-0' }, header: { padding: 'p-0' } }"
						class="overflow-hidden h-full transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-blue-900/40 group-hover:border-blue-500/40"
					>
						<template #header>
							<div class="relative h-48 overflow-hidden">
								<img
									:src="project.image"
									:alt="project.title"
									class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								>
								<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
								<div class="absolute top-4 left-4 flex gap-2">
									<UBadge
										:color="statusColor(project.status)"
										variant="solid"
										size="sm"
									>{{ project.status }}</UBadge>
									<UBadge
										color="gray"
										variant="solid"
										size="sm"
									>{{ project.year }}</UBadge>
								</div>
								<UButton
									v-if="project.github"
									:to="project.github"
									target="_blank"
									icon="i-simple-icons-github"
									color="gray"
									variant="solid"
									class="absolute top-4 right-4"
									square
									@click.stop
								/>
								<div class="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<span class="text-white font-semibold text-sm bg-gray-900/70 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
										<UIcon
											name="i-heroicons-arrow-right"
											class="w-4 h-4"
										/>
										Voir le projet
									</span>
								</div>
							</div>
						</template>
						<div class="p-6">
							<div class="flex items-start justify-between gap-2 mb-3">
								<h3 class="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-200">{{ project.title }}</h3>
								<UBadge
									color="purple"
									variant="soft"
									size="xs"
									class="shrink-0 mt-1"
								>{{ project.category }}</UBadge>
							</div>
							<p class="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">{{ project.description }}</p>
							<div class="flex flex-wrap gap-2">
								<UBadge
									v-for="tech in project.tech"
									:key="tech"
									color="primary"
									variant="soft"
									size="xs"
								>{{ tech }}</UBadge>
							</div>
						</div>
					</UCard>
				</NuxtLink>
			</div>

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
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
.animate-pulse { animation: pulse 3s ease-in-out infinite; }
</style>
