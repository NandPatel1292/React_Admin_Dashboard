import React from "react";
import css from "./Dashboard.module.css";
import { cardData, groupNumber } from "../../data";
import Statistics from "../../components/statistics/Statistics";
import Orders from "../../components/orders/Orders";

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
          <div className={css.card}>
            {cardData.map((val, index) => (
              <div className={css.cards} key={index}>
                <div className={css.cardHead}>
                  <span>{val.title}</span>
                  <span>+{val.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(val.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      <Orders />
    </div>
  );
};

export default Dashboard;
