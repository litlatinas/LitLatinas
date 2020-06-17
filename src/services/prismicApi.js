	
import Prismic from 'prismic-javascript';

import { prismicApiUrl } from '../utils/constants';
 
const Client = Prismic.client(prismicApiUrl);

export const prismicGetter = async(type) => {
  return Client.query(
    Prismic.Predicates.at('document.type', type)
  );
};
