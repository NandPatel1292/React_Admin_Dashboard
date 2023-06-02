import { create } from "zustand";
import { INITIAL_EVENTS } from "../data";

const useCalendar = create((set) => ({
  currentEvent: INITIAL_EVENTS,
  setCurrentEvent: (events) => set({ currentEvent: events }),
}));

export default useCalendar;
