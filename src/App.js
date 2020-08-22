import React from 'react'

function App() {
  const [ value, setValue ] = React.useState("")
  const [ valueTxt, setValueTxt ] = React.useState("")
  const [ zerosCount, setZerosCount ] = React.useState(0)

  const findResult = () => {
    if (value === '' || value === undefined || isNaN(value)) {
      setValueTxt("please enter a value")
      return false;
    }
    let data = value;
    let binaryArray = [];
    let zerosCountArray = [];
    let zeroCount = 0;
    while(data !== 0) {
      binaryArray.unshift(data % 2)
      data = parseInt(data/2)
    }
    setValueTxt("Binary Value: " + binaryArray.join(""));
    if (binaryArray.indexOf(0) === -1) {
      setZerosCount(0)
    }
    binaryArray.forEach(bit => {
      if (bit === 0) {
        zeroCount++;
      } else if (zeroCount !== 0) {
        zerosCountArray.push(zeroCount)
        zeroCount = 0;
      }
    });
    setZerosCount(zerosCountArray.length === 0 ? 0 : zerosCountArray.reduce((a, b) => Math.max(a, b)))
  }

  return (<>
    <div className="App">
      <input type="number" value={value} onChange={(e) => {
        setValue(e.target.value)
      }} />
    </div>
    <button onClick={findResult}>
      Show Results
    </button>
    {valueTxt ? <p> {valueTxt} </p> : null }
    {valueTxt ? <p> {"Maximum no of Consecutive zeros: " + zerosCount} </p> : null }
  </>);
}

export default App
