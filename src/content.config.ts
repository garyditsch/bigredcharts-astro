// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blogCollection = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string(),
        tags: z.array(z.string())
    }) 
    
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog: blogCollection };

