import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test14 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 14 : Loopda, i 3 bo'lsa, to'g'ridan-to'g'ri keyingi
        iteratsiyaga o'ting.
      </h2>
      <div className="test-question">
        <h3>i = 0</h3>
        <br />
        <h3>{`while i < 6:`}</h3> <br />
        &nbsp;&nbsp; <h3>{"      i += 1"}</h3> <br />
        &nbsp;&nbsp; <h3>{"   if i == 3:"}</h3>
        <br />
        &nbsp;&nbsp;
        <input
          type="text"
          style={{ width: "50px" }}
          name="test14Answer"
          value={state.test14Answer}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />{" "}
        <br />
        <h3>print(i)</h3>
      </div>
    </div>
  );
};

export default Test14;
