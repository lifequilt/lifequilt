import React, { Component } from 'react';
import getDatabase from '../../api/apiDatabase/getDatabase';
import styles from './Blog.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogs: {},
    };
  }

  componentWillMount() {
    getDatabase('/blogs').on('value', snapshot => {
      this.setState({ blogs: snapshot.val() });
    });
  }

  render() {
    return (
      <div>
        {Object.entries(this.state.blogs).map(blog =>
          <div key={blog[0]} className={styles.blogContainer}>
            <h1>{blog[1] ? blog[1].title : ''}</h1>
            <p>
              {blog[1] ? blog[1].content : ''}
            </p>
            <hr />
          </div>)}
      </div>
    );
  }
}

export default Blog;
