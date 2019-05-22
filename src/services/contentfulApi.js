import { createClient } from 'contentful';

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

export function getPodcasts() {
  
  // console.log('client', client);
  // console.log(client.getEntries({ content_type: 'podCast' }));
  return client.getEntries({ content_type: 'podCast' });
}

export function getPodcastBySlug(slug) {
  return client.getEntries({ content_type: 'podCast', 'fields.slug': slug });
}

export function getResources() {
  return client.getEntries({ content_type: 'resources' });
}
