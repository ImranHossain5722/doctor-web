import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import ServiceAppointment from './ServiceAppointment/ServiceAppointment';
import { useQuery} from 'react-query'
import Loading from '../../Shared/Lodaing/Loading';

const AvailableAppointment = ({date}) => {

    const [treatment, setTreatment] = useState(null)
const formatedDate = format(date, 'PP')
const {data:services , isLoading , refetch} = useQuery('available',() => fetch(`http://localhost:5000/available?date=${formatedDate}`)
.then(res=> res.json())
)
if (isLoading){
    return <Loading/>
}
   return (
        <div className='p-12'>
            <h2 className='text-xl text-secondary text-center p-10'>Available Appointments on {format(date,'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 m-5'>
                {
                services?.map(service => <ServiceAppointment key={service._id} service={service} setTreatment={setTreatment}></ServiceAppointment>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;