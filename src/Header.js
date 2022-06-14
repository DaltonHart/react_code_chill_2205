import React from "react";

// no state? use functional
function Header(props) {
  return (
    <header onClick={props.onClick}>
      <p>
        {props.greeting} {props.user}
      </p>
      <button onClick={props.logout}>Logout</button>
      <button onClick={() => props.login("Candace")}>Logon</button>
    </header>
  );
}

export default Header;
