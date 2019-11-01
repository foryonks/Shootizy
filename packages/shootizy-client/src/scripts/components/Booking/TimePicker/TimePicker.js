import React, { useState } from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import Datepicker from "scripts/components/_common/Datepicker";
import DropdownPopover from "scripts/components/_common/DropdownPopover";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import { getDateWithoutTimeZone, formatDateStd } from "scripts/utils/DateUtils";

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
    if (!date || newDate.getTime() !== date.getTime()) {
      setDate(newDate);
      // Reset time if date changed
      setTime(null);
      // Call parent
      onChange(null);
    }
  };
  const handleSelectTime = timeSlot => {
    setTime(timeSlot);
    // Call parent
    const { startTime, endTime } = timeSlot;
    onChange(date && { date, startTime, endTime });
  };

  // const handleOnTimeClick = isOpen => {
  //   if (!isOpen && date) {
  //     // Reload timetable to assure REAL TIME factor (or in case someone else reserve)
  //     loadTimeTable();
  //     // Reset value
  //     onChange(null);
  //   }
  // };

  return (
    <div className={classNamesDedupe("booking-time-picker", className)}>
      <Datepicker
        minDate={dateMin}
        onChange={handleSelectDate}
        value={date}
        className="form-field--full-width react-date-picker--open"
        isOpen={isOpen && !date}
        required
      />
      <DropdownPopover
        className="booking-time-picker__list"
        title={!!date ? formatDateStd(date) : ""}
        placeholder="--:-- - --:--"
        list={timetable}
        noItemsPlaceholder="Nous sommes fermés ..."
        renderListItem={({ startTime, endTime, isAvailable }) => (
          <span>
            {startTime} - {endTime}
          </span>
        )}
        getItemLabel={({ startTime, endTime }) => `${startTime} - ${endTime}`}
        isItemDisabled={timeSlot => !timeSlot.isAvailable}
        disabled={!date}
        openValue={date && date.getTime()}
        value={time}
        loading={loading}
        //onClick={handleOnTimeClick}
        onChange={handleSelectTime}
      />
    </div>
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
export default TimePicker;
