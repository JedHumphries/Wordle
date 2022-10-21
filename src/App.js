
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch('https://random-word-api.herokuapp.com/word?length=5');
      const json = await data.json() 
      setData(json)
       console.log(json)
    }
  
    // call the function
    fetchData()
   
      // make sure to catch any error
      .catch(console.error);
  }, [])

  return (
    <div className="App">
      <div>Wordle</div>
      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>

      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>

      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>

      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>

      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>

      <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>
      <div>
        <input/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
