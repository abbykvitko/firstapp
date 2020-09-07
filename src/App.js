import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  const tasks = ["Laundry", "Mow the Grass", "Test"];
  var do_when = "";

  console.log(tasks);

  function randomColor() {
    return Math.round(Math.random()*250);
  }

  return (
    <div>
      <ul>
        {tasks.map((task_in_list, array_position) => 
          (
            
            <li tag = {array_position} 
            style={{
              color:"rgb("+randomColor()+","+randomColor()+","+randomColor()+")"
            }}
            >
              {array_position+1}: {task_in_list}
            </li>
          )
        )}
      </ul>
    </div>
  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      

        <h1>Hello World</h1>
        <ul>
          <li>Do laundry</li>
          <li>Do laundry</li>
          <li>Do laundry</li>
          <li>Do laundry</li>
        </ul>

        <div class="center_text">
        <p>
        &#10024; &#128065;&#128068;&#128065; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
          Put some text here.  Put some text here.  Put some text here.  Put some text here.
        </p>
        </div>

      </header>

    </div>
    */
  );
}

export default App;
