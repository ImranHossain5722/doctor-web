import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Lodaing/Loading";
import DeleteModel from "./DeleteModel";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const [deleteDoctor, setDeleteDoctor] =useState(null)
  const { data: doctors, isLoading , refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
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
      <h2>Manage doctor:{doctors.length}</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            doctors.map((doctor,index)=><DoctorRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeleteDoctor={setDeleteDoctor} ></DoctorRow>)
        }
      
    </tbody>
  </table>
</div>
{deleteDoctor && <DeleteModel deleteDoctor={deleteDoctor} refetch={refetch} setDeleteDoctor={setDeleteDoctor} />}
    </div>
  );
};

export default ManageDoctor;
