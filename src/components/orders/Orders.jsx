import React from "react";
import css from "./Orders.module.css";
import { groupNumber, ordersData } from "../../data";
import OrderPieChart from "../chart/OrderPieChart";
const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src="./logo.png" alt="logo" />
        <span>Order Today</span>
      </div>
      <div className={`${css.stat} grey-container`}>
        <span>Amount</span>
        <span>$ {groupNumber(45000)}</span>
      </div>
      <div className={css.order}>
        {ordersData.map((val, index) => (
          <div className={css.ord} key={index}>
            <div>
              <span>{val.name}</span>
              <span>$ {val.change}</span>
            </div>
            <div>
              <span>{val.type}</span>
              <span>Items : {val.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={css.OrderChart}>
        <span>Split By Orders</span>
        <OrderPieChart />
      </div>
    </div>
  );
};

export default Orders;
