<!-- ============================================================
  EXPORT dans <script> classique (pas setup) — obligatoire
  C'est ce que projects.vue lit via import.meta.glob
============================================================ -->
<script lang="ts">
export const projectMeta = {
	title: 'Jeu VR',
	description: 'Jeu VR fait en une semaine sur Unreal Engine dans un groupe de 6',
	tech: ['Unreal Engine', 'Blueprint'],
	image: '/projects/vr/CrafCake_Affiche.png',
	github: '',
	demo: '',
	category: 'Jeu',
	status: 'Terminé' as const,
	year: '2026',
};
</script>

<!-- Logique du composant dans <script setup> -->
<script setup lang="ts">
// projectMeta est accessible ici directement
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<!-- Retour -->
			<div class="mb-10">
				<UButton
					to="/projects"
					icon="i-heroicons-arrow-left"
					color="gray"
					variant="ghost"
					size="sm"
				>
					Retour aux projets
				</UButton>
			</div>

			<!-- Hero image -->
			<div class="relative rounded-2xl overflow-hidden mb-10 h-64 md:h-96">
				<img
					:src="projectMeta.image"
					:alt="projectMeta.title"
					class="w-full h-full object-cover"
				>
				<div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
				<div class="absolute bottom-6 left-6 flex flex-wrap gap-2">
					<UBadge
						color="primary"
						variant="solid"
					>
						{{ projectMeta.status }}
					</UBadge>
					<UBadge
						color="gray"
						variant="solid"
					>
						{{ projectMeta.year }}
					</UBadge>
					<UBadge
						color="purple"
						variant="solid"
					>
						{{ projectMeta.category }}
					</UBadge>
				</div>
				<div
					v-if="projectMeta.github"
					class="absolute bottom-6 right-6 flex gap-3"
				>
					<UButton
						:to="projectMeta.github"
						target="_blank"
						icon="i-simple-icons-github"
						color="gray"
						variant="solid"
						size="sm"
					>
						GitHub
					</UButton>
					<UButton
						v-if="projectMeta.demo"
						:to="projectMeta.demo"
						target="_blank"
						icon="i-heroicons-arrow-top-right-on-square"
						color="primary"
						variant="solid"
						size="sm"
					>
						Demo
					</UButton>
				</div>
			</div>

			<!-- Titre -->
			<div class="mb-10 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
				<h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
					{{ projectMeta.title }}
				</h1>
				<p class="text-gray-300 text-lg leading-relaxed">
					{{ projectMeta.description }}
				</p>
			</div>

			<!-- Contenu -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="md:col-span-2 space-y-6">
					<!-- Section à compléter -->
					Ce projet était de réaliser en une semaine un jeu VR sur Unreal Engine. Il était demandé de faire un jeu avec des puzzle qui demandaient des interactions avec les mains.
					Dans ce projet, j'ai travailler sur les interactions avec les mains et la création de certains puzzles comme l'arc et la flèche qui doivent faire tombé un pont levis.
				</div>

				<!-- Sidebar auto depuis projectMeta -->
				<div class="space-y-6">
					<UCard class="bg-gray-800/50 border-gray-700">
						<template #header>
							<h2 class="text-lg font-semibold text-cyan-300 flex items-center gap-2">
								Technologies utilisées
							</h2>
						</template>
						<div class="flex flex-wrap gap-2">
							<UBadge
								v-for="tech in projectMeta.tech"
								:key="tech"
								color="primary"
								variant="soft"
							>
								{{ tech }}
							</UBadge>
						</div>
					</UCard>

					<UCard class="bg-gray-800/50 border-gray-700">
						<template #header>
							<h2 class="text-lg font-semibold text-gray-300 flex items-center gap-2">
								Informations
							</h2>
						</template>
						<div class="space-y-3 text-sm">
							<div class="flex justify-between items-center">
								<span class="text-gray-400">Année</span>
								<span class="text-white font-medium">{{ projectMeta.year }}</span>
							</div>
							<UDivider />
							<div class="flex justify-between items-center">
								<span class="text-gray-400">Catégorie</span>
								<span class="text-white font-medium">{{ projectMeta.category }}</span>
							</div>
							<UDivider />
							<div class="flex justify-between items-center">
								<span class="text-gray-400">Statut</span>
								<UBadge
									color="primary"
									variant="soft"
									size="sm"
								>
									{{ projectMeta.status }}
								</UBadge>
							</div>
						</div>
					</UCard>
				</div>
			</div>

			<UDivider class="mb-8" />
			<div class="flex justify-start">
				<UButton
					to="/projects"
					icon="i-heroicons-arrow-left"
					color="gray"
					variant="outline"
				>
					Tous les projets
				</UButton>
			</div>
		</div>
	</div>
</template>
