<script setup lang="ts">
interface ContactInfo {
	icon: string;
	label: string;
	value: string;
	href: string | null;
}

defineProps<{
	contactInfo: ContactInfo[];
}>();
</script>

<template>
	<div class="space-y-6">
		<UCard class="hover:scale-[1.02] transition-all duration-300">
			<template #header>
				<h2 class="text-2xl font-semibold text-blue-300">
					{{ $t('contact.infoTitle') }}
				</h2>
			</template>

			<div class="space-y-4">
				<div
					v-for="(info, index) in contactInfo"
					:key="index"
					class="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group"
				>
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<UIcon
							:name="info.icon"
							class="w-6 h-6 text-white"
						/>
					</div>
					<div class="flex-1">
						<p class="text-gray-400 text-sm">
							{{ info.label }}
						</p>
						<NuxtLink
							v-if="info.href"
							:to="info.href"
							class="text-blue-300 hover:text-blue-200 transition-colors duration-300"
						>
							{{ info.value }}
						</NuxtLink>
						<p
							v-else
							class="text-gray-200"
						>
							{{ info.value }}
						</p>
					</div>
				</div>
			</div>
		</UCard>

		<!-- Social Links -->
		<UCard class="hover:scale-[1.02] transition-all duration-300">
			<template #header>
				<h2 class="text-2xl font-semibold text-blue-300">
					{{ $t('contact.socialTitle') }}
				</h2>
			</template>

			<div class="flex space-x-4">
				<UButton
					variant="outline"
					size="lg"
					icon="i-simple-icons-github"
					color="secondary"
					class="hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300"
					href="https://github.com/NockXu"
				>
					GitHub
				</UButton>
				<UButton
					variant="outline"
					size="lg"
					icon="i-simple-icons-linkedin"
					color="secondary"
					class="hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300"
					href="https://www.linkedin.com/in/gabriel-david-767758383"
				>
					LinkedIn
				</UButton>
			</div>
		</UCard>
	</div>
</template>
