import React, { useEffect } from 'react'
import "./all.css"

function Home({general}) {

 function handleClick(){
  var scrollDiv = document.getElementById("content").offsetTop;
window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

 }
 function handleClicktwo(){
  var scrollDiv = document.getElementById("event").offsetTop;
window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

 }
 useEffect(() => {
  document.title = general?.eventname;
}, [general]);
if(general)
  return (
    <div  className='home' style={{color:"white",width:"100%",height:"100vh",background:`url(${general?.logo})`}}>
        <div style={{background:`linear-gradient(0deg,${general?.themeColor},#0000,#0000,#0000)`,height:"100%",position:"absolute",width:"100%"}}></div>
      <div className='home_sub' style={{color:"white",width:"100%",height:"100%",display:"flex",position:"absolute",flexDirection:"column",margin:"auto",justifyContent:"center"}}>


      <h1 style={{fontSize:"70px",color:`${general?.themeColor}`}} className="hero glitch layers" data-text=""><span>{general?.eventname.toUpperCase()}</span></h1>
      <span className='col_name' style={{fontStyle:"italic",marginBottom:"7px"}}>{`SAINTGITS COLLEGE OF ENGINEERING (AUTONOMOUS)`}</span>
  

<span className='col_name' style={{fontStyle:"italic",marginBottom:"7px"}}>MARCH 30</span>


        <div className="home_btns">
        <button onClick={()=>{handleClicktwo()}} style={{width:"170px",padding:"10px",border:"none",borderRadius:"20px",color:"#000", background:`${general?.themeColor}`,fontWeight:"400",marginTop:"8px"}}>Register Now</button>
        <button onClick={()=>{handleClick()}} style={{width:"170px",padding:"10px",border:"1px solid #fff",borderRadius:"20px",color:"#fff",background:"transparent",fontWeight:"400",marginTop:"8px"}}>EXPLORE</button>
        </div>
      </div>
  

    </div>
  )
}

export default Home