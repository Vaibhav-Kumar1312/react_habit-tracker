import { useParams } from "react-router-dom";
import WeekView from "../components/HabitWeekView.js";
import { useSelector } from "react-redux";

export default function HabitTrackRecord() {
  const { habitId } = useParams();
  const allHabits = useSelector((state) => state.habits.goodHabits);
  // console.log(allHabits);
  let habit;
  allHabits.forEach((item) => {
    if (Number(item.createdAt) === Number(habitId)) {
      habit = item;
      // console.log(item);
      return;
    }
  });
  // console.log(habit);
  return <WeekView habit={habit} />;
}

// export function loader({request,params}){
//   const id = params.habitId
//   return id

// }
