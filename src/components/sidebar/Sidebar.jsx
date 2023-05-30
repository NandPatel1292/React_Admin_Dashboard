import React from "react";
import css from "./Sidebar.module.css";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
// import { MdSpaceDeshbord } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./circle.png" alt="logo image" className={css.logo} />
      <div className={css.menu}>
        <NavLink to="dashboard" className={css.item} title="Deshbord">
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink to="calender" className={css.item} title="Calender">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="board" className={css.item} title="Board">
          <FaTasks size={30} />
        </NavLink>

        <NavLink to="users" className={css.item} title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;