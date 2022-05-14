import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] =useAuthState(auth)
    const [appointments, setAppointments] =useState([]);
useEffect(()=>{
   if(user){
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
    .then(res => res.json())
    .then(data=> setAppointments(data))
   }
},[user])

    return (
        <div>
            my appointment{appointments.length}
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          appointments.map((a,index)=><tr>
            <th>{index+1}</th>
            <td>{a.patientName}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
           
          </tr>
            )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;