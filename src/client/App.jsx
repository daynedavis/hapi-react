import React from 'react';
import Title from './components/Title';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    const request = new Request('/api/hello', {
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
    const text = fetch(request).then((res) => {
      return res.text();
    });

    text.then((res) => console.log(res));
  }
  render () {
    return (
      <div>
        Hello World
        <Title title="Hello Title" />
      </div>
    );
  }
}