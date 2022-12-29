import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test15 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 15 : Kod to' 6 marta aylantirish uchun range funksiyasidan
        foydalaning..
      </h2>
      <div className="test-question">
        <h3>
          for x in{" "}
          {
            <input
              type={"text"}
              name="test15Answer"
              value={state.test15Answer}
              onChange={(e) =>
                dispatch(
                  getAnswer({ name: e.target.name, value: e.target.value })
                )
              }
            />
          }{" "}
          :{" "}
        </h3>{" "}
        <br />
        &nbsp;<h3> print(x)</h3>
      </div>
    </div>
  );
};

export default Test15;
