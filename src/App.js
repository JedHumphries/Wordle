import { useRef } from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [wordsArray, setWordsArray] = useState([]);

  const inputRef = useRef()

  const handleSubmit = () => {
    setWordsArray([...wordsArray, input])
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
      <div className="row">
        {
          (wordsArray[0]?.split(' ').map(i => i.charAt(0)).toString() === data[0]?.charAt(0))
            ?
            <div className="box" style={{ backgroundColor: "green" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(0))}</div>
            :
            (wordsArray[0]?.split(' ').map(i => i.charAt(0)).toString() === data[0]?.charAt(0)) ///TODO LIST
              ?
              <div className="box" style={{ backgroundColor: "yellow" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(0))}</div>
              :
              <div className="box">{wordsArray[0]?.split(' ').map(i => i.charAt(0))}</div>
        }
        {
          (wordsArray[0]?.split(' ').map(i => i.charAt(1)).toString() === data[0]?.charAt(1))
            ?
            <div className="box" style={{ backgroundColor: "green" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(1))}</div>
            :
            (wordsArray[0]?.split(' ').map(i => i.charAt(1)).toString() === data[0]?.charAt(1)) ///TODO LIST
              ?
              <div className="box" style={{ backgroundColor: "yellow" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(1))}</div>
              :
              <div className="box">{wordsArray[0]?.split(' ').map(i => i.charAt(1))}</div>
        }
        {
          (wordsArray[0]?.split(' ').map(i => i.charAt(2)).toString() === data[0]?.charAt(2))
            ?
            <div className="box" style={{ backgroundColor: "green" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(2))}</div>
            :
            (wordsArray[0]?.split(' ').map(i => i.charAt(2)).toString() === data[0]?.charAt(2)) ///TODO LIST
              ?
              <div className="box" style={{ backgroundColor: "yellow" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(2))}</div>
              :
              <div className="box">{wordsArray[0]?.split(' ').map(i => i.charAt(2))}</div>
        }
        {
          (wordsArray[0]?.split(' ').map(i => i.charAt(3)).toString() === data[0]?.charAt(3))
            ?
            <div className="box" style={{ backgroundColor: "green" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(3))}</div>
            :
            (wordsArray[0]?.split(' ').map(i => i.charAt(3)).toString() === data[0]?.charAt(3)) ///TODO LIST
              ?
              <div className="box" style={{ backgroundColor: "yellow" }}>{wordsArray[0]?.split(' ').map(i => i.charAt(3))}</div>
              :
              <div className="box">{wordsArray[0]?.split(' ').map(i => i.charAt(3))}</div>
        }
      </div>

      <div className="row">
        <div className="box">{wordsArray[1]?.split(' ').map(i => i.charAt(0))}</div>
        <div className="box">{wordsArray[1]?.split(' ').map(i => i.charAt(1))}</div>
        <div className="box">{wordsArray[1]?.split(' ').map(i => i.charAt(2))}</div>
        <div className="box">{wordsArray[1]?.split(' ').map(i => i.charAt(3))}</div>
        <div className="box">{wordsArray[1]?.split(' ').map(i => i.charAt(4))}</div>
      </div>

      <div className="row">
        <div className="box">{wordsArray[2]?.split(' ').map(i => i.charAt(0))}</div>
        <div className="box">{wordsArray[2]?.split(' ').map(i => i.charAt(1))}</div>
        <div className="box">{wordsArray[2]?.split(' ').map(i => i.charAt(2))}</div>
        <div className="box">{wordsArray[2]?.split(' ').map(i => i.charAt(3))}</div>
        <div className="box">{wordsArray[2]?.split(' ').map(i => i.charAt(4))}</div>
      </div>

      <div className="row">
        <div className="box">{wordsArray[3]?.split(' ').map(i => i.charAt(0))}</div>
        <div className="box">{wordsArray[3]?.split(' ').map(i => i.charAt(1))}</div>
        <div className="box">{wordsArray[3]?.split(' ').map(i => i.charAt(2))}</div>
        <div className="box">{wordsArray[3]?.split(' ').map(i => i.charAt(3))}</div>
        <div className="box">{wordsArray[3]?.split(' ').map(i => i.charAt(4))}</div>
      </div>

      <div className="row">
        <div className="box">{wordsArray[4]?.split(' ').map(i => i.charAt(0))}</div>
        <div className="box">{wordsArray[4]?.split(' ').map(i => i.charAt(1))}</div>
        <div className="box">{wordsArray[4]?.split(' ').map(i => i.charAt(2))}</div>
        <div className="box">{wordsArray[4]?.split(' ').map(i => i.charAt(3))}</div>
        <div className="box">{wordsArray[4]?.split(' ').map(i => i.charAt(4))}</div>
      </div>

      <div className="row">
        <div className="box">{wordsArray[5]?.split(' ').map(i => i.charAt(0))}</div>
        <div className="box">{wordsArray[5]?.split(' ').map(i => i.charAt(1))}</div>
        <div className="box">{wordsArray[5]?.split(' ').map(i => i.charAt(2))}</div>
        <div className="box">{wordsArray[5]?.split(' ').map(i => i.charAt(3))}</div>
        <div className="box">{wordsArray[5]?.split(' ').map(i => i.charAt(4))}</div>
      </div>
      <div>
        <input type="text" maxLength="5" ref={inputRef} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
