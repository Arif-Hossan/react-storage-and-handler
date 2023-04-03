import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

const Profiles = () => {
    // Creating Data
    /*
    const profiles = [
        {id : 1 , name  : "Johan" , age : 18},
        {id : 2 , name  : "Emilie" , age : 28},
        {id : 3 , name  : "Smith" , age : 68},
        {id : 4 , name  : "Martin" , age : 19},
        {id : 5 , name  : "Emilie" , age : 16},
    ]
    */

   //generating Data as json
   /*
   const profiles = [
    {
      "id": "642b2b3f8322b0fc88f2d15a",
      "age": 33,
      "name": "Shelia Hobbs"
    },
    {
      "id": "642b2b3fc3c5ecf56c12657e",
      "age": 23,
      "name": "Chapman Harding"
    },
    {
      "id": "642b2b3f762b556bbb641789",
      "age": 26,
      "name": "Mccormick Bartlett"
    },
    {
      "id": "642b2b3f27aa36ad5ead08c3",
      "age": 32,
      "name": "Massey Richard"
    },
    {
      "id": "642b2b3f4b3e1ccc8c1530d6",
      "age": 40,
      "name": "Rosemarie Ruiz"
    },
    {
      "id": "642b2b3f00747cde217eaf8e",
      "age": 22,
      "name": "Harriet Marshall"
    },
    {
      "id": "642b2b3f327841beebc71ef4",
      "age": 23,
      "name": "Howe Lee"
    }
  ];
*/

   const [profiles,setProfiles]=useState([]);
   useEffect(()=>{
     fetch('data.json')
     .then(res => res.json())
     .then(data => setProfiles(data))
   },[])

    return (
        <div>
            <h1>Users/Profiles List</h1>
            {
                profiles.map(profile => <Profile
                    key = {profile.id}
                    profile={profile}
                    ></Profile>)
            }
        </div>
    );
};

export default Profiles;