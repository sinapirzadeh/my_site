import { Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import AdminNavLinks from "./AdminNavLinks";
import Header from "../../components/main/header/Header";

export default function AdminPanel() {
  return (
    <div>
      <Header />
      <Container>
        <div className="my-5 bg-slate-300 dark:bg-slate-500 rounded-lg border-2 dark:text-gray-300 ">
          <AdminNavLinks />
        </div>
        <div className="border-2 bg-slate-300 dark:bg-slate-500 rounded-lg p-5 dark:text-white  h-[550px] overflow-y-scroll">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
