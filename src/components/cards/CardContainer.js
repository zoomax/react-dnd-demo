import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import  CardHolder from "./CardHolder";

export const CardContainer = ({ type, content, text }) => {
  console.log(type ," " , content , " " , text) ; 
  return (
    <div className="card-holder">
      <div className="info-text">{text}</div>
      <div className="round-card-container">
        <CardHolder type={type} content={content} />
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
