// app/types/project.ts
// Type partagé entre projects.vue et toutes les pages de projet

export interface ProjectMeta {
	title: string;
	description: string;
	tech: string[];
	image: string;
	github?: string;
	demo?: string;
	category: string;
	status: 'Terminé' | 'En cours' | 'Archivé';
	year: string;
}
