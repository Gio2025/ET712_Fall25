import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputs, setInputs] = useState({});

  const handle_changes = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const [textcomment, setComment] = useState("");
  const submitted_comments = function(event){
    setComment(event.target.value);
  }

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

          {/* Password input */}
          <div className='formgroup'>
            <label htmlFor='password'>Enter a password:</label>
            <input
              type='password'
              id='password'
              className='inputstyle'
              name='password'
              placeholder='Type your password...'
              value={inputs.password || ""}
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

          <div className='formgroup'>
            <label htmlFor='gender'>Select a Gender:</label>
            <select
              id='gender'
              name="gender"
              value={inputs.gender || ""}
              onChange={handle_changes}
            >
              <option value="">Select gender...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className='formgroup'>
            <label htmlFor="comments">Any Suggestions</label>
            <textarea 
              id='comments'
              value={textcomment}
              onChange={submitted_comments}
              placeholder='Type a comment'
            />
          </div>

          <input type='submit' className='btnsubmit' />
        </fieldset>
      </form>

      <p className='printusername'>Username = {inputs.username}</p>
      <p className='printusername'>Age = {inputs.age}</p>
      <p className='printusername'>Gender = {inputs.gender}</p>
      <p className='printusername'>Comments = {textcomment}</p>
      <p className='printusername'>Password = {inputs.password}</p>

    </div>
  );
}

export default App;
