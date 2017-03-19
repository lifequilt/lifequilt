import React, { Component } from 'react';
import SingleInput from './single-input';
import { postDatabase } from '../api/apiDatabase';
import RichTextEditor from 'react-rte';

const FIELDS_ARRAY = [
  { stateKey: 'title', title: 'Title' },
];

export class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: RichTextEditor.createEmptyValue(),
      createdAt: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    newState.createdAt = (new Date()).toString();
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();

    const refName = '/blogs';
    const onFulfilled = snapshot => {
      return snapshot.key;
    };
    const onRejected = error => console.log('Errors: ', error);

    const content = this.state.content.toString('html');
    console.log(postDatabase);

    postDatabase({ jsonObject: {
      title: this.state.title,
      createdAt: this.state.createdAt,
      content: content,
    }, refName })
      .then(onFulfilled)
      .catch(onRejected);
  }

  handleChange(content) {
    this.setState({content});
    content.toString('html')
    // console.log(this.state);
  };
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

          <RichTextEditor
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BlogForm;
