import './App.css';
import { useState } from 'react';


// List of 3 messages
const message = ["I think, therefore I am.", "I have a dream.", "The only thing we have to fear is fear itself."]


function App() {
// Set initial state (slice card)
const [counter, setCounter] = useState(1)

// Set initial state (open and close)
const [isOpen, setisOpen] = useState(false)

  return (
    <div className="App">
        <h1 className='title'>Slice card by George Athanasopoulos</h1>

        <section className='slidewrapper'>
          <div className='numberwrapper'>
            <p className='msg'>{counter} ----- {message[counter-1]}</p>
            <div className={counter==1 ? "active" : ""}> <p>1</p> </div>
            <div className={counter==2 ? "active" : ""}> <p>2</p> </div>
            <div className={counter==3 ? "active" : ""}> <p>3</p> </div>
          </div>

          
          <div className='btngroup'>
            <button onClick={function(){setCounter(counter === 1 ? message.length : counter - 1)}}>Previous</button>
            <button onClick={function(){setCounter(counter === message.length ? 1 : counter + 1)}}>Next</button>
          </div>
        </section>

        {/** open and close */}
        <section className='info'>
          <p><b>Cat (Felis Catus)</b>, commonly referred to as a domestic cat or house cat.<button className='readmorebtn' onClick={function(){setisOpen(!isOpen)}}>{isOpen ? "Hide" : "Read More"}</button></p>
        </section>

        <section className=''>
          {
            isOpen && (
              <div className='readmore'>
                <p>The cat, commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae.</p>
              </div>
            )
          }
        </section>

    </div>
  );
}

export default App;
