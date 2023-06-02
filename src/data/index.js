export const cardData = [
  {
    title: "Revanue",
    change: 24,
    amount: 500,
  },
  {
    title: "Order",
    change: 20,
    amount: 1000,
  },
  {
    title: "Expence",
    change: 15,
    amount: 100,
  },
  {
    title: "Profit",
    change: "12",
    amount: 50,
  },
];

export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

export const ordersData = [
  {
    name: "Nand",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Patel",
    type: "Illustration",
    items: 12,
    change: 72,
  },
  {
    name: "Chagan",
    type: "Illustration",
    items: 7,
    change: 70,
  },
  {
    name: "Magan",
    type: "Illustration",
    items: 21,
    change: 15,
  },
];
