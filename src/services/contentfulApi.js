import { createClient } from 'contentful';

export function getPodcasts() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });
  // console.log('client', client);
  // console.log(client.getEntries({ content_type: 'podCast' }));
  return client.getEntries({ content_type: 'podCast' });
}

export function getPostBySlug(slug) {
  const client = createClient({ space: process.env.SPACE_ID, accessToken: process.env.ACCESS_TOKEN });
  return client.getEntries({ content_type: 'podCast', 'fields.slug': slug });
}
