import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test10 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 10 : Tupledagi oxirgi elementni chop etish uchun salbiy
        indekslashdan foydalaning..
      </h2>
      <div className="test-question">
        <h3>fruits = ("apple", "banana", "cherry") </h3> <br />
        <br />
        <h3>
          {" "}
          print(
          {
            <input
              style={{ width: "70px" }}
              name="test10Answer"
              value={state.test10Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }
          )
        </h3>
      </div>
    </div>
  );
};

export default Test10;
