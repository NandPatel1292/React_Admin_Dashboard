import React from "react";
import css from "./Layout.module.css";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={css.container}>
      {/* <div>Sidebar</div> */}
      <Sidebar />

      {/* making the dashboard as the default route */}
      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.gradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Serch" />
          </div>

          <div className={css.profile}>
            <img src="./nand2.png" alt="profile imgae" />
            <div className={css.detail}>
              <span>Nand Patel</span>
              <span>nandpatel1292@gmail.com</span>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
