import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test8 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 8 : 5 ning 10 ga teng emasligini tekshirish uchun to'g'ri
        taqqoslash operatoridan foydalaning.
      </h2>
      <div className="test-question">
        <h3>
          if 5{" "}
          {
            <input
              style={{ width: "30px" }}
              name="test8Answer"
              value={state.test8Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }{" "}
          10:
        </h3>{" "}
        <br />
        <br />
        <h3> print("5 and 10 is not equal")</h3>
      </div>
    </div>
  );
};

export default Test8;
