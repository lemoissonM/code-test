import React, { useEffect } from 'react';
import './App.css';
import { generateRandomColor  } from './helper';

function App() {
  const [boxes, setBoxes] = React.useState([]);
  const generateBox = () => {
    const boxList = [];
    // Generate 9 boxes with random background colors
    for (let i = 0; i < 9; i++) {
      boxList.push(
        <div className={`grid-item item${i + 1}`} 
          style={{backgroundColor: generateRandomColor()}} 
          onClick = {() => generateBox()} key={i} >
          {i + 1}
        </div>
      )
    }
    setBoxes(boxList);
    return boxList
  }
  // initial render of boxes
  useEffect(() => {
    generateBox();
  }, [])

  return (
    <div className="grid-container">
      {boxes}
    </div>
  );
}

export default App;
