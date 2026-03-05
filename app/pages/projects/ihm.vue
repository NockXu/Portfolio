<script lang="ts">
export const projectMeta = {
	title: 'Inter Hyper Market (IHM)',
	description: 'Application de gestion de stocks pour magasin avec architecture MVC et algorithme de Dijkstra pour le parcours optimal des rayons.',
	tech: ['Python', 'MVC', 'Dijkstra', 'POO'],
	image: '/projects/IHM/interface.png',
	github: 'https://github.com/NockXu/Inter-Hyper-Market-IHM-',
	demo: '',
	category: 'Application',
	status: 'Terminé' as const,
	year: '2024',
};
</script>

<script setup lang="ts">
const projectMeta = {
	title: 'Inter Hyper Market (IHM)',
	description: 'Application de gestion de stocks pour magasin avec architecture MVC et algorithme de Dijkstra pour le parcours optimal des rayons.',
	tech: ['Python', 'MVC', 'Dijkstra', 'POO'],
	image: '/projects/IHM/interface.png',
	github: 'https://github.com/NockXu/Inter-Hyper-Market-IHM-',
	demo: '',
	category: 'Application',
	status: 'Terminé' as const,
	year: '2024',
};
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

			<!-- Hero banner -->
			<div class="relative rounded-2xl overflow-hidden mb-10 h-64 md:h-96">
				<img
					:src="projectMeta.image"
					:alt="projectMeta.title"
					class="w-full h-full object-cover"
				>
				<div class="absolute bottom-6 left-6 flex flex-wrap gap-2">
					<UBadge
						color="primary"
						variant="solid"
					>
						{{ projectMeta.status }}
					</UBadge>
					<UBadge
						color="neutral"
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
				<div class="absolute bottom-6 right-6 flex gap-3">
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
				</div>
			</div>

			<!-- Titre -->
			<div class="mb-10 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
				<h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
					{{ projectMeta.title }}
				</h1>
				<p class="text-gray-300 text-lg leading-relaxed">
					{{ $t('projects.ihm.intro') }}
				</p>
			</div>

			<!-- Contenu principal -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="md:col-span-2 space-y-8">
					<!-- Présentation -->
					<div>
						<h3 class="text-xl font-semibold text-cyan-300 mb-3">
							{{ $t('projects.ihm.presentationTitle') }}
						</h3>
						<p class="text-gray-300 leading-relaxed">
							{{ $t('projects.ihm.presentation') }}
						</p>
					</div>

					<!-- Mon rôle -->
					<div>
						<h3 class="text-xl font-semibold text-cyan-300 mb-3">
							{{ $t('projects.ihm.roleTitle') }}
						</h3>
						<p class="text-gray-300 leading-relaxed mb-6">
							{{ $t('projects.ihm.role') }}
						</p>

						<!-- Classes développées -->
						<div class="space-y-6">
							<!-- Dijkstra -->
							<UCard class="bg-gray-800/60 border-gray-700/50">
								<template #header>
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-map"
											class="w-4 h-4 text-blue-400"
										/>
										<span class="text-sm font-semibold text-blue-300 font-mono">dijkstra()</span>
										<UBadge
											color="blue"
											variant="soft"
											size="xs"
										>
											Algorithme
										</UBadge>
									</div>
								</template>
								<p class="text-gray-400 text-sm mb-3">
									{{ $t('projects.ihm.dijkstraDesc') }}
								</p>
								<pre class="bg-gray-950/80 rounded-lg p-4 text-xs text-green-300 font-mono overflow-x-auto border border-gray-700/50"><code>from Classes.filepile import *

def dijkstra(graphe: dict, depart: tuple) -> dict:
    '''Renvoie un dictionnaire dont les clés sont les sommets
    atteignables depuis le sommet de départ, avec leur distance.

    :param: graphe, objet Plan
    :param: depart, type tuple, sommet de départ
    :return: la liste du chemin à suivre
    '''
    ...</code></pre>
							</UCard>

							<!-- Plan -->
							<UCard class="bg-gray-800/60 border-gray-700/50">
								<template #header>
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-squares-2x2"
											class="w-4 h-4 text-purple-400"
										/>
										<span class="text-sm font-semibold text-purple-300 font-mono">class Plan</span>
										<UBadge
											color="purple"
											variant="soft"
											size="xs"
										>
											Modèle
										</UBadge>
									</div>
								</template>
								<p class="text-gray-400 text-sm mb-3">
									{{ $t('projects.ihm.planDesc') }}
								</p>
								<pre class="bg-gray-950/80 rounded-lg p-4 text-xs text-green-300 font-mono overflow-x-auto border border-gray-700/50"><code>class Plan:
    def __init__(self, h: int = 9, l: int = 9,
                 nom: str = "MonMagasin", auteur: str = "",
                 date: str = "17/11/2005",
                 adresse: str = "None of your business",
                 image: str = None) -> None:
        self._plan: list[Point] = []
        self._h: int = h
        self._l: int = l
        # Création de la grille de points
        for x in range(h):
            for y in range(l):
                self._plan.append(Point(x, y))
        # Liaison des voisins
        for i in range(len(self._plan)):
            self._plan[i].set_voisins(self._plan)
    ...</code></pre>
							</UCard>

							<!-- Produit -->
							<UCard class="bg-gray-800/60 border-gray-700/50">
								<template #header>
									<div class="flex items-center gap-2">
										<UIcon
											name="i-heroicons-tag"
											class="w-4 h-4 text-emerald-400"
										/>
										<span class="text-sm font-semibold text-emerald-300 font-mono">class Produit</span>
										<UBadge
											color="emerald"
											variant="soft"
											size="xs"
										>
											Modèle
										</UBadge>
									</div>
								</template>
								<p class="text-gray-400 text-sm mb-3">
									{{ $t('projects.ihm.produitDesc') }}
								</p>
								<pre class="bg-gray-950/80 rounded-lg p-4 text-xs text-green-300 font-mono overflow-x-auto border border-gray-700/50"><code>class Produit:
    def __init__(self, nom: str, prix: float,
                 description: str, icone: str,
                 nomType: str) -> None:
        self._nom = nom
        self._prix = prix
        self._description = description
        self._icone = icone
        self._type = nomType
    ...</code></pre>
							</UCard>
						</div>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="space-y-6">
					<UCard class="bg-gray-800/50 border-gray-700">
						<template #header>
							<h2 class="text-lg font-semibold text-cyan-300">
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
							<h2 class="text-lg font-semibold text-gray-300">
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

					<UCard class="bg-gray-800/50 border-gray-700">
						<template #header>
							<h2 class="text-lg font-semibold text-gray-300">
								{{ $t('projects.ihm.teamTitle') }}
							</h2>
						</template>
						<div class="space-y-2 text-sm text-gray-300">
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-users"
									class="w-4 h-4 text-blue-400"
								/>
								<span>{{ $t('projects.ihm.teamSize') }}</span>
							</div>
							<div class="flex items-center gap-2">
								<UIcon
									name="i-heroicons-computer-desktop"
									class="w-4 h-4 text-purple-400"
								/>
								<span>{{ $t('projects.ihm.twoApps') }}</span>
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
