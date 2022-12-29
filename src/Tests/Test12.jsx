import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";
const Test12 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>Exercise 12 : car dictionary malum metod ishlatib boshating</h2>
      <div className="test-question">
        <h3>
          {`car =	{
              "brand": "Ford",
              "model": "Mustang",
              "year": 1964
          }`}
        </h3>
        <br /> <br />
        {
          <input
            style={{ width: "100px" }}
            name="test12Answer"
            value={state.test12Answer}
            onChange={(e) =>
              dispatch(
                getAnswer({ name: e.target.name, value: e.target.value })
              )
            }
          />
        }
      </div>
    </div>
  );
};

export default Test12;
