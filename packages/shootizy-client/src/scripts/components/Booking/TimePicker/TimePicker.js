import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";
//import Datepicker from "scripts/components/_common/Datepicker";
//import Calendar from "react-calendar";
import animateScrollTo from "animated-scroll-to";
import Calendar from "react-calendar/dist/entry.nostyle";

import DropdownPopover from "scripts/components/_common/DropdownPopover";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import { getDateWithoutTimeZone, formatDateStd, areEqual } from "scripts/utils/DateUtils";

import "./TimePicker.scss";

const dateMin = new Date();
// Only reservable from the next day
dateMin.setDate(dateMin.getDate() + 1);

const TimePicker = ({ className, onChange, isOpen }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const dateStr = date && getDateWithoutTimeZone(date);
  const { contents: timetable, loading } = useRemoteContents(
    `/api/booking/availability?date=${dateStr}`,
    {
      initialState: [],
      autoLoad: !!date,
      // real time reservation, no cache
      defaultUseCache: false,
    }
  );

  const handleSelectDate = newDate => {
    if (!areEqual(date, newDate)) {
      setDate(newDate);
      // Reset time if date changed
      setTime(null);
      // Call parent
      onChange(null);
      scrollIntoTimePicker();
    }
  };
  const handleSelectTime = timeSlot => {
    setTime(timeSlot);
    // Call parent
    const { startTime, endTime } = timeSlot;
    onChange(date && { date, startTime, endTime });
  };

  const tileContent = ({ activeStartDate, date, view }) => {
    return view === "month" ? (
      <span className="react-calendar__date-content">
        <span className="react-calendar__date-content__number">{date.getDate()}</span>
      </span>
    ) : null;
  };

  const tileClassName = ({ activeStartDate, date, view }) => {
    return "";
  };

  const refCalendar = useRef(null);
  const refTimePicker = useRef(null);

  const scrollIntoTimePicker = () => {
    setTimeout(() => {
      const item = refTimePicker.current;
      if (item) {
        // remove 100 because sticky header
        const y = item.getBoundingClientRect().top + window.scrollY - 100;
        animateScrollTo(y);
      }
    }, 200);
  };

  return (
    <div className={classNamesDedupe("booking-time-picker", className)}>
      {/*
      <Datepicker
        minDate={dateMin}
        onChange={handleSelectDate}
        value={date}
        className="form-field--full-width react-date-picker--open"
        isOpen={isOpen && !date}
        required
      />
      */}
      <div ref={refCalendar}>
        <Calendar
          minDate={dateMin}
          onChange={handleSelectDate}
          value={date}
          tileContent={tileContent}
          tileClassName={tileClassName}
          locale="fr-FR"
        />
      </div>

      <div ref={refTimePicker}>
        <DropdownPopover
          className="booking-time-picker__list"
          title={!!date ? formatDateStd(date) : ""}
          placeholder="--:-- - --:--"
          list={timetable}
          noItemsPlaceholder="Nous sommes fermés ..."
          renderListItem={({ startTime, endTime, isAvailable }) => (
            <span className="booking-time-picker__item">
              <span className="booking-time-picker__item-time">
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                  <path
                    d="M55 69c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15zm0 3c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm1.5 3v9.621l-6.44 6.44-2.12-2.121 5.56-5.561V75h3z"
                    transform="translate(-450 -1621) translate(370 775) translate(0 588) translate(20 20) translate(20 169)"
                    fill="#000"
                    stroke="none"
                    strokeWidth={1}
                    fillRule="currentColor"
                    opacity={0.200000003}
                  />
                </svg>
                <span>
                  {startTime} - {endTime}{" "}
                </span>
              </span>
              <button className="booking-time-picker__item-button btn-green">
                Je réserve mon shooting
              </button>
            </span>
          )}
          getItemLabel={({ startTime, endTime }) => `${startTime} - ${endTime}`}
          isItemDisabled={timeSlot => !timeSlot.isAvailable}
          disabled={!date}
          openValue={date && date.getTime()}
          value={time}
          loading={loading}
          onChange={handleSelectTime}
        />
      </div>
    </div>
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
export default TimePicker;
