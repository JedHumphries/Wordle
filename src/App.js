import { useRef } from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [wordsArray, setWordsArray] = useState(["     ","     ","     ","     ","     ","     "]);

  const inputRef = useRef()

  const handleSubmit = (e) => {
    setCount(count+1)
    if (count >= 5) {
      alert("you lost")
      window.location.reload();

    } 
    e.preventDefault()
    setWordsArray([input,...wordsArray.slice(0, 5)])
    inputRef.current.value = ""
    if (input === data[0]) {
      alert("you win!")
      window.location.reload();

    }
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
        <div key={index} className="row">
          {word.split('').map((letter, index) => (
          (letter === data[0]?.charAt(index))
          ?
          <div key={index} className="box" style={{ backgroundColor: "green" }}>{letter}</div>
          :
          (data[0]?.includes(letter)) ///TODO LIST
          ?
          <div key={index} className="box" style={{ backgroundColor: "yellow" }}>{letter}</div>
          :
          <div key={index} className="box">{letter}</div>
          ))}
        </div>
          ))
        }
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" required minLength="5" maxLength="5" ref={inputRef} onChange={handleInput} />
        <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
