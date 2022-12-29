import React from "react";
import "./style/style.css";
import { getAnswer } from "../redux/testSlice";
import { useDispatch, useSelector } from "react-redux";
const Test1 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);
  return (
    <div className="test">
      <h2>
        Exercise 1 :"Hello World" ni chiqarish uchun kodning yetishmayotgan
        qismini quyida kiriting.
      </h2>
      <div className="test-question">
        <input
          type="text"
          name="test1Answer"
          value={state.test1Answer}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />
        <h3>("Hello World")</h3>
      </div>
    </div>
  );
};

export default Test1;
