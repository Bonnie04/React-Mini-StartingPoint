import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Table from './Table';

const App = () => {
  const [color, setColor] = useState('red');
  const [grid, setGrid] = useState(
    Array(5).fill().map(() => Array(5).fill('white'))
  );

  const handleCellClick = (rowIndex, colIndex) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((cellColor, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? color : cellColor
      )
    );
    setGrid(newGrid);
  };

  const addRow = () => {
    const colCount = grid.length > 0 ? grid[0].length : 5;
    setGrid([...grid, Array(colCount).fill('white')]);
  };

  const addColumn = () => {
    setGrid(grid.map(row => [...row, 'white']));
  };

  return (
    <div className="app">
      <h1 className="title">React Grid Coloring</h1>
      
      <div className="controls">
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
      </div>
      
      <Table grid={grid} handleCellClick={handleCellClick} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);