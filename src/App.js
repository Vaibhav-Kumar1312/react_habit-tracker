import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Habits from "./pages/Habits.js";
import HabitTrackRecord from "./pages/HabitTrackRecord.js";
import RootLayout from "./pages/Root.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Habits /> },
      {
        path: ":habitId",
        element: <HabitTrackRecord />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
