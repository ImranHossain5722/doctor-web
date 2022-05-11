import React from "react";

const ServiceAppointment = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-white shadow-xl ">
        <div class="card-body items-center text-center ">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-400 text-sm">
                Today No Slot Available
              </span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "sapce"} available
          </p>
          <div class="card-actions justify-center">
            <label for="my-booking-modal" 
            onClick={() => setTreatment(service)} 
            disabled={slots.length === 0}
            class="btn btn-primary text-white">
              Book Appointment
              </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAppointment;
