import React, { Component } from 'react';
import { getPodcastBySlug } from '../../services/contentfulApi';

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
      window.Prism.highlightAll();
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
      <section>
        <h2>{title}</h2>
        <p>{datePublished}</p>
        <image src={image} alt='podcast art'/>
        <p>{body}</p>
        <ul>{tags}</ul>
      </section>
    );
  }
}

export default Detail;
