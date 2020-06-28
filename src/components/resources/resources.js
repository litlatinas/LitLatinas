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
    const prismicResources = prismicData.resources;
    const resources = prismicResources.map((resource, i) => <li key={i}><Resource key={resource.id} resource={resource}/></li>); 
    return (
      <section id="resources">
        <ul>
          {resources}
        </ul>
      </section>
  
    );
  }
  return null;
};

export default Resources;
