import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test7 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 7 : Quyidagi misol mantiqiy qiymatni qaytaradi, qanaday boolean
        qiyamat qaytaradi?.
      </h2>
      <div className="test-question">
        <h3>print(bool(0))</h3> <br />
        <br />
        <input
          style={{ width: "60px" }}
          name="test7Answer"
          value={state.test7Answer}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />{" "}
      </div>
    </div>
  );
};

export default Test7;
