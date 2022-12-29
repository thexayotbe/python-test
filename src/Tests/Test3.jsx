import React from "react";
import "./style/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../redux/testSlice";

const Test3 = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test.givenAnswers);

  return (
    <div className="test">
      <h2>
        Exercise 3 : z deb nomlangan o'zgaruvchi yarating, unga x + y belgilang
        va natijani ko'rsating.
      </h2>
      <div className="test-question">
        <h3>
          x = 5 <br /> y = 10
        </h3>{" "}
        <br />
        <input
          type="text"
          style={{ width: "20px" }}
          name="test3Answer1"
          value={state.test3Answer1}
          onChange={(e) =>
            dispatch(getAnswer({ name: e.target.name, value: e.target.value }))
          }
        />
        <h3>= x + y </h3> <br />
        <br />
        <h3>
          print(
          {
            <input
              style={{ width: "20px" }}
              name="test3Answer2"
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

export default Test3;
