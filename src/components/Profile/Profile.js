import React from 'react';
import "./Profile.css"
import { addToDb } from '../../utilities/fakeDb';

const Profile = (props) => {
    const {id,name,age}= props.profile;

    const addFriend =(id)=>{
        // console.log(id,"request send");
        addToDb(id)
    }

    const addFriendWithParameter = () => addFriend(id);
    return (
        <div className="profiles">
            <h6>Name : {name}</h6>
            <p>Age : {age}</p>
            <p><small>id : {id}</small></p>
            {/* <button onClick={addFriendWithParameter}>Friend Request</button> */}
            <button onClick={()=>addFriend(id)}>Friend Request (Shortcut)</button>
        </div>
    );
};

export default Profile;