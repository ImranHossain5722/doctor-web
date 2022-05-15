import React from 'react';
import {useQuery} from 'react-query'
import Loading from '../../Shared/Lodaing/Loading'

const AllUsers = () => {
    const {data: users,isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h2 className='text-2xl'>ALl User: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;