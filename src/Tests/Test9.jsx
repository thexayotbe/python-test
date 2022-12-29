import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test9 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 9 : Roʻyxatning uchinchi, toʻrtinchi va beshinchi elementlarini
        print qiling uchun bir qator indekslardan foydalanib.
      </h2>
      <div className="test-question">
        <h3>
          fruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon",
          "mango"]
        </h3>{" "}
        <br />
        <br />
        <h3>
          {" "}
          print(fruits[
          {
            <input
              style={{ width: "40px" }}
              name="test9Answer"
              value={state.test9Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }
          ])
        </h3>
      </div>
    </div>
  );
};

export default Test9;
