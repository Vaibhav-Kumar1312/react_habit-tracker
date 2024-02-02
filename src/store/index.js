import { createSlice, configureStore } from "@reduxjs/toolkit";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const habitSlice = createSlice({
  name: "habits",
  initialState: {
    goodHabits: [],
  },
  reducers: {
    addHabit(state, action) {
      const today = new Date();
      const s = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      const sunday = s.getTime() - 24 * 60 * 60 * 1000 * s.getDay();
      let weekLog = [];
      for (let i = 0; i <= 6; i++) {
        const nxtTimeStamp = sunday + 24 * 60 * 60 * 1000 * i;
        weekLog.push({
          timeStamp: nxtTimeStamp,
          dayOfWeek: daysOfWeek[i],
          isDone: "",
        });
      }
      let newHabit = {
        id: today.getTime(),
        createdAt: s.getTime(),
        title: action.payload,
        activity: weekLog,
      };
      state.goodHabits.push(newHabit);
    },

    changeActivity(state, action) {
      const slectedHabit = state.goodHabits.filter(
        (item) => Number(item.id) === Number(action.payload.id)
      );
      slectedHabit[0].activity[action.payload.idx].isDone =
        action.payload.value;
    },
  },
});

const store = configureStore({
  reducer: { habits: habitSlice.reducer },
});

export const habitActions = habitSlice.actions;

export default store;
