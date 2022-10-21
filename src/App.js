import { useRef } from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [wordsArray, setWordsArray] = useState(["     ","     ","     ","     ","     ",]);

  const inputRef = useRef()

  const handleSubmit = () => {
    setWordsArray([input,...wordsArray.slice(0, 4)])
    inputRef.current.value = ""
    console.log(wordsArray[0]?.split(' ').map(i => i.charAt(0)).toString(), data[0]?.charAt(0))
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

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
      {wordsArray.map((word, index) => (
        <div className="row">
          {word.split('').map((letter, index) => (
          (letter === data[0]?.charAt(index))
          ?
          <div className="box" style={{ backgroundColor: "green" }}>{letter}</div>
          :
          (letter === data[0]?.charAt(index)) ///TODO LIST
          ?
          <div className="box" style={{ backgroundColor: "yellow" }}>{letter}</div>
          :
          <div className="box">{letter}</div>
          ))}
        </div>
          ))
        }
      <div>
        <input type="text" maxLength="5" ref={inputRef} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
