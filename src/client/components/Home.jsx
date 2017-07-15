import React from 'react';
import Title from './Title';
import styles from '../style/app.css';

export default class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    }

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount () {
    const request = new Request('/api/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const text = fetch(request).then((res) => {
      return res.json();
    });

    text.then((users) => {
      this.setState({ users });
    });
  }

  getUsers () {
    const { users } = this.state;
    return users.map((user, idx) => {
      return (
        <li className={styles.user} key={`User${idx}`}>
          {user.name}
          <div className={styles.remove} onClick={() => this.removeUser(user._id)}>x</div>
        </li>
      );
    })
  }

  addUser () {
    const request = new Request('/api/users', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({name: this.newName.value})
    });

    const text = fetch(request).then((res) => {
      res.json().then(users => {
        this.setState({ users });
      });
    });
  }

  removeUser (id) {
    const request = new Request('/api/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'DELETE',
      body: JSON.stringify({ id })
    });

    const text = fetch(request).then((res) => {
      res.json().then(users => {
        this.setState({ users });
      });
    });
  }

  render () {
    return (
      <div className="container">
        <div className="card">
          <Title title="Users" />
          <input type="text" ref={(ref) => this.newName = ref} />
          <button onClick={this.addUser}>Add user</button>
          <ul>
            {this.getUsers()}
          </ul>
        </div>
      </div>
    );
  }
}
