import React from 'react';

const Profile = (props) => {
    const {id,name,age}= props.profile
    return (
        <div>
            <h6>Name : {name}</h6>
            <p>Age : {age}</p>
            <small>id : {id}</small>
        </div>
    );
};

export default Profile;