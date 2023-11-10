import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}
