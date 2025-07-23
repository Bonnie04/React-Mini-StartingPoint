import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ row, rowIndex, handleCellClick }) => {
  return (
    <tr>
      {row.map((cellColor, colIndex) => (
        <TableCell
          key={colIndex}
          color={cellColor}
          onClick={() => handleCellClick(rowIndex, colIndex)}
        />
      ))}
    </tr>
  );
};

export default TableRow;