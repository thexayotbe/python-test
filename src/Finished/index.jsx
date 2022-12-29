import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { retry } from "../redux/testSlice";
const Finished = () => {
  const state = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="scoreTable">
        <h2>Sizning Natijangiz:</h2>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch(retry())}>Retry</button>
      </div>
    </div>
  );
};

export default Finished;
