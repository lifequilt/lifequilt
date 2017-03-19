
import React, { Component } from 'react';
import getDatabase from '../../api/apiDatabase/getDatabase';

// const blogs = getDatabase('/blogs/-KfZ8tKRaz35N_YzDueu');
// console.log(blogs);

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogs: getDatabase('/blogs'),
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
        {Object.entries(this.state.blogs).map(blog => <div key={blog[0]}>
          {blog[1] ? blog[1].title : ''}
        </div>)}
      </div>
    );
  }
}

export default Blog;
