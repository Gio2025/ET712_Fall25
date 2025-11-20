import './App.css';
import React, { useState } from 'react';

function App() {

  // State for all text, number, and select inputs
  const [inputs, setInputs] = useState({});

  // Function to handle ALL input changes (including gender)
  const handle_changes = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  // Set state for comments
  const [textcomment, setComment] = useState("")
  // Function to collect the comments
  const submitted_comments = function(event){
    setComment(event.target.value)
  }

  // Function to submit form
  const submitform = (event) => {
    event.preventDefault();
    console.log("Form submitted:", inputs);
  };

  return (
    <div className='App'>
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React JS</legend>

          <div className='formgroup'>
            <label htmlFor='name'>Enter a name:</label>
            <input
              type='text'
              id='name'
              className='inputstyle'
              name='username'
              placeholder='Type the username...'
              value={inputs.username || ""}
              onChange={handle_changes}
            />
          </div>

          <div className='formgroup'>
            <label htmlFor='age'>Enter your age:</label>
            <input
              type='number'
              id='age'
              className='inputstyle'
              name='age'
              placeholder='Type in your age...'
              value={inputs.age || ""}
              onChange={handle_changes}
            />
          </div>

          {/** Select a gender */}
          <div className='formgroup'>
            <label> Select a Gender:
            <select
            name="gender"
            value={inputs.gender || ""}
            onChange={handle_changes}
          >
            <option value="">Select gender...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          </label>
          </div>

          {/** Comments using textarea */}
          <div className='formgroup'>
            <label for="comments">Any Suggestions</label>
            <textarea 
            id='comments'
            value={textcomment}
            onChange={submitted_comments}
            placeholder='Type a comment'    
            />
          </div>
          

          {/** Submit Form */}
          <input type='submit' className='btnsubmit' />
        </fieldset>
      </form>

      {/** Show collected values */}
      <p className='printusername'>Username = {inputs.username}</p>
      <p className='printusername'>Age = {inputs.age}</p>
      <p className='printusername'>Gender = {inputs.gender}</p>
      <p className='printusername'>Comments = {textcomment}</p>

    </div>
  );
}

export default App;
