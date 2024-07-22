import MainHeader from "../components/Posts/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
}

export default RootLayout;
