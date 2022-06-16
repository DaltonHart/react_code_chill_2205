import React from "react";

import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      userId: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(res => {
        this.props.fetchData();
      });
  };

  render() {
    return (
      <form style={{ display: "grid" }} onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Your cool title'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='body'
          placeholder='How are you feeling?'
          onChange={this.handleChange}
        />
        <button type='submit'>Make your post known to the world</button>
      </form>
    );
  }
}

export default Form;
