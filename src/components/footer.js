import React from 'react'
import "./all.css"

function Footer({general}) {
  if(general)
  return (
    <div className='footer' style={{ height:"max-content", textAlign:"center",backgroundColor:`${general.themeColor}`,display:"flex",position:"absolute",justifyContent:"center",width:"100%",flexDirection:"column",gap:"5px",padding:"10px"}}>
      <span style={{color:"black"}}>Saintgits College of Engineering
Kottukulam Hills, Pathamuttam P. O, Kerala 686532
</span>
        <span style={{margin:"auto",color:"black"}}>Built by <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black",marginBottom:"10px"}} href='https://www.linkedin.com/in/edwinjzph/'>edwin</a></span>
    </div>
  )
}

export default Footer