import React from "react";
import { connect } from "react-redux";
import Target from "./Target";

const mapStateToProps = state => {
  return { targets: state.targets };
};

const Targets = ({ targets, dispatch }) => {
  return (
    <div>
      {targets.map(el => (
        <Target
          key={el.id}
          id={el.id}
          x={el.x}
          y={el.y}
          value={el.value}
          onClick={() => dispatch({ type: "CLICK_TILE", id: el.id })}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Targets);
