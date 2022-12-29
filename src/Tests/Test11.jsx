import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test11 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 11 : fruits set ga (more_fruits) qo'shish uchun to'g'ri usuldan
        foydalaning.
      </h2>
      <div className="test-question">
        <h3>fruits = ("apple", "banana", "cherry")</h3> <br />
        <br />
        <h3>more_fruits = ["orange", "mango", "grapes"]</h3> <br /> <br />
        {
          <input
            style={{ width: "200px" }}
            name="test11Answer"
            value={state.test11Answer}
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

export default Test11;
