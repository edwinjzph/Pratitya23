import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { signInWithGoogle } from '../firebase';
import "./Nav.css";


function Nav({general}) {
    const [menu,setMenu] =useState(false);
    const [show,handleShow] =useState(false);
    const location = useLocation();
    const history = useHistory()
    const transitionNarbar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
 useEffect(() =>{
window.addEventListener("scroll",transitionNarbar);
return () => window.removeEventListener("scroll",transitionNarbar);
 },[])
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
      
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    
if(general)
    return (
        <>
        <div className={`nav ${(show)  && 'nav_black'}`}>
            <div className="nav_contents">
            {!show?
  <img alt='saintgitslogo' onClick={()=>{history.push('/')}}  src="https://firebasestorage.googleapis.com/v0/b/nk23-a5689.appspot.com/o/watermark.png?alt=media&token=5a0445e3-356d-45a6-a510-07520130b8d1"></img>:  <img alt='saintgitslogo' onClick={()=>{history.push('/')}}  src={general?.logo}></img>}
  {width>1000?
  <div className='menu' style={{display:"flex",gap:"30px",alignItems:"center",paddingRight:"30px"}}>
    <span onClick={()=>{history.push("/");}}  className={`${location.pathname==='/'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}}>Home</span>
    <span onClick={()=>{history.push("/events");}}  className={`${location.pathname==='/events'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}}>Events</span>
    <span onClick={()=>{history.push("/contact");}}  className={`${location.pathname==='/contact'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}}>Contact us</span>

  </div>:
  <>
  <input onClick={() =>{setMenu(!menu)}} checked={menu} type="checkbox" className="toggle"></input>
      <div className='menu-btn' >
      
        <div className="hmbrg"></div>
      </div>
      </>}
     
            </div>
        </div>
         <div className={`hmoverlay ${menu?"reveal":"non"}`}>
        <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"column",gap:"30px"}}>
            <div className='menu-ptn' style={{display:"flex",flexDirection:"column",gap:"20px",width:"100%"}}>
                <span onClick={()=>{history.push("/");setMenu(!menu)}} className={`${location.pathname==='/'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}}>Home</span>
                <span onClick={()=>{history.push("/events");setMenu(!menu)}}  className={`${location.pathname==='/events'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}} >Events</span>
                <span onClick={()=>{history.push("/contact");setMenu(!menu)}}  className={`${location.pathname==='/contact'?"span_menu_clr":"span_menu"}`} style={{color:`${general?.themeColor}`,fontWeight:"600",fontFamily: "'Roboto', sans-serif"}}>Contact us</span>
            </div>
            <div style={{display:"flex",width:"100%",gap:"15px",justifyContent:"space-between",borderTop:"1px solid gray",paddingTop:"30px"}} className="contact-div">
                <div  className="con_sub">
                    <h3>SOCIALS</h3>
                    <a style={{textDecoration:"none",color:"white"}} target="_blank" href={general?.instaurl}>Instagram</a>
                </div>
                <div  className="con_sub">
                    <h3>CONTACT</h3>
                    <span>{general?.generalmail}</span>
                </div>
            </div>
        </div>
         </div>
         </>
    )
}

export default Nav
