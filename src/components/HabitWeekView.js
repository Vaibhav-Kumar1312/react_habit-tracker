// import { useState } from "react";
import { useDispatch } from "react-redux";
import { habitActions } from "../store/index.js";

import classes from "./HabitWeekView.module.css";

export default function WeekView({ habit }) {
  const dispatch = useDispatch();
  function dateFormatter(timestamp) {
    // console.log(timestamp);
    const date = new Date(timestamp);
    const dd = date.getDate();
    // console.log(dd);
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const formattedDate = `${dd < 10 ? "0" + dd : dd}-${
      mm < 10 ? "0" + mm : mm
    }-${yyyy}`;
    return formattedDate;
  }

  function toDisplayStatusIcon(isDone) {
    let icon = "";
    if (isDone === true) {
      icon = <i className="bi bi-check-lg"></i>;
    } else if (isDone === false) {
      icon = <i style={{ color: "red" }} className="bi bi-x-lg"></i>;
    }
    return icon;
  }

  function changeStatus(e, id, Activityidx) {
    let statusValue = null;
    console.log(e.target.value);
    if (e.target.value === "done") {
      statusValue = true;
    } else if (e.target.value === "notDone") {
      statusValue = false;
    }
    dispatch(
      habitActions.changeActivity({
        value: statusValue,
        id: id,
        idx: Activityidx,
      })
    );
  }
  return (
    <div className={classes.weekViewContainer}>
      <p className={classes.habitTitle}>{habit.title}</p>
      <p className={classes.habitDate}>
        Created On :- {dateFormatter(habit.createdAt)}
      </p>
      <ul className={classes.statusContainer}>
        {habit.activity.map((item, i) => {
          return (
            <li key={i}>
              <div className={classes.weekDay}>
                <p>{item.dayOfWeek}</p>
                <span className={classes.habitDate}>
                  {dateFormatter(item.timeStamp)}
                </span>
              </div>
              {item.timeStamp <= habit.createdAt && (
                <div className={classes.radioContainer}>
                  <label>
                    <input
                      onChange={(e) => changeStatus(e, habit.id, i)}
                      type="radio"
                      name={item.dayOfWeek}
                      value="done"
                      checked={item.isDone === true}
                    />
                    Done
                  </label>
                  <label>
                    <input
                      onChange={(e) => changeStatus(e, habit.id, i)}
                      type="radio"
                      name={item.dayOfWeek}
                      value="notDone"
                      checked={item.isDone === false}
                    />
                    Un-Done
                  </label>
                  <label>
                    <input
                      onChange={(e) => changeStatus(e, habit.id, i)}
                      type="radio"
                      name={item.dayOfWeek}
                      value="null"
                      checked={item.isDone === null}
                    />
                    Skipped
                  </label>
                </div>
              )}
              <div className={classes.weekdayContainer}>
                {/* <p>{item.dayOfWeek}</p>
                <span className={classes.habitDate}>
                  {dateFormatter(item.timeStamp)}
                </span> */}
                <div className={classes.weekStatus}>
                  <span className={classes.statusIcon}>
                    {/* <i class="bi bi-check-lg"></i> */}
                    {toDisplayStatusIcon(item.isDone)}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
