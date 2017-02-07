import React from 'react';

export default class Title extends React.Component {
  render () {
    return (
      <h1>
        hey
        {this.props.title}
      </h1>
    );
  }
}