import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
function Throwback({images,general}) {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [slides, setSlides] = useState(2);

      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
  
      useEffect(() =>{
          function setwidth(){
              if( windowSize.innerWidth>1100){
                  setSlides(2)
              }   
              if( windowSize.innerWidth<900){  
                  setSlides(1)
              }
        
                  }
                  setwidth()
      },[windowSize])
      var settings = {
        dots: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 4000,
        speed: 500,
        Infinity:true,
        slidesToShow: slides,
        slidesToScroll: slides
      }
    
      if(general)
  return (
    <div style={{width:"100%",background:`linear-gradient(0deg,${general?.themeColor},#0000)`}} className='throwback' >
          <h1>#Throwback</h1>
        <div style={{width:"85%",margin:"auto",marginTop:"20px"}}>
      
        <Slider {...settings} >

 
{images && Object.values(images).map((value,id) =>{
 
    return(
      <div key={id} className='img_div'>
<img alt='throwback' src={value?.img} style={{height:"300px" ,width:"500px",objectFit:"cover",borderRadius:"10px",zIndex:"200000000",margin:"auto"}}/>
      </div>
       
    )
    
}) }

</Slider>

        </div>
   
 
     
    </div>
  )
}

export default Throwback