import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "testSlice",
  initialState: {
    answers: {
      test1Answer: "print",
      test2Answer1: `\"\"\"`,
      test2Answer2: `\"\"\"`,
      test3Answer1: "z",
      test3Answer2: "z",
      test4Answer: "dict",
      test5Answer: "int",
      test6Answer: "txt.lower",
      test7Answer: "False",
      test8Answer: "!=",
      test9Answer: "2:5",
      test10Answer: "fruits[-1]",
      test11Answer: "fruits.update(more_fruits)",
      test12Answer: "car.clear()",
      test13Answer: "and",
      test14Answer: "continue",
      test15Answer: "range(6)",
    },
    givenAnswers: {
      test1Answer: "",
      test2Answer1: "",
      test2Answer2: "",
      test3Answer1: "",
      test3Answer2: "",
      test4Answer: "",
      test5Answer: "",
      test6Answer: "",
      test7Answer: "",
      test8Answer: "",
      test9Answer: "",
      test10Answer: "",
      test11Answer: "",
      test12Answer: "",
      test13Answer: "",
      test14Answer: "",
      test15Answer: "",
    },
    count: 0,
    finished: false,
  },
  reducers: {
    checkAnswer(state, action) {
      const answers = Object.values(state.answers);
      const givenAnswers = Object.values(state.givenAnswers);
      answers.map((value, index) => {
        if (value === givenAnswers[index]) {
          if (index === 1 || index === 2 || index === 3 || index === 4) {
            state.count = state.count + 0.5;
          } else {
            state.count = state.count + 1;
          }
        }
      });
      state.finished = true;
      console.log(state.count);
    },
    getAnswer(state, action) {
      state.givenAnswers = {
        ...state.givenAnswers,
        [action.payload.name]: action.payload.value,
      };
      console.log(state.givenAnswers);
    },
    retry(state, action) {
      state.finished = false;
      state.givenAnswers = {
        test1Answer: "",
        test2Answer1: "",
        test2Answer2: "",
        test3Answer1: "",
        test3Answer2: "",
        test4Answer: "",
        test5Answer: "",
        test6Answer: "",
        test7Answer: "",
        test8Answer: "",
        test9Answer: "",
        test10Answer: "",
        test11Answer: "",
        test12Answer: "",
        test13Answer: "",
        test14Answer: "",
        test15Answer: "",
      };
    },
  },
});

export const { checkAnswer, getAnswer, retry } = testSlice.actions;
export default testSlice.reducer;
