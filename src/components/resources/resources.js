import React, { useState, useEffect } from 'react';
import { prismicGetter } from '../../services/prismicApi';
import Resource from './resource';

const Resources = () => {
  const [prismicData, setPrismicData] = useState(null);

  useEffect(() => {
    const fetchPrismicData = async() => {
      try {
        // TODO to add loading state with spinner
        const resources = await prismicGetter('resource');
        if(resources) {
          setPrismicData({ resources: resources.results });
        }
      } catch(e) {
        console.error('e: ', e);
      }
    };
    fetchPrismicData();
  }, []);

  if(prismicData) {
    const resources = prismicData.resources;
    return resources.map((resource) => <Resource key={resource.id} resource={resource}/>); 
  }

  return null;
};

export default Resources;
