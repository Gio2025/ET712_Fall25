import './App.css';
import User from "./comments"

import User_feedback from './User_feedback'

// import images
import avatar1 from './images/avatar_batman.png'
import avatar2 from './images/avatar_student.png'
import avatar3 from './images/avatar_support.png'

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Lab 12, React Props by George Athanasopoulos</h1>
      

      <section className="container">
        {/** user 1 */}
        <User_feedback username= "Batman"><User image = {avatar1}  date="04/23/2025" msg= "I am Batman"/></User_feedback>

        {/** user 2 */}
        <User_feedback username= "Daisy"><User image = {avatar2}  date="01/20/2025" msg= "Where is the bus stop?"/></User_feedback>

        {/** user 3 */}
        <User_feedback username= "Peter"><User image = {avatar3}  date="12/13/2024" msg= "I need help"/></User_feedback>
      </section>

    </>
  );
}

export default App;
