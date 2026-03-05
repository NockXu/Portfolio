<template>
	<div class="mb-20 relative">
		<div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
		<h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-pulse">
			{{ $t('contact.title') }}
		</h1>
		<div class="h-1 w-1/6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8" />
		<p class="text-gray-300 text-lg mt-6 max-w-2xl">
			{{ $t('contact.subtitle') }}
		</p>
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
