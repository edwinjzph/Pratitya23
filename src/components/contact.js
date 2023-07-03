import React, { useEffect } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import {  IconButton} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import img from "./assets/hand.png";
import img2 from "./assets/earth.png";
import img3 from "./assets/contact.png";

function Contact({general}) {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  if(general)
  return (
    <div style={{height:"100%",width:"100%" ,position:"relative",paddingBottom:"20px"}}>
    <div style={{height:"250px",background:`linear-gradient(0deg,${general?.themeColor},#0000)`,width:"100%"}}></div>

    <div style={{display:"flex",alignItems:"center",gap:"5px",position:"absolute",top:"90px",left: "0",right:"0",marginLeft:"auto",marginRight:"auto",justifyContent:"center"}}>
          <img alt='hand' style={{height:"35px"}} src={img3}></img>
        <h3 style={{fontSize:"40px"}}>Contact us</h3>
        </div>
    <div className='con_card' style={{width:"70%",background:"#111",marginLeft:"auto",marginRight:"auto",borderRadius:"10px",display:"flex",justifyContent:"center",gap:"20px",height:"max-content",marginBottom:"20px",marginTop:"20px"}}>
      <div style={{padding:"30px",display:"flex",flexDirection:"column",gap:"20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
          <img alt='hand' style={{height:"30px"}} src={img}></img>
        <h3 style={{fontSize:"28px"}}>Get in touch</h3>
        </div>
        <a href={`tel:${general?.convenorphn}`}  style={{width:"100%",backgroundColor:"#111",padding:"10px",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",gap:"20px",textDecoration:"none",color:"white"}}>
    <div>
    <IconButton  style={{border:"1px solid gray",padding:"8px",background:"hsla(0,0%,100%,.08)"}}>
    <PhoneIcon />
  </IconButton>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{general?.convenor}</span>
        <span>{`(Convenor)`}</span>
        <span>{general?.convenorphn}</span>
    </div>
</a>
<a href={`tel:${general?.pmphn}`}   style={{width:"100%",backgroundColor:"#111",padding:"10px",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",gap:"20px",textDecoration:"none",color:"white"}}>
    <div>
    <IconButton  style={{border:"1px solid gray",padding:"8px",background:"hsla(0,0%,100%,.08)"}}>
    <PhoneIcon />
  </IconButton>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{general?.pm}</span>
        <span>{`(Project Manager)`}</span>
        <span>{general?.pmphn}</span>
    </div>
</a>
<a href={`tel:${general?.apm1phn}`}   style={{width:"100%",backgroundColor:"#111",padding:"10px",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",gap:"20px",textDecoration:"none",color:"white"}}>
    <div>
    <IconButton  style={{border:"1px solid gray",padding:"8px",background:"hsla(0,0%,100%,.08)"}}>
    <PhoneIcon />
  </IconButton>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{general?.apm1}</span>
        <span>{`(Assistant Project Manager)`}</span>
        <span>{general?.apm1phn}</span>
    </div>
</a>
<a href={`tel:${general?.apm2phn}`}   style={{width:"100%",backgroundColor:"#111",padding:"10px",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",gap:"20px",textDecoration:"none",color:"white"}}>
    <div>
    <IconButton  style={{border:"1px solid gray",padding:"8px",background:"hsla(0,0%,100%,.08)"}}>
    <PhoneIcon />
  </IconButton>
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
        <span>{general?.apm2}</span>
        <span>{`(Assistant Project Manager)`}</span>
        <span>{general?.apm2phn}</span>
    </div>
</a>
<div style={{display:"flex",alignItems:"center",gap:"5px"}}>
          <img alt='hand' style={{height:"30px"}} src={img2}></img>
        <h3 style={{fontSize:"28px"}}>Social</h3>
        </div>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
<IconButton href={general?.instaurl} target="_blank" style={{border:"1px solid gray",padding:"8px",background:"hsla(0,0%,100%,.08)"}}>
    <InstagramIcon/>
  </IconButton>

</div>
      </div>
    </div>
    <div style={{marginTop:"20px"}}></div>
    </div>
  )
}

export default Contact