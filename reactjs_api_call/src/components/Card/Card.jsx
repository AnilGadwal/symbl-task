import React from 'react';
import {FaUserCircle} from "react-icons/fa"
import "../Card/Card.css"

const Card = ({userDetails}) => {
  return <div className='card' key={userDetails.id}>
  <FaUserCircle color='dodgerblue' size={40}/>
  <h4 className='id'>ID : {userDetails.id}</h4>
  <h4 className='name'>Name : {userDetails.name}</h4>
  </div>;
};

export default Card;
