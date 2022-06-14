import React, { Component } from "react";
import reactDOM from "react-dom";

import Header from "./Header";

// need state? use class
// need to handle global event listeners (key presses / setInterval)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Dalton",
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

  componentDidMount() {
    // set listener
  }

  componentWillUnmount() {
    // remove listener
  }

  handleClick(event) {
    console.log("I be Clicked");
  }

  render() {
    /*
      div: {
        class: ["container"]
      }

      Header: {
        props: {
          greeting: 'Hello, '
        }
      }
    */
    return (
      <div className='container'>
        <Header
          onClick={this.handleClick}
          logout={this.logout}
          login={this.login}
          greeting='Hello, '
          user={this.state.user}
        />
        <Header greeting='Howdy, ' user={this.state.user} />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById("root"));
