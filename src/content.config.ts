import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const packages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/packages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    category: z.enum([
      'outbound-team-building',
      'adventure',
      'gathering-rombongan',
      'kombinasi',
      'outbound',
      'gathering',
      'pelajar',
      'team-building',
    ]),
    featured: z.boolean().default(false),
    // null = harga belum dikonfirmasi -> tampil "Hubungi kami untuk penawaran"
    priceFrom: z.number().nullable().default(null),
    priceUnit: z.string().default('peserta'),
    priceValidUntil: z.string().optional(),
    duration: z.string().default('Dikonfirmasi saat konsultasi'),
    participants: z.string().optional(),
    location: z.string().optional(),
    suitableFor: z.array(z.string()),
    goals: z.array(z.string()).default([]),
    included: z.array(z.string()),
    excluded: z.array(z.string()).default([]),
    rundown: z.array(z.object({ time: z.string(), activity: z.string() })).default([]),
    safety: z.array(z.string()).default([]),
    addons: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(10),
    updatedDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    category: z.enum(['Panduan outbound', 'Ide gathering', 'Tips keselamatan', 'Aktivitas sekolah dan komunitas']),
    author: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingMinutes: z.number().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    relatedPackages: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { packages, articles };
