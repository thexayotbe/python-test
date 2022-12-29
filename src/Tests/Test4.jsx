import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test4 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 4 : Quyidagi kod misoli x ning data type ni chiqaradi , bu
        qanday data type bo'ladi?
      </h2>
      <div className="test-question">
        <h3>x = {`{ name: "John", age: 36 }`}</h3> <br />
        <h3>print(type(x))</h3> <br />
        <br />
        <input
          style={{ width: "60px" }}
          name="test4Answer"
          value={state.test4answer}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default Test4;
