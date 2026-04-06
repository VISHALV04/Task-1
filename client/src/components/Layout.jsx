import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="app-shell">
      {/* ── Top Bar ── */}
      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-logo">⚡</span>
          <h1 className="topbar-title">Task Flow</h1>
        </div>
      </header>

      {/* ── Body: Sidebar + Main ── */}
      <div className="body-wrapper">
        <Sidebar />

        <main className="main-content">
          {/* React Router renders the matched child route here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
