import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import userEvent from "@testing-library/user-event";
import {toast}from 'react-toastify'
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  const formatDate = format(date, "PP");
  const [user, loading, error] = useAuthState(auth);

  const handelBooking = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;

    console.log(slot);
    const booking = {
      treatmentId: _id,
      treatment:name,
      date: formatDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.value,
    };
    fetch('http://localhost:5000/booking',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then (data =>{
    
        if(data.success){
          toast(`Appoinment is set, ${formatDate} at ${slot}`)
        }else{
          toast.error(`Alredy have an Appoinment on, ${data.booking?.date} at ${data.booking?.slot}`)
        }
        
        refetch();
    // to close the  modal
    setTreatment(null);

    })

    
  };

  return (
    <div>
      <input type="checkbox" id="my-booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary text-center pb-5">
            Booking For
            <br /> {name}
          </h3>
          <form
            onSubmit={handelBooking}
            className="grid grid-cols-1 gap-4 justify-items-center"
          >
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {" "}
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="input input-bordered bg-primary text-white w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
