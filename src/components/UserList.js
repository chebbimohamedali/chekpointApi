import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';

function UserList(){
  const [users, setUsers]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>  setUsers(res.data)) 
    .catch(error => console.log(error) );
  },[]);
  return(

    <div style={{
      paddingTop:"30px",
      display:"flex",
      justifyContent:"space-between",
      margin:"auto",
      width:"90%",
      flexWrap:"wrap",
      }}>
      {
      users.map(user => ( 
        <UserCard user={user} key={user.id} />
        ))
      }
    </div>

  )
}

export default UserList
