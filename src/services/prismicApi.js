	
import Prismic from 'prismic-javascript';

import { prismicApi } from '../utils/constants';
 
const Client = Prismic.client(prismicApi);
console.log('Client: ', Client);

export const prismicGetter = async(type) => {
  return Client.query(
    Prismic.Predicates.at('document.type', type)
  );
};
