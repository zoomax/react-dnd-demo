import React from "react";
import { useDrag } from "react-dnd";
import Types from "../../utils/types";

function Card({ item }) {
  const [{ isDragging }, drag] = useDrag({
    type: Types.ITEM,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      className={`card ${item.status} ${isDragging ? "fade" : ""} `}
    >
      <p>Id: {item._id}</p>
      <p>Todo: {item.todo}</p>
    </div>
  );
}
export default Card;
