import React, { useState, useEffect } from 'react';
import { getResources } from '../../services/prismicApi';
import Resource from './Resource';

const TryResources = () => {
  const [prismicData, setPrismicData] = useState({ resources: null });

  useEffect(() => {
    const fetchPrismicData = async() => {
      try {
        // if (resources) {
        const resources = await getResources();
        setPrismicData({ resources: resources.results });
        // }
      } catch(e) {
        console.error('error here', e);
      }
    };
    fetchPrismicData();
  }, []);

  if(prismicData.resources) {
    const resources = prismicData.resources;
    console.log('resources: ', resources);
    resources.map((resource) => {
      return (
        <Resource key={resource.id} resource={resource}/> 
      );
    });
  }
  return 'so no found';
};

export default TryResources;
