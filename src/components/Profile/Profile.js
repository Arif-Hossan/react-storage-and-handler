import React from 'react';
import "./Profile.css"
import { addToDb, removeFromDb } from '../../utilities/fakeDb';

const Profile = (props) => {
    const {id,name,age}= props.profile;

    const addFriend =(id)=>{
        // console.log(id,"request send");
        addToDb(id);
    }
    const removeFriend = (id) =>{
        removeFromDb(id);
    }
    // const addFriendWithParameter = () => addFriend(id);
    return (
        <div className="profiles">
            <h6>Name : {name}</h6>
            <p>Age : {age}</p>
            <p><small>id : {id}</small></p>
            {/* <button onClick={addFriendWithParameter}>Friend Request</button> */}
            <button onClick={()=>addFriend(id)}>Friend Request (Shortcut)</button>
            <button onClick={()=> removeFriend(id)}>Remove</button>
        </div>
    );
};

export default Profile;

// const items = [
//     {id : 1 , name : "Alta" , price : 100},
//     {id : 2 , name : "Alta" , price : 100},
//     {id : 3 , name : "Alta" , price : 100},
//     {id : 4 , name : "Alta" , price : 100},
//     {id : 5 , name : "Alta" , price : 100},
// ];

// const itemsReducer = (previous, current ) => previous + current.price;
// const itemTotal = items.reduce(itemsReducer,0);

const getTotalAge = profiles =>{
    const reducer = (previous,current) => previous + current.age;
    const total = profiles.reduce(reducer,0);
    return total;
}
export {getTotalAge as getTotal};