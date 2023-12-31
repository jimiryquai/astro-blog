// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const postsCollection = defineCollection({
   type: 'content',
   schema: ({image}) =>z.object({
      title: z.string(),
      author: z.string(),
      categories: z.array(z.string()),
      date: z.string().transform((str) => new Date(str)),
      featured: z.boolean(),
      image: image(),
      description: z.string(),
  })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  posts: postsCollection,
};