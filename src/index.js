import React, { Component } from "react";
import reactDOM from "react-dom";
import axios from "axios";

import Header from "./Header";
import Form from "./components/Form/Form.js";

// import { api_key } from "./secrets";

// images / css

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Dalton",
      posts: [],
    };

    // this.logout = this.logout.bind(this);
  }

  logout = () => {
    this.setState({
      user: null,
    });
  };

  login = user => {
    this.setState({ user });
  };

  // when our component is "birthed" please run this method ONCE
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data,
      });
    });
  };

  componentWillUnmount() {
    // remove listener
  }

  handleClick(event, data) {
    console.log("I be Clicked");
    console.log(data);
  }

  render() {
    return (
      <div className='container'>
        <Header
          onClick={this.handleClick}
          logout={this.logout}
          login={this.login}
          greeting='Hello, '
          user={this.state.user}
        />
        <Form fetchData={this.fetchData} />

        {this.state.posts.length}
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById("root"));
