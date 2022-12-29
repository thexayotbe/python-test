import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { checkAnswer } from "./redux/testSlice";
import Test1 from "./Tests/Test1";
import Test2 from "./Tests/Test2";
import Test3 from "./Tests/Test3";
import Test4 from "./Tests/Test4";
import Test5 from "./Tests/Test5";
import Test6 from "./Tests/Test6";
import Test7 from "./Tests/Test7";
import Test8 from "./Tests/Test8";
import Test9 from "./Tests/Test9";
import Test10 from "./Tests/Test10";
import Test11 from "./Tests/Test11";
import Test12 from "./Tests/Test12";
import Test13 from "./Tests/Test13";
import Test14 from "./Tests/Test14";
import Test15 from "./Tests/Test15";
import Finished from "./Finished";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.test);
  return (
    <div className="wrapper">
      <div className="test-section">
        <Test1 />
        <Test2 />
        <Test3 />
        <Test4 />
        <Test5 />
        <Test6 />
        <Test7 />
        <Test8 />
        <Test9 />
        <Test10 />
        <Test11 />
        <Test12 />
        <Test13 />
        <Test14 />
        <Test15 />
        <button className="checkBtn" onClick={() => dispatch(checkAnswer())}>
          Check{" "}
        </button>
        {state.finished ? <Finished /> : ""}
      </div>
    </div>
  );
}

export default App;
