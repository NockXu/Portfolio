<!-- ============================================================
  EXPORT dans <script> classique (pas setup) — obligatoire
  C'est ce que projects.vue lit via import.meta.glob
============================================================ -->
<script lang="ts">
export const projectMeta = {
	title: 'Projet de maintenance d\'une borne arcade de l\'IUT',
	description: 'Pendant deux semaines, j\'ai du faire la maintenance d\'une borne arcade de l\'IUT pour la mettre à jour et ajouter un nouveau jeu.',
	tech: [],
	image: '/projects/borne_arcade/borne.jpg',
	github: 'https://github.com/TarzanHR/arcade_maintenance',
	demo: '',
	category: 'Maintenance',
	status: 'En cours' as const,
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
					{{ $t('projects.back') }}
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
				<p class="text-gray-300 text-lg leading-relaxed mb-4">
					{{ $t('projects.arcade.intro') }}
				</p>

				<ul class="space-y-2 mb-6 ml-6">
					<li class="text-gray-300 flex items-start gap-2">
						<UIcon
							name="i-heroicons-chevron-right"
							class="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
						/>
						{{ $t('projects.arcade.item1') }}
					</li>
					<li class="text-gray-300 flex items-start gap-2">
						<UIcon
							name="i-heroicons-chevron-right"
							class="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
						/>
						{{ $t('projects.arcade.item2') }}
					</li>
					<li class="text-gray-300 flex items-start gap-2">
						<UIcon
							name="i-heroicons-chevron-right"
							class="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
						/>
						{{ $t('projects.arcade.item3') }}
					</li>
					<li class="text-gray-300 flex items-start gap-2">
						<UIcon
							name="i-heroicons-chevron-right"
							class="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
						/>
						{{ $t('projects.arcade.item4') }}
					</li>
				</ul>
			</div>

			<p class="pb-32">
				{{ $t('projects.arcade.wip') }}
			</p>

			<div class="flex justify-start">
				<UButton
					to="/projects"
					icon="i-heroicons-arrow-left"
					color="gray"
					variant="outline"
				>
					{{ $t('projects.back') }}
				</UButton>
			</div>
		</div>
	</div>
</template>
