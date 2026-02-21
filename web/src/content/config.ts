import { defineCollection, z } from 'astro:content';

const paths = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    nodeIds: z.array(z.string())
  })
});

const nodes = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    belongsToPath: z.string(),
    objective: z.string(),
    knowledge: z.string(),
    practice: z.string(),
    dod: z.array(z.string()),
    evidence: z.string()
  })
});

const artifacts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    relatedPath: z.string(),
    description: z.string()
  })
});

export const collections = {
  paths,
  nodes,
  artifacts
};
