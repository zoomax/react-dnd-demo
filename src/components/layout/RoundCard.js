import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDrag } from "react-dnd";
export const RoundCard = ({ value, type, content }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type,
    item: {
      value: 1,
      content,
      type,
    },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });
  return (
    <div ref={dragRef} className={`round-card align-vh ${isDragging ? "is-dragging" : ""}`}>
      {value}
    </div>
  );
};

// RoundCard.propTypes = {
//   props: PropTypes,
// };

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoundCard);
