import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components'
const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    color:${props=>props.inValid?'red':'black'};
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1.5px solid ${props=>props.inValid?'red':'#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsValid]=useState(true);
  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length>0)
    {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl inValid={!isValid}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
