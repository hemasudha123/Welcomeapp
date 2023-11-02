import './App.css';
import React, { useState } from 'react'
function App() {
  const [clicked, setClicked] = useState("")
  
  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className="WelcomeContainer">
      <h1 className="title">Welcome</h1>
      <div className="downbuttons">
        <h3>Thank you! Happy Learning</h3>
        <button onClick={handleClicked}>
          { clicked ? 'Subscribed':'Subscribe'}
        </button>
      </div>
    </div>
  );
}

export default App;
