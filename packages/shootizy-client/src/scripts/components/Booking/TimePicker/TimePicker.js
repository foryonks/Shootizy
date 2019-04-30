import React, { useState } from "react";
import PropTypes from "prop-types";
import classNamesDedupe from "classnames/dedupe";

import Datepicker from "scripts/components/_common/Datepicker";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import useToggleState from "scripts/hooks/useToggleState";
import { getDateWithoutTimeZone, getDateStr } from "scripts/utils/utils";

import "./TimePicker.scss";

const TODAY = new Date();

const TimePicker = ({ className, onChange }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const dateStr = date && getDateWithoutTimeZone(date);
  const { contents: timetable, loading, load: loadTimeTable } = useRemoteContents(
    `/api/booking/availability?date=${dateStr}`,
    [],
    !!date,
    // real time reservation, no cache
    false
  );
  const { isOpen, toggle } = useToggleState(false);

  const hanldeSelectDate = newDate => {
    setDate(newDate);
    //Reset time if date changed
    setTime("");

    if (newDate) {
      toggle(true);
    } else {
      // Call parent
      onChange(null);
    }
  };
  const handleSelectTime = (startTime, endTime) => {
    setTime(`${startTime} - ${endTime}`);
    toggle();
    // Call parent
    onChange(date && { date, startTime, endTime });
  };

  const handleOnTimeClick = () => {
    if (!isOpen && date) {
      // Reload timetable to assure REAL TIME factor (or in case someone else reserve)
      loadTimeTable();
    }
    toggle();
  };
  return (
    <div className={classNamesDedupe("booking-time-picker row", className)}>
      <div className="col-8">
        <Datepicker
          minDate={TODAY}
          onChange={hanldeSelectDate}
          value={date}
          className="form-field--full-width"
          isOpen
        />
      </div>
      <div className="col-4">
        <div className="time-picker-wrapper">
          <input
            type="text"
            className="form-field--full-width"
            readOnly
            placeholder="--:-- - --:--"
            value={time}
            onClick={handleOnTimeClick}
          />
          {date && (
            <div
              className={classNamesDedupe("time-picker-popover", {
                "time-picker-popover--open": isOpen,
              })}>
              <div className="time-picker-popover__contents">
                <h3>{getDateStr(date)}</h3>
                {loading ? (
                  <div className="time-picker-popover__info">Chargement...</div>
                ) : !timetable.length ? (
                  <div className="time-picker-popover__info">Pas de disponibilité</div>
                ) : (
                  <ul className="time-picker-popover__list">
                    {timetable.map(({ startTime, endTime, isAvailable }) => (
                      <li
                        className={classNamesDedupe("time-picker-popover__list__item", {
                          "time-picker-popover__list__item--disabled": !isAvailable,
                        })}
                        key={`${dateStr}-${startTime}`}
                        onClick={() => isAvailable && handleSelectTime(startTime, endTime)}>
                        <span>
                          {startTime} - {endTime}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TimePicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default TimePicker;
