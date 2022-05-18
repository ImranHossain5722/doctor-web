import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Lodaing/Loading";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  const imagesStorageKey = "a60adc861a41403d1c4df1acbdd1db7e";

   
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagesStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
          if(result.success){
                const img = result.data.url
                const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty:  data.specialty,
                  img: img
                }
                // send  to database
            fetch('http://localhost:5000/doctor',{
                method: 'POST',
                headers:{
                     'content-type' : 'application/json',
                     authorization:` Bearer ${localStorage.getItem('accessToken')}` 

                },
                body:JSON.stringify(doctor)

            })
            .then(res => res.json())
            .then(inserted =>{
                if(inserted.insertedId){
                    toast.success('Doctor added succesfully')
                    reset()
                }else{
                    toast.error('Faild to add doctor')
                }
            })

          }     
          

          



      }); 
  };

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h2> add a new doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          {/* for Name field */}
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.name.message}
              </span>
            )}
          </label>
          {/* for email */}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },

              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Provide Valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}

            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}
          </label>
          {/* for select service*/}
          <label className="label">
            <span className="label-text"> specialty</span>
          </label>
             <div>       
          <select {...register("specialty")} class="select input-bordered w-full max-w-xs" >
            {
            services?.map( service => 
              <option key={service._id} value={service.name}>
                {service.name}
              </option>)
            }
          </select>
          </div>
          {/* for photo field */}
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn btn-outline w-full max-w-xs "
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
