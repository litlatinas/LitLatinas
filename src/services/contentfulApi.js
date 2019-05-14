import { createClient } from 'contentful';

export function getPosts() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });
  console.log(client, 'client');
  console.log(client.getEntries({ content_type: 'Podcast' }));
  return client.getEntries({ content_type: 'Podcast' });
}

export function getPostBySlug(slug) {
  const client = createClient({ space: process.env.SPACE_ID, accessToken: process.env.ACCESS_TOKEN });

  return client.getEntries({ content_type: 'posts', 'fields.slug': slug });
}
