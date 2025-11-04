import './App.css';
import trees from "./images/image1.jpg"
function App() {
  return (
    <>
      <h1 className='title'>Welcome to React JS</h1>
      <h2 className='author'>By George Athanasopoulos</h2>
      <h2 style={{color:"green", textAlign: "center"}}>Inline Styling</h2>
      <section>
        <label for="user_email">Enter email: </label>
        <input type="email" id="user_email" placeholder='Enter email address...'></input>
      </section>
      <figure className='imgcontainer'>
        <img src={trees}/>
      </figure>
    </>
  );
}

export default App;
