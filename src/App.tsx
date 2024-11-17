import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="dark:bg-slate-800 bg-slate-100  transition font-Vazir text-gray-600 bg-row">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}
