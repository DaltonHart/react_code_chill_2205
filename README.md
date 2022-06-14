## Todo

- [x] Functional OR Class

```js
// need state? use class
// need to handle global event listeners (key presses / setInterval)
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // set listener
  }

  componentWillUnmount() {
    // remove listener
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

// no state? use functional
function Header(props) {
  return (
    <header>
      <p>I am a header</p>
    </header>
  );
}
```

- [x] Import / Export

```js
/* == Imports == */
import React from "react"; // import thing from "node package"
import Header from "./Header"; // import component from "local file" NOTE: must use relative pathing
/* == Exports == */
// this export makes what you choose in the file available outside the file
export default Header; // export default ComponentName
```

- [x] JSX Escape Characters aka `{ }`

```js
/* 
  in jsx we need to "escape" the syntax to tell 
  babel to use js instead of html syntax. 
  This is done with { } 
*/
function Header(props) {
  return (
    <header>
      <p>
        {/* Here we are using {} to interpolate js into the html syntax  */}
        {props.greeting} {props.user}
      </p>
    </header>
  );
}
```

- [x] Props + Prop Drilling

```js
/* == Assigning Props == */

// Props are just added data to describe the component.
// This is not unlike params in a function
// These can be any valid Js!
/*
  Header: {
    props: {
      greeting: "Howdy, "
    }
  }
*/
render() {
    return (
      <div className='container'>
        <Header greeting='Howdy, '  />
      </div>
    );
  }

/* == Access Props  == */

// Functional
function Header(props) {
  return (
    <header >
      <p>
        {props.greeting}
      </p>
    </header>
  );
}

// Class based
// in class
render(){
  return (
    <header >
      <p>
        {this.props.greeting}
      </p>
    </header>
  );
}
```

- [x] Changing State

```js
// to change state you must use the built in setState method

logout = () => {
  // inside the component class is a method to update state. Must recieve either an object or a function that returns an object with keys matching the state properties that we want update
  this.setState({
    user: null,
  });
};
```

- [x] Changing State in children components

```js
// since props can be anything.. we just pass down the function that updates state and we can use it the child!

// inside parent
render() {
    return (
      <div className='container'>
        <Header greeting='Howdy, ' logout={this.logout}  />
      </div>
    );
  }

// inside child
function Header(props) {
  return (
    <header>
      <p>
        {props.greeting}
      </p>
      <button onClick={props.logout}>Logout</button>
    </header>
  );
}
```
