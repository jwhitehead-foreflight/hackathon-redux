import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_NUMBER, UPDATE_REGION } from "../actionTypes/actionTypes";

export default function PhoneInput() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
  
  function phoneNumberValidation(phoneNumber) {
    /*
This removes all non numeric characters 
and accepts numbers between 5 and 17 characters in length and throws an alert otherwise.
*/  
    //let rawnumber = phoneNumber.replace(/\D|^0+/g, "");
    let rawnumber = phoneNumber.replace(/[^0-9a-z]/gi, "");
    let numbers = rawnumber.replace(/\D|^0+/g, "");

    if (numbers && numbers.length < 16 && numbers.length > 4) {
      numberProcess(numbers);
    } else {
       alert("Please enter a valid phone number. Valid numbers are between 5 and 15 characters and must include with the country code.");
    }
   return false;
  }

  function numberProcess(numbers) {
    let formatted;
    console.log(numbers.slice(0, 1))
    if (numbers.slice(0, 1) === '1') {
        formatted = `+${numbers.slice(0, 1)}(${numbers.slice(1, 4)})${numbers.slice(4, 7)}-${numbers.slice(7, 11)}`;
    
    }  else if (numbers.slice(0, 1) === '7') {
       formatted = `+${numbers.slice(0, 1)} ${numbers.slice(1,5)} ${numbers.slice(5)}`
       console.log('europe 1')
    }  else if (numbers.slice(0, 2) === '20' || numbers.slice(0, 2) === '27'|| numbers.slice(0, 2) === '30'|| numbers.slice(0, 2) === '31'|| numbers.slice(0, 2) === '32'|| numbers.slice(0, 2) === '33'|| numbers.slice(0, 2) === '34'|| numbers.slice(0, 2) === '36'|| numbers.slice(0, 2) === '39'||
    numbers.slice(0, 2) === '40'|| numbers.slice(0, 2) === '41'|| numbers.slice(0, 2) === '43'|| numbers.slice(0, 2) === '44'|| numbers.slice(0, 2) === '45'|| numbers.slice(0, 2) === '46'|| numbers.slice(0, 2) === '47'|| numbers.slice(0, 2) === '49'|| numbers.slice(0, 2) === '51' || numbers.slice(0, 2) === '52'|| numbers.slice(0, 2) === '53'|| numbers.slice(0, 2) === '54'|| numbers.slice(0, 2) === '55'|| numbers.slice(0, 2) === '56' ||
    numbers.slice(0, 2) === '57'|| numbers.slice(0, 2) === '58'|| numbers.slice(0, 2) === '60'|| numbers.slice(0, 2) === '61'|| numbers.slice(0, 2) === '62'|| numbers.slice(0, 2) === '63'|| numbers.slice(0, 2) === '64'|| numbers.slice(0, 2) === '65'|| numbers.slice(0, 2) === '66' || numbers.slice(0, 2) === '81'|| numbers.slice(0, 2) === '82'|| numbers.slice(0, 2) === '84'|| numbers.slice(0, 2) === '86'|| numbers.slice(0, 2) === '90' ||
    numbers.slice(0, 2) === '91'|| numbers.slice(0, 2) === '92'|| numbers.slice(0, 2) === '93'|| numbers.slice(0, 2) === '94'|| numbers.slice(0, 2) === '95'|| numbers.slice(0, 2) === '98') {
        formatted = `+${numbers.slice(0, 2)} ${numbers.slice(2, 6)} ${numbers.slice(6)}`
        console.log(numbers.slice(0, 2))
    } else {
        formatted = `+${numbers.slice(0, 3)} ${numbers.slice(3, 7)} ${numbers.slice(7)}`
    }
      dispatch({type: UPDATE_NUMBER, payload: formatted});
      continent(numbers);
  }

  function continent(numbers) {
    let num = numbers.slice(0, 1)
    if (num === '1') {
        dispatch({type: UPDATE_REGION, payload: 'North America'});
    } else if (num === '2'){
        dispatch({type: UPDATE_REGION, payload: 'Africa'});
    } else if (num === '3' || num === '4'){
        dispatch({type: UPDATE_REGION, payload: 'Europe'});
    } else if (num === '5'){
        dispatch({type: UPDATE_REGION, payload: 'South & Central America'});
    } else if (num === '6'){
        dispatch({type: UPDATE_REGION, payload: 'Southeast Asia and Oceania'});
    } else if (num === '7'){
        dispatch({type: UPDATE_REGION, payload: 'Russia'});
    } else if (num === '8'){
        dispatch({type: UPDATE_REGION, payload: 'East Asia'});
    } else if (num === '9'){
        dispatch({type: UPDATE_REGION, payload: 'Middle East'});
    }
    console.log('oops')
  }

  let input;
  return (
    <div>
    <h3>Enter a Phone Number:</h3>
    <input 
        placeholder="+"
        ref={node => {
        input = node;
      }} />
      <button onClick={(value) => {
            phoneNumberValidation(input.value);
            input.value = '';
          }}>
        Format
      </button>
    </div>
  )
}
