import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { habitActions } from "../store/index.js";
import classes from "./AllHabits.module.css";
import { NavLink } from "react-router-dom";

export default function CreateAndAllHabits() {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  const allHabits = useSelector((state) => state.habits.goodHabits);

  function dateFormatter(timestamp) {
    const date = new Date(timestamp);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const formattedDate = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
      dd < 10 ? "0" + dd : dd
    }`;
    return formattedDate;
  }

  function countHabitStatus(weekLog) {
    let count = 0;
    weekLog.forEach((item) => {
      if (item.isDone) {
        count++;
      }
    });
    return count;
  }

  function createHabit() {
    dispatch(habitActions.addHabit(inp));
  }

  return (
    <div className={classes.habitsContainer}>
      <h1>Keep Track of your Good Habits</h1>
      <div className={classes.inputContainer}>
        <input
          type="text"
          placeholder="Add habit to Track..."
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button className={classes.btnAdd} onClick={createHabit}>
          Add
        </button>
      </div>
      <ul className={classes.listContainer}>
        {allHabits.map((item, i) => {
          return (
            <NavLink
              to={`/${item.createdAt}`}
              className={classes.listItemLink}
              key={i}
            >
              <li className={classes.listItem}>
                <p>{item.title}</p>
                <span>Created on : {dateFormatter(item.createdAt)}</span>
                <span>
                  Status:: {countHabitStatus(item.activity)}/
                  {item.activity.length}
                </span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
