import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navbar.js";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
