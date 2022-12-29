import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test13 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 13 : Agar a b ga, c esa d ga teng bo'lsa, "Hello" ni print
        qiling{" "}
      </h2>
      <div className="test-question">
        <h3>
          if a == b{" "}
          {
            <input
              style={{ width: "30px" }}
              name="test13Answer"
              value={state.test13Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }{" "}
          c == d:
        </h3>
        <br /> <br />
        <h3>print("Hello")</h3>
      </div>
    </div>
  );
};

export default Test13;
