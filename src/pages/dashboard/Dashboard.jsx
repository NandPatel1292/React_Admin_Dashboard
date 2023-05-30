import React from "react";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.chart}>
        <div className={`${css.DashHead} theme-container`}>
          <div className={css.head}>
            <span>dashboard</span>
            <div className={css.selectButton}>
              <select name="" id="">
                <option value="">1 Week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>
          <div className={css.card}>Cards</div>
        </div>
      </div>

      <div className={css.order}>Orders</div>
    </div>
  );
};

export default Dashboard;
