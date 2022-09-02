import React from "react";
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";
import PhoneInput from "./components/PhoneInput";

function App() {

  return (
    <div className="App">
      <Header />
      <PhoneInput />
      <Display />
    </div>
  );
}

export default App;
