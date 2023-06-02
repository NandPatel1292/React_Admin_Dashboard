import React from "react";
import css from "./Statistics.module.css";
import { BsArrowUpShort } from "react-icons/bs";
import { groupNumber } from "../../data";
import StatisticsChart from "../chart/StatisticsChart";
const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.title}>Overview Statistics</div>
      <div className={`${css.cards} grey-container`}>
        <div>
          <div className={css.ArrowIcon}>
            <BsArrowUpShort />
          </div>
          <div className={css.card}>
            <span>Top item this month</span>
            <span>Office comps</span>
          </div>
        </div>
        <div className={css.card}>
          <span>Items</span>
          <span>$ {groupNumber(5000)}</span>
        </div>

        <div className={css.card}>
          <span>Profit</span>
          <span>$ {groupNumber(210000)}</span>
        </div>

        <div className={css.card}>
          <span>Daily Average</span>
          <span>$ {groupNumber(5000)}</span>
        </div>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;
