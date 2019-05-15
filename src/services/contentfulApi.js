import { createClient } from 'contentful';

export function getPosts() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });
  // console.log(client, 'client');
  // console.log(client.getEntries({ content_type: 'post' }), 'post');
  return client.getEntries({ content_type: 'podcast' });
}

export function getPostBySlug(slug) {
  const client = createClient({ space: process.env.SPACE_ID, accessToken: process.env.ACCESS_TOKEN });

  return client.getEntries({ content_type: 'podcast', 'fields.slug': slug })
}
