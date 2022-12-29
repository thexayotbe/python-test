import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test6 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>Exercise 6 : txt qiymatini lower case aylantiring.</h2>
      <div className="test-question">
        <h3>txt = "Hello World"</h3> <br />
        <br />
        <h3>
          txt ={" "}
          {
            <input
              style={{ width: "60px" }}
              name="test6Answer"
              value={state.test6Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }
          (x)
        </h3>
      </div>
    </div>
  );
};

export default Test6;
