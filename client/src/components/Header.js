import React from "react";

function Header() {
  const divStyle = {
    background: "white",
    padding: "20px 0 20px 0",
    color: "black",
    borderTop: "30px solid blue",
    borderBottom: "30px solid red",

  };

  return <h1 style={divStyle}>Format Phone Numbers around the World!</h1>;
}

export default Header;
