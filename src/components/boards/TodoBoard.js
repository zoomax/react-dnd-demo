import React from "react";
import Board from "../layout/Board";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";
import Types from "../../utils/types";
import { addTodo } from "../../store/actions/todo.actions";
import { editDone, removeDone } from "../../store/actions/done.actions";
import Card from "../layout/Card";

function TodoBoard({ todo, addTodo, removeDone}) {
  const [{ isOver }, drop] = useDrop({
    accept: Types.ITEM,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => {
      removeDone(item);
      addTodo(item);
    },
  });
  return (
    <Board dropRef={drop} className={`board ${isOver ? "fade" : ""}`}>
      {todo.map(function (task) {
        return <Card item={task} key={task._id}></Card>;
      })}
    </Board>
  );
}
const mapStateToProps = ({ todo }) => {
  return {
    todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    removeDone: (payload) => dispatch(removeDone(payload)),
    editDone: (payload) => dispatch(editDone(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard);
