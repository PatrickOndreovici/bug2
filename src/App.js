import React, { useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [grid, setGrid] = useState({
    table: [["", "", ""], ["", "", ""], ["", "", ""]]
  })
  const pressCell = (row, col) => {
    let newGrid = grid;
    newGrid.table[row][col] = "X";
    setGrid(newGrid)
  }
  const generateCells = () => {
    let cells = [];
    for (let row = 0; row < 3; ++row){
      for (let col = 0; col < 3; ++col){
        const inlineStyle = {
          gridRowStart: row + 1,
          gridRowEnd: row + 2,
          gridColumnStart: col + 1,
          gridColumnEnd: col + 2
        }
        cells.push(<div className = "cell" style = {inlineStyle} onClick = {() => pressCell(row, col)}>{grid.table[row][col]}</div>)
      }
    }
    return cells;
  }
  return (
    <div className="App">
      <div className = "grid">
        {generateCells()}
      </div>
    </div>
  );
}

export default App;
