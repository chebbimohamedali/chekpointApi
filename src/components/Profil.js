import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import profil from '../img/profil.png'
import axios from 'axios';

function Profil() {
    const [user,setUser]=useState(null);
    const {id}= useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  setUser(res.data)) 
        .catch(error => console.log(error) );
      },[id]);
      
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      paddingTop:"30px",
    }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profil} />
      <Card.Body>
        <Card.Title>{user && user.name}</Card.Title>
        <Card.Text>
            <h3>{ user && user.username}</h3>
             {user && user.email} <br />
             {user && user.address && user.address.street} <br />
             {user && user.address && user.address.suite} <br />
             {user && user.address && user.address.city} <br />
             {user && user.address && user.address.zipcode} <br/>
             
        </Card.Text>
        <Button variant="primary">See Profil</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profil