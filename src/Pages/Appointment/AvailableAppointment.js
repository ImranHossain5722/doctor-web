import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            Available Appointments on {format(date,'PP')}
        </div>
    );
};

export default AvailableAppointment;