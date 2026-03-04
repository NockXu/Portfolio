<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<!-- Hero Section -->
			<ContactHero />

			<!-- Contact Grid -->
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Contact Form -->
				<ContactForm
					:form="form"
					:is-submitting="isSubmitting"
					:submit-status="submitStatus"
					@update:form="form = $event"
					@submit="handleSubmit"
				/>

				<!-- Contact Info -->
				<ContactInfo :contact-info="contactInfo" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const form = reactive({
	name: '',
	email: '',
	subject: '',
	message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

// Validation
const validateForm = () => {
	if (!form.name.trim()) return false;
	if (!form.email.trim() || !form.email.includes('@')) return false;
	if (!form.subject.trim()) return false;
	if (!form.message.trim() || form.message.length < 10) return false;
	return true;
};

const handleSubmit = async () => {
	if (!validateForm()) {
		submitStatus.value = 'error';
		setTimeout(() => submitStatus.value = 'idle', 3000);
		return;
	}

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

// Contact info
const contactInfo = [
	{
		icon: 'i-heroicons-envelope',
		label: 'Email',
		value: 'gabriel.dav@outlook.fr',
		href: 'mailto:gabriel.dav@outlook.fr',
	},
];
</script>

	<style scoped>
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.8; }
	}

	.animate-pulse {
		animation: pulse 3s ease-in-out infinite;
	}
	</style>
