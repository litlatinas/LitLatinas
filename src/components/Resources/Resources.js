import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getResources } from '../../services/contentfulApi';
// import styles from './AllPodcasts.css';
import Resource from './Resource';

class ResourceList extends Component {
  constructor(props){
    super(props);

    this.state = { 
      resources: [] 
    };
  }
  componentDidMount() {
    getResources()
      .then(response => {
        const resources = response.items.map(item => item.fields);

        this.setState({ resources });
      })
      .catch(error => { 
        console.error(error);
      });
  
  }
  render() {
    const resources = this.state.resources    
      .sort(
        (first, second) =>
          new Date(first.datePublished).getTime() <
          new Date(second.datePublished).getTime()
      )
      .map((resource, i)=> {
     
        console.log('resourceItem', resource);
        return <li key={i} ><Resource resource={resource}/></li>;
      });
    // console.log('podcasts', podcasts);
    return (
      <ul>
        {resources}
      </ul>
    );
  }
}

export default ResourceList;