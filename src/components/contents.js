import React, { useState,useEffect } from 'react'
import "./all.css"

function Contents({general}) {
  const calculateTimeLeft = () => {

    let difference = +new Date(`${general?.eventdate}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }
const [timeLeft, setTimeLeft] =  useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
});
const timerComponents = [];
 timeLeft&&  Object.keys(timeLeft).forEach((interval,index) => {
  if (!timeLeft[interval]) {
    return;
  }
  timerComponents.push(
    <div key={index} className={`counter c${index}` }>
      <span className='counter_hour' > {timeLeft[interval]}</span>
     <p>{interval}</p> 
    </div>
  );
});
 if(general)
  return (
    <div id='content'  className='content' style={{height:"250px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",background:`linear-gradient(0deg,#0000,${general?.themeColor})`,position:"relative"}}>
        <h2 style={{margin:"auto"}}>{general?.about}</h2>
        <div className='counter_display'>

{timerComponents.length &&timerComponents }
</div>
        <div style={{display:"flex",position:"absolute",bottom:"0",width:"100%",borderTop:`1px solid ${general?.themeColor}`,borderBottom:`1px solid ${general?.themeColor}`,padding:"10px 0 10px 0"}}>
  
          <div className="wrapper">
  <div className="marquee">
    <p>
{general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW |
    </p>
    <p>
    {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW | {general?.eventname.toUpperCase()}  REGISTER NOW |
    </p>
  </div>
</div>
        </div>

    </div>
  )
}

export default Contents