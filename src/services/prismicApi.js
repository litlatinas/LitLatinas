import Prismic from 'prismic-javascript';

import { prismicApiUrl } from '../utils/constants';
 
const apiEndpoint = 'https://litlatinas.cdn.prismic.io/api/v2';
const Client = Prismic.client(prismicApiUrl);

client.query(
  [Prismic.Predicates.at('document.type', 'title'), 
    Prismic.Predicates.at('document.type', 'slug'),
    Prismic.Predicates.at('document.type', 'date_published'),
    Prismic.Predicates.at('document.type', 'podcast'),
    Prismic.Predicates.at('document.type', 'description'),
    Prismic.Predicates.at('document.type', 'body'),
    Prismic.Predicates.at('document.type', 'image'),
    Prismic.Predicates.at('document.type', 'resource'),
    Prismic.Predicates.at('document.type', ['featured'])]
  //ordering options and pageSize or pages exist search how to query api
  //{ orderings : '[my.blog_post.date desc]' }
  //{ pageSize : 10, page : 2 }
).then(response => {
  response.results; 
});

export const client = Prismic.client(apiEndpoint, { accessToken });



export const prismicGetter = async(type) => {
  return Client.query(
    Prismic.Predicates.at('document.type', type)
  );
};
