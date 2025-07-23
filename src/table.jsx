import React from 'react';
import TableRow from './TableRow';

const Table = ({ grid, handleCellClick }) => {
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            handleCellClick={handleCellClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;