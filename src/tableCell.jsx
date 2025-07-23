import React from 'react';

const TableCell = ({ color, onClick }) => {
  return (
    <td
      onClick={onClick}
      style={{
        width: '40px',
        height: '40px',
        border: '1px solid black',
        backgroundColor: color,
        cursor: 'pointer'
      }}
    ></td>
  );
};

export default TableCell;