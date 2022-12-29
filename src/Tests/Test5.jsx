import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test5 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 5 : X-ni integer songa aylantirish uchun to'g'ri sintaksisni
        kiriting.
      </h2>
      <div className="test-question">
        <h3>x = 5.5</h3> <br />
        <br />
        <h3>
          x ={" "}
          {
            <input
              style={{ width: "60px" }}
              name="test5Answer"
              value={state.test5Answer}
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

export default Test5;
