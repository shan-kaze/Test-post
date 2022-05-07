//https://www.tutsmake.com/react-js-axios-post-request-example/
import React from 'react';
import axios from 'axios';
 
class User extends React.Component {
  state = {
    name: '',
  }
 
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const user = {
      name: this.state.name
    };
 
   
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    //axios.post(` http:localhost:3001/create`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
 
export default User;