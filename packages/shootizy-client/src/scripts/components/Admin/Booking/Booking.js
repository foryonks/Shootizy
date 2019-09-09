import React, { useCallback } from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import usePagination from "scripts/hooks/usePagination";
import useFetchWithLoader from "scripts/hooks/useFetchWithLoader";
import { fetchJson } from "scripts/utils/api";

import { getDateStr } from "scripts/utils/DateUtils";

import "./Booking.scss";

const ITEMS_PER_PAGE = 3;

const Booking = () => {
  const { contents: reservations, loading: loadingList, load: reloadList } = useRemoteContents(
    `/api/booking/reservations`,
    []
  );
  const { getCurrentPage, PaginationComponent } = usePagination(reservations || [], ITEMS_PER_PAGE);
  const { loading: canceling, fetchWithLoader, error } = useFetchWithLoader(
    fetchJson,
    "Annulation échouée"
  );

  const handleCancel = useCallback(async bookingId => {
    try {
      await fetchWithLoader(`/api/booking/reservations/${bookingId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      reloadList();
    } catch (e) {}
  }, []);

  return (
    <div className="container container-2">
      <p>
        {!loadingList && !reservations.length
          ? "Aucune réservation à venir"
          : "Les réservations à venir :"}
      </p>

      <ul className="booking-list">
        {getCurrentPage().map(({ bookingId, name, email, product, date, startTime, endTime }) => (
          <li
            className="booking-list__item card card-simple card-shadow card-margin"
            key={bookingId}>
            <div className="row">
              <div className="col-9 booking-list__item__info">
                <p>
                  {getDateStr(date)} | {startTime} - {endTime}
                </p>
                {product && <p>Thème : {product.title}</p>}
                <p>
                  {name} - {email}
                </p>
              </div>
              <div className="col-3 booking-list__item__actions">
                <button
                  className="btn-small"
                  onClick={() => handleCancel(bookingId)}
                  disabled={canceling}>
                  Cancel
                </button>
              </div>
            </div>
            {error && <div className="form-feedback--error">{error}</div>}
          </li>
        ))}
        {PaginationComponent}
      </ul>
    </div>
  );
};

export default Booking;
