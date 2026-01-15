<script setup lang="ts">
const form = reactive({
	name: '',
	email: '',
	subject: '',
	message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async () => {
	isSubmitting.value = true;
	submitStatus.value = 'idle';

	await new Promise(resolve => setTimeout(resolve, 2000));

	submitStatus.value = 'success';
	isSubmitting.value = false;

	setTimeout(() => {
		Object.assign(form, { name: '', email: '', subject: '', message: '' });
		submitStatus.value = 'idle';
	}, 3000);
};
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<!-- Hero Section -->
			<div class="mb-20 relative">
				<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
				<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse">
					Contact
				</h1>
				<UDivider class="w-32" />
			</div>

			<!-- Contact Form -->
			<UCard>
				<template #header>
					<h2 class="text-3xl font-semibold text-blue-300">
						Envoyez-moi un message
					</h2>
				</template>

				<UForm
					:state="form"
					class="space-y-6"
					@submit="handleSubmit"
				>
					<UFormGroup
						label="Nom"
						name="name"
						required
					>
						<UInput
							v-model="form.name"
							placeholder="Votre nom"
							size="lg"
							icon="i-heroicons-user"
						/>
					</UFormGroup>

					<UFormGroup
						label="Email"
						name="email"
						required
					>
						<UInput
							v-model="form.email"
							type="email"
							placeholder="votre@email.com"
							size="lg"
							icon="i-heroicons-envelope"
						/>
					</UFormGroup>

					<UFormGroup
						label="Sujet"
						name="subject"
						required
					>
						<UInput
							v-model="form.subject"
							placeholder="Sujet de votre message"
							size="lg"
							icon="i-heroicons-chat-bubble-left-right"
						/>
					</UFormGroup>

					<UFormGroup
						label="Message"
						name="message"
						required
					>
						<UTextarea
							v-model="form.message"
							placeholder="Votre message..."
							:rows="6"
							size="lg"
							resize
						/>
					</UFormGroup>

					<div class="flex justify-center mt-8">
						<UButton
							type="submit"
							size="xl"
							:loading="isSubmitting"
							:disabled="isSubmitting"
							icon="i-heroicons-paper-airplane"
							class="px-20"
						>
							{{ isSubmitting ? 'Envoi en cours...' : submitStatus === 'success' ? 'Message envoyé !' : 'Envoyer le message' }}
						</UButton>
					</div>

					<UAlert
						v-if="submitStatus === 'success'"
						icon="i-heroicons-check-circle"
						color="green"
						variant="subtle"
						title="Message envoyé avec succès !"
						description="Je vous répondrai dans les plus brefs délais."
					/>
				</UForm>
			</UCard>
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
