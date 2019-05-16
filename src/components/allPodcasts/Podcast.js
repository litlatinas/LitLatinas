// import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from prop-types;


// import './PostListItem.css';

class PostListItem extends Component {
  
  componentDidMount() {
    getPodcastBySlug(slug).then(response => {
      const post = response.items[0].fields;
      this.setState({ ...post, isLoading: false });
    });
  }
  render() {
    const { title, slug } = this.props;

    return (
      <div className="post-list-item">
        <h1 className="title is-4">
          <Link to={`/blog/${slug}`}>
            {title}
          </Link>
        </h1>
        
        {/* <span>
          {moment(datePublished).format('MMMM D, YYYY')}
        </span> */}
      </div>
    );
  }
  // PostListItem.propTypes = {
    
  // }
}

export default PostListItem;
