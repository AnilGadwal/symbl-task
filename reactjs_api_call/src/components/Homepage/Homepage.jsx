import React, { useState, useRef, useEffect } from 'react';
import "../Homepage/Homepage.css"
import {gsap, Back} from 'gsap/all';
import Card from '../Card/Card';
import symb from "../Homepage/symbl.png"
import { FaGrinSquintTears } from 'react-icons/fa';

const Homepage = () => {
  
  const [userData, setuserData] = useState([]);

  let btn = useRef(null);
  let data = useRef(null);
  let logo = useRef(null);
  let bg = useRef(null);

  useEffect(() => {
    gsap.from(btn, 0.6,{x:1500, ease:Back.easeOut},1)
    gsap.from(logo, 0.6,{x:-600, ease:Back.easeOut},1.5)
    gsap.from(bg, 0.6,{scale:2,y:1000, ease:Back.easeOut},0.5)
  }, []);
  
  
  const fetchData = () =>{
    fetch('https://random-data-api.com/api/name/random_name/?size=9')
    .then((response) => response.json())
    .then((data)=>{setuserData(data)})
    .then(gsap.from(data, 0.6,{x:-1500, ease:Back.easeOut}))
  };
  
  return(
    <div className='homepage'>
      <h1 className='logo' ref={el=>logo=el}><FaGrinSquintTears className='emoji' size={40}/>dummynames.ai</h1>
      <img src={symb} alt="" className='bg_image' ref={el=>bg=el}/>
     <div className='data' ref={el=>data=el}>
      {userData.map(user=>(
          <Card userDetails= {user}/>
        ))}
      </div>
      
      <div className='button' ref={el=>btn=el}>
      <button onClick={fetchData}  >Get user Data</button>
      </div>
    </div>
    )
    };
    
    export default Homepage;
    