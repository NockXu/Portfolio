<!-- ============================================================
  EXPORT dans <script> classique (pas setup) — obligatoire
  C'est ce que projects.vue lit via import.meta.glob
============================================================ -->
<script lang="ts">
export const projectMeta = {
	title: 'Application de traitement d\'image',
	description: 'Le but de ce projet était de créer un logiciel capable de récupérer les images des satellites depuis la base de données MAST, de les transformer et d’améliorer leur coloration.',
	tech: ['Python'],
	image: '/projects/traitement_image/space.png',
	github: '',
	demo: '',
	category: 'Application',
	status: 'Terminé' as const,
	year: '2024',
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
				<p class="text-gray-300 text-lg leading-relaxed">
					{{ $t('projects.traitement_image.intro') }}
				</p>
			</div>

			<!-- Contenu -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="md:col-span-2 space-y-6">
					<h2 class="text-xl font-semibold text-blue-300 flex items-center gap-2">
						{{ $t('projects.traitement_image.part1Title') }}
					</h2>

					<img
						src="/projects/traitement_image/code1.png"
						alt="Code transformation d'images"
						class="w-full rounded-lg mb-4"
					>

					<p class="text-gray-300 leading-relaxed">
						{{ $t('projects.traitement_image.part1') }}
					</p>

					<ul class="space-y-2 ml-6 mt-4">
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items2') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items3') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items4') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items5') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items6') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part1Items7') }}
						</li>
					</ul>

					<h2 class="text-xl font-semibold text-purple-300 flex items-center gap-2">
						{{ $t('projects.traitement_image.part2Title') }}
					</h2>

					<img
						src="/projects/traitement_image/code2.png"
						alt="Code récupération d'images"
						class="w-full rounded-lg mb-4"
					>

					<p class="text-gray-300 leading-relaxed">
						{{ $t('projects.traitement_image.part2') }}
					</p>

					<ul class="space-y-2 ml-6 mt-4">
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items2') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items3') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items4') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items5') }}
						</li>
						<li class="text-gray-300">
							{{ $t('projects.traitement_image.part2Items6') }}
						</li>
					</ul>

					<p class="text-gray-300 leading-relaxed mt-4">
						{{ $t('projects.traitement_image.part2End') }}
					</p>
				</div>

				<!-- Sidebar auto depuis projectMeta -->
				<div class="space-y-6">
					<UCard class="bg-gray-800/50 border-gray-700">
						<template #header>
							<h2 class="text-lg font-semibold text-cyan-300 flex items-center gap-2">
								{{ $t('projects.techUsed') }}
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
								{{ $t('projects.info') }}
							</h2>
						</template>
						<div class="space-y-3 text-sm">
							<div class="flex justify-between items-center">
								<span class="text-gray-400">{{ $t('projects.year') }}</span>
								<span class="text-white font-medium">{{ projectMeta.year }}</span>
							</div>
							<UDivider />
							<div class="flex justify-between items-center">
								<span class="text-gray-400">{{ $t('projects.categoryLabel') }}</span>
								<span class="text-white font-medium">{{ projectMeta.category }}</span>
							</div>
							<UDivider />
							<div class="flex justify-between items-center">
								<span class="text-gray-400">{{ $t('projects.status') }}</span>
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
					{{ $t('projects.back') }}
				</UButton>
			</div>
		</div>
	</div>
</template>
