import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	console.log('🌱 Seeding database...');

	// ---------- PASS ----------
	await prisma.pass.create({
		data: {
			name: 'admin',
			password: 'admin123', // ⚠️ à hasher plus tard
		},
	});

	// ---------- SKILLS ----------
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const skills = await prisma.skill.createMany({
		data: [
			{ type: 'frontend', name: 'TypeScript', level: 4 },
			{ type: 'frontend', name: 'React', level: 4 },
			{ type: 'backend', name: 'Node.js', level: 3 },
			{ type: 'database', name: 'MySQL', level: 3 },
			{ type: 'orm', name: 'Prisma', level: 4 },
		],
	});

	// Récupération des skills pour les relations
	const allSkills = await prisma.skill.findMany();

	// ---------- PROJECT ----------
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const project = await prisma.project.create({
		data: {
			title: 'Portfolio',
			description: 'Mon portfolio personnel développé avec Next.js et Prisma',
			link: 'https://mon-portfolio.dev',

			skills: {
				connect: allSkills.map(skill => ({ id: skill.id })),
			},

			images: {
				create: [
					{
						path: '/images/portfolio/main.png',
						rank: 2,
					},
					{
						path: '/images/portfolio/preview.png',
						rank: 1,
					},
				],
			},
		},
	});

	console.log('✅ Seeding terminé !');
}

main()
	.catch((e) => {
		console.error('❌ Erreur lors du seed :', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
