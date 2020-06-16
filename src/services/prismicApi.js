	
import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://litlatinas.cdn.prismic.io/api/v2';
 
const Client = Prismic.client(apiEndpoint);

export const getResources = async() => {
  return Client.query(
    Prismic.Predicates.at('document.type', 'resource'));
};

export const getBooks = async() => {
  return Client.query(
    Prismic.Predicates.at('document.type', 'book')); 
};

