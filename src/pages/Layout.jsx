import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
        <NavBar />
        <Sidebar />
        <Outlet />
    </>
  )
}
export default Layout