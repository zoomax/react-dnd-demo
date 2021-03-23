import React from "react";
import Board from "../layout/Board";
import { connect } from "react-redux";
import { addDone } from "../../store/actions/done.actions";
import { editTodo, removeTodo } from "../../store/actions/todo.actions";
import { useDrop } from "react-dnd";
import Types from "../../utils/types";
import Card from "../layout/Card";

function DoneBoard({ done, addDone, removeTodo }) {
  const [{ isOver }, drop] = useDrop({
    accept: Types.ITEM,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => {
      removeTodo(item);
      addDone(item);
    },
  });
  return (
    <Board dropRef={drop} className={`board ${isOver ? "fade" : ""}`}>
      {done.map(function (task) {
        return (
         <Card item={task} key={task._id}></Card>
        );
      })}
    </Board>
  );
}

const mapStateToProps = (state) => {
  return {
    done: state.done,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addDone: (payload) => dispatch(addDone(payload)),
    removeTodo: (payload) => dispatch(removeTodo(payload)),
    editTodo: (payload) => dispatch(editTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneBoard);
