import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './footer';
import PhoneIcon from '@mui/icons-material/Phone';
import {  IconButton} from '@mui/material';
import ScrollToTop from './Scroll';

function Event({events,general}) {
    const pharm = useParams();
    useEffect(() => {
        document.title = events[pharm.id]?.Event_name;
      }, [events]);
    if(events && general)
  return (
    <div className='evt' style={{width:"100%",height:"100%"}}>
        <ScrollToTop/>
        <div className='evt_wi' style={{width:"80%",margin:"90px auto 0px auto",paddingBottom:"70px"}}>
        <div className='evt_main' style={{display:"flex",gap:"70px",width:"100%",justifyContent:"space-between",paddingTop:"20px",marginTop:"20px",}}>
          
            <div className='event_data' >
                <div style={{width:"100%",position:"relative"}}>
                <img alt='event_image' src={events[pharm.id]?.imageurl} style={{height:"300px",width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0"}}></img>
                <div style={{position:"absolute",bottom:"0" , background: "linear-gradient(0deg,#000,#000,#0000)",width:"100%",padding:"40px 0 0px 0"}}><h2 style={{fontSize:"35px",paddingLeft:"10px"}}>{events && events[pharm.id]?.Event_name}</h2></div>
                </div>
                {events[pharm.id]?.description.split('\\n').map((i,index) => {
    return <p  key={index}>{`\n ${i}`}</p>
})}
<div style={{width:"100%"}}>
<h3>CONTACT</h3>
<a className='frost' href={`tel:${events[pharm.id]?.PhoneNumber}`} style={{width:"100%",padding:"10px",border:".5px solid gray",borderRadius:"10px",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",gap:"20px",textDecoration:"none",color:"white"}}>
    <div>
    <IconButton  style={{border:"1px solid gray",padding:"8px"}}>
    <PhoneIcon />
  </IconButton>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{events[pharm.id]?.head_name} </span>
        <span style={{fontSize:"13px"}}>{`(Head)`}</span>
        <span>{events[pharm.id]?.PhoneNumber} </span>
    </div>
</a>
</div>

            </div>
            <div className='event_data' style={{justifyContent:"right",display:"flex",flexDirection:"column" }}>
             <div className='frost' style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",margin:"0 auto 0 auto",maxHeight:"100%",position:"relative",border:"1px solid gray",borderRadius:"10px" }}>
                <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"20px",padding:"15px",color:"#fff",zIndex:"2"}}>
         <div className='evt_sub' >
         <span style={{fontSize:"13px",marginBottom:"10px "}}>PRIZES WORTH</span>
         <div  style={{width:"max-content" ,position:"relative",minWidth:"160px",textAlign:"center",}}>
                <div style={{width:"100%",height:"100%",position:"absolute",top:"0.3rem",left:"0.3rem",zIndex:"0",background:"#FFD700",boxShadow: "0 0.5rem 2.25rem  #FFD700"}}></div>
                <div style={{padding:"8px 20px  8px 20px",border:"1px solid white",zIndex:"3",position:"relative",background:"black"}}>
                <h5 style={{fontSize:"25px"}} >₹{events[pharm.id]?.price}</h5>
                </div>
                </div>
         </div>
             
               
                <div className='evt_sub'>
                <span style={{fontSize:"13px"}}>VENUE</span>
                <span style={{fontSize:"20px"}}>{events[pharm.id]?.venue}</span>
                </div>
                <div className='evt_sub'>
                <span style={{fontSize:"13px"}}>DATE AND TIME</span>
                <span style={{fontSize:"20px"}}>{events[pharm.id]?.date}</span>
                </div>
              

                </div>
                <div style={{width:"100%",display:"flex",borderRadius:"0  0 10px 0px",zIndex:"0"}}>
                    <a  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",background:`${events[pharm.id]?.registration && general?.registration?`${general?.themeColor}`:"#8B0000"}`,width:"90%",margin:"auto",padding:"10px",border:"none",fontSize:"17px",fontWeight:"600px",borderRadius:"7px",marginBottom:"20px",marginTop:"20px",color:"black",cursor:"pointer",display:"flex",justifyContent:"center"}} href={(events[pharm.id]?.registration && general?.registration)?events[pharm.id]?.link:null}>{events[pharm.id]?.registration && general?.registration?"Register Now":"Registration Closed"}</a>
                </div>
             </div>
             <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <h3 style={{marginTop:"20px"}} >RULES</h3>
                {events[pharm.id]?.rules.split('\\n').map((i,index) => {
    return <p key={index}>{`\n ${i}`}</p>
})}
            </div>
            </div>
         

        </div>

        </div>
        <Footer general={general}/>
       </div>
  )
}

export default Event