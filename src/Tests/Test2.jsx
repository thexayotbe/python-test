import React from "react";
import "./style/style.css";
import { getAnswer } from "../redux/testSlice";
import { useDispatch, useSelector } from "react-redux";
const Test2 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>Exercise 2 : Ko'p qatorli ko'p qatorli comment yarating:</h2>
      <div className="test-question">
        <input
          type="text"
          style={{ width: "30px" }}
          name="test2Answer1"
          value={state.test2Answer1}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />{" "}
        <br /> <br />
        <h3>
          Bu comment ichida yozilgan <br /> faqat bir qatordan <br /> koproq
        </h3>{" "}
        <br />
        <br />
        <input
          type="text"
          style={{ width: "30px" }}
          value={state.test2Answer2}
          name="test2Answer2"
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default Test2;
