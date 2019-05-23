import React, { Component } from 'react';
import { getPodcastBySlug } from '../../services/contentfulApi';
import ReactPlayer from 'react-player';
import styles from './PodcastDetail.css';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      slug: '',
      // description: '',
      body: '',
      datePublished: '',
      isLoading: true,
      podcast: '',
      image: '',
      tags: []
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;

    getPodcastBySlug(slug).then(response => {
      const post = response.items[0].fields;
      this.setState({ ...post, isLoading: false });

      // After the post is loaded, we need to re-call Prism's highlight method to get
      // syntax highlighting to fire properly
      // window.Prism.highlightAll();
    });
  }

  render() {
    if(this.state.isLoading) {
      // TODO: Spinner
      return (
        <h2>LOADING...</h2>
      );
    }

    const { title, podcast, datePublished, body,
      image, tags } = this.state;

    return (
      <section className={styles.section}>
        <h2>{title}</h2>
        <h4>{datePublished}</h4>
        <image src={image} alt='podcast art'/>
        <p>{body}</p>
        <div className={styles.div}>
        <ReactPlayer className={styles.reactPlayer }url={podcast}/>
        </div>
        <h3>TAGS:</h3>
        <ul>
          <li>
            {tags}
          </li>
        </ul>
      </section>
    );
  }
}

export default Detail;
