import React from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/Calendar";
import { createEventId } from "../../data";

const Calendar = () => {
  const { currentEvent } = useCalendar();
  const handleEvent = async (eve) => {
    await Promise.resolve(currentEvent(eve));
  };
  const handleDateSelect = (info) => {
    let title = prompt("plese enter the title for the event");
    let cdapi = info.view.calendar;
    cdapi.unselect();

    if (title) {
      cdapi.addEvent({
        id: createEventId,
        title,
        start: info.start,
        end: info.end,
        allDay: info.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (confirm("Are you want to delete this event ?")) {
      clickInfo.event.remove();
    }
  };

  return (
    <div className="calendar-container">
      <div className="">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next, today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="dayGridMonth"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvent}
          eventsSet={handleEvent}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
