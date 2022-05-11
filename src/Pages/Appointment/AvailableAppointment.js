import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import ServiceAppointment from './ServiceAppointment/ServiceAppointment';

const AvailableAppointment = ({date}) => {
    const [services, setServices] =useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(()=>{
            fetch('http://localhost:5000/service')
            .then(res=> res.json())
            .then(data=> setServices(data))

    },[])
    return (
        <div className='p-12'>
            <h2 className='text-xl text-secondary text-center p-10'>Available Appointments on {format(date,'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 m-5'>
                {
                services.map(service => <ServiceAppointment key={service._id} service={service} setTreatment={setTreatment}></ServiceAppointment>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;