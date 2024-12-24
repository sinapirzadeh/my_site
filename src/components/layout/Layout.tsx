import { Outlet } from "react-router-dom";
import Footer from "../main/footer/Footer";
import Header from "../main/header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
