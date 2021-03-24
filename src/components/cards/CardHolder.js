import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { editProduction } from "../../store/actions/production.actions";
import RoundCard from "../layout/RoundCard";
export const CardHolder = ({ type, content, prod, editProduction }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type,
    item: {
      value: prod[content],
      content,
      type,
    },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });
  const [{ isOver }, dropRef] = useDrop({
    accept: type,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => {
      if (item.content !== content) {
        editProduction({
          [item.content]:
            prod[item.content] > 0
              ? prod[item.content] - item.value
              : prod[item.content],
          [content]:
            prod[item.content] > 0 ? prod[content] + item.value : prod[content],
        });
      }
    },
  });
  return (
    <div
      ref={dropRef}
      className={`round-card-holder align-vh ${isOver ? "is-over" : ""}`}
    >
      <div
        className={`round-card-holder align-vh ${
          isDragging ? "is-dragging" : ""
        }`}
        ref={dragRef}
      >
        <RoundCard value={prod[content]} content={content} type={type} />
      </div>
    </div>
  );
};

// CardHolder.propTypes = {
//   props: PropTypes,
// };

const mapStateToProps = ({ prod }) => {
  return {
    prod,
  };
};

const mapDispatchToProps = (dispatch) => ({
  editProduction: (paylaod) => dispatch(editProduction(paylaod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);
