import moment from "moment/moment";

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

let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Lunch Pary",
    start: todayStr + "T09:00:00",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + "T20:00:00",
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + "T09:00:00",
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + "T13:00:00",
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + "T13:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
