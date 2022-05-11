import React from "react";
import { format } from 'date-fns';
const BookingModal = ({treatment,setTreatment, date}) => {
 const {name, slots} = treatment;
 const handelBooking = event => {
     event.preventDefault();

     const slot =event.target.slot.value

     console.log(slot);
     setTreatment(null)
 }

    return (
    <div>
    
      <input type="checkbox" id="my-booking-modal" class="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="my-booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-xl text-secondary text-center pb-5">
            Booking For<br/> {name}
          </h3>
            <form onSubmit={handelBooking} className="grid grid-cols-1 gap-4 justify-items-center">
            <input type="text" readOnly value={format(date,'PP')} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <select name="slot" class="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option value={slot}> {slot} </option>)
                }
            </select>

            <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" placeholder="Type here" class="input input-bordered bg-primary text-white w-xs" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
