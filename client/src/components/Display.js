import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const state = useSelector((state) => state);

  const divStyle = {
    background: "",
    padding: "5px 0 5px 0",
  };
  
  const divStyle2 = {
    color: 'red'
  };

  return (
  <div>
  <h3 style={divStyle}>Your number, formatted:</h3>
  <h3>{state.phone.currentPhone}</h3>
  
  {state.region.currentRegion != '' && (
  <h3 style={divStyle2}>Looks like you're located in {state.region.currentRegion}!</h3>)}
  </div>
  )
}
