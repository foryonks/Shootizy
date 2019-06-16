import React, { useState } from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import Datepicker from "scripts/components/_common/Datepicker";
import DropdownPopover from "scripts/components/_common/DropdownPopover";

import useRemoteContents from "scripts/hooks/useRemoteContents";
import { getDateWithoutTimeZone, getDateStr } from "scripts/utils/utils";

import "./TimePicker.scss";

const dateMin = new Date();
// Only reservable from the next day
dateMin.setDate(dateMin.getDate() + 1);

const TimePicker = ({ className, onChange }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const dateStr = date && getDateWithoutTimeZone(date);
  const { contents: timetable, loading, load: loadTimeTable } = useRemoteContents(
    `/api/booking/availability?date=${dateStr}`,
    [],
    !!date,
    // real time reservation, no cache
    false
  );

  const hanldeSelectDate = newDate => {
    setDate(newDate);
    //Reset time if date changed
    setTime(null);
    // Call parent
    onChange(null);
  };
  const handleSelectTime = timeSlot => {
    setTime(timeSlot);
    // Call parent
    const { startTime, endTime } = timeSlot;
    onChange(date && { date, startTime, endTime });
  };

  const handleOnTimeClick = isOpen => {
    if (!isOpen && date) {
      // Reload timetable to assure REAL TIME factor (or in case someone else reserve)
      loadTimeTable();
    }
  };

  return (
    <div className={classNamesDedupe("booking-time-picker row", className)}>
      <div className="col-8">
        <Datepicker
          minDate={dateMin}
          onChange={hanldeSelectDate}
          value={date}
          className="form-field--full-width"
          isOpen
        />
      </div>
      <div className="col-4">
        <DropdownPopover
          className="booking-time-picker__list"
          title={!!date ? getDateStr(date) : ""}
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
          isOpen={!!date}
          value={time}
          loading={loading}
          onClick={handleOnTimeClick}
          onChange={handleSelectTime}
        />
      </div>
    </div>
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default TimePicker;
