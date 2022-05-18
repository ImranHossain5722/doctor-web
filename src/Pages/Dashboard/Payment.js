import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Lodaing/Loading";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51L0d2eJvwSLKC8U7oHdP5qDF3qH8hdN0sPVLE4OcCRc8TjDTc0QyHijqxST2xxPOXqGw8dt3hKUQbKcaarm5voco00JCAUVHlf"
  );
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-primary text-primary-content my-10">
        <div class="card-body">
          <p className="text-purple-500 font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 class="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment date{" "}
            <span className="text-orange-700">{appointment.date} </span> at{" "}
            <span className="text-orange-700"> {appointment.slot} </span>{" "}
          </p>
          <p>
            please pay: ${" "}
            <span className="text-white">{appointment.price}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm a />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
