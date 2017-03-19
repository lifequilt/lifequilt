import React, { Component } from 'react';
import SingleInput from './single-input';
import SingleTextarea from './single-textarea';
import { postDatabase } from '../api/apiDatabase';

const FIELDS_ARRAY = [
  { stateKey: 'title', title: 'Title' },
];

export class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      createdAt: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    newState['createdAt'] = (new Date()).toString()
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();

    const refName = '/blogs';
    const onFulfilled = snapshot => {
      return snapshot.key;
    };
    const onRejected = error => console.log('Errors: ', error);


    postDatabase({ jsonObject: this.state, refName })
      .then(onFulfilled)
      .catch(onRejected);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {FIELDS_ARRAY.map(field =>
            <SingleInput
              key={field.stateKey}
              stateKey={field.stateKey}
              onChange={this.onChange}
              value={this.state[field.stateKey]}
              title={field.title}
            />
          )}

          <SingleTextarea 
          	key='content'
	        stateKey='content'
	        onChange={this.onChange}
	        value={this.state.content}
	        title="Content"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BlogForm;
