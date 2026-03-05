<script setup lang="ts">
interface Form {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface Props {
	form: Form;
	isSubmitting: boolean;
	submitStatus: 'idle' | 'success' | 'error';
}

const props = defineProps<Props>();

const emit = defineEmits<{
	'update:form': [value: Form];
	'submit': [];
}>();

const isValidEmail = computed(() => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(props.form.email);
});

const emailError = computed(() => {
	if (!props.form.email) return '';
	return isValidEmail.value ? '' : $t('contact.errors.invalidEmail');
});

const messageError = computed(() => {
	if (!props.form.message) return '';
	return props.form.message.trim().length >= 10 ? '' : $t('contact.errors.shortMessage');
});

const isFormFilled = computed(() => {
	return props.form.name.trim() !== ''
		&& props.form.email.trim() !== ''
		&& isValidEmail.value
		&& props.form.subject.trim() !== ''
		&& props.form.message.trim().length >= 10;
});

const updateForm = (key: keyof Form, value: string) => {
	emit('update:form', { ...props.form, [key]: value });
};
</script>

<template>
	<UCard class="hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm border-gray-700/50">
		<UForm
			:state="props.form"
			class="space-y-6"
			@submit="$emit('submit')"
		>
			<div class="grid md:grid-cols-2 gap-4">
				<UFormGroup
					:label="$t('contact.name')"
					name="name"
					required
					class="space-y-2"
				>
					<div class="relative group">
						<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<UInput
							:model-value="props.form.name"
							:placeholder="$t('contact.placeholders.name')"
							size="xl"
							color="secondary"
							icon="i-heroicons-user"
							class="relative transition-all duration-300 w-[100%]"
							@update:model-value="updateForm('name', $event)"
						/>
					</div>
				</UFormGroup>

				<UFormGroup
					:label="$t('contact.email')"
					name="email"
					required
					class="space-y-2"
				>
					<div class="relative group">
						<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<UInput
							:model-value="props.form.email"
							type="email"
							placeholder="votre@email.com"
							size="xl"
							:color="emailError ? 'error' : 'secondary'"
							icon="i-heroicons-envelope"
							class="relative transition-all duration-300 w-[100%]"
							@update:model-value="updateForm('email', $event)"
						/>
					</div>
					<p
						v-if="emailError"
						class="text-red-400 text-sm mt-1"
					>
						{{ emailError }}
					</p>
				</UFormGroup>
			</div>

			<UFormGroup
				:label="$t('contact.subject')"
				name="subject"
				required
				class="space-y-2"
			>
				<div class="relative group">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					<UInput
						:model-value="props.form.subject"
						:placeholder="$t('contact.placeholders.subject')"
						size="xl"
						color="secondary"
						icon="i-heroicons-chat-bubble-left-right"
						class="relative transition-all duration-300 w-[100%]"
						@update:model-value="updateForm('subject', $event)"
					/>
				</div>
			</UFormGroup>

			<UFormGroup
				:label="$t('contact.message')"
				name="message"
				required
				class="space-y-2"
			>
				<div class="relative group">
					<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					<UTextarea
						:model-value="props.form.message"
						:placeholder="$t('contact.placeholders.message')"
						:rows="8"
						size="xl"
						:color="messageError ? 'error' : 'secondary'"
						autoresize
						class="relative transition-all duration-300 w-[100%]"
						@update:model-value="updateForm('message', $event)"
					/>
				</div>
				<p
					v-if="messageError"
					class="text-red-400 text-sm mt-1"
				>
					{{ messageError }}
				</p>
			</UFormGroup>

			<div class="flex justify-center mt-8">
				<UButton
					type="submit"
					size="xl"
					:loading="isSubmitting"
					:disabled="isSubmitting || !isFormFilled"
					loading-auto
					icon="i-heroicons-paper-airplane"
					class="px-20 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:transition-none"
				>
					{{ isSubmitting ? $t('contact.sending') : submitStatus === 'success' ? $t('contact.sent') : $t('contact.send') }}
				</UButton>
			</div>

			<UAlert
				v-if="submitStatus === 'success'"
				icon="i-heroicons-check-circle"
				color="primary"
				variant="subtle"
				:title="$t('contact.successTitle')"
				:description="$t('contact.successDesc')"
				class="mt-4 bg-green-500/10 border-green-500/30 text-green-300"
			/>

			<UAlert
				v-if="submitStatus === 'error'"
				icon="i-heroicons-exclamation-triangle"
				color="error"
				variant="subtle"
				:title="$t('contact.errorTitle')"
				:description="$t('contact.errorDesc')"
				class="mt-4 bg-red-500/10 border-red-500/30 text-red-300"
			/>
		</UForm>
	</UCard>
</template>

<style scoped>
:deep(.ui-input) {
	background: rgba(17, 24, 39, 0.8) !important;
	border-color: rgba(75, 85, 99, 0.5) !important;
}

:deep(.ui-input:focus-within) {
	border-color: rgb(59, 130, 246) !important;
	box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}

:deep(.ui-textarea) {
	background: rgba(17, 24, 39, 0.8) !important;
	border-color: rgba(75, 85, 99, 0.5) !important;
}

:deep(.ui-textarea:focus-within) {
	border-color: rgb(59, 130, 246) !important;
	box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}

:deep(.ui-input input) {
	color: rgb(243, 244, 246) !important;
	font-size: 1.125rem !important;
}

:deep(.ui-textarea textarea) {
	color: rgb(243, 244, 246) !important;
	font-size: 1.125rem !important;
}

:deep(.ui-input input::placeholder) {
	color: rgb(156, 163, 175) !important;
	font-size: 1.125rem !important;
}

:deep(.ui-textarea textarea::placeholder) {
	color: rgb(156, 163, 175) !important;
	font-size: 1.125rem !important;
}

:deep(.ui-form-group label) {
	color: rgb(147, 197, 253) !important;
	font-weight: 500 !important;
	font-size: 1.125rem !important;
}
</style>
