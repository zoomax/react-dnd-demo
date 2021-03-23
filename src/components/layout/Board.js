import React from "react";

function Board({ children, dropRef, className }) {
  return (
    <div ref={dropRef} className={className}>
      {children}
    </div>
  );
}

export default Board;
