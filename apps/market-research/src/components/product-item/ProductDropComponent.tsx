import React from 'react';

const DropTarget = ({ onDrop, children }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData('text/plain');
    onDrop(droppedItemId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #aaa',
        minHeight: '100px',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      {children}
    </div>
  );
};

export default DropTarget;
