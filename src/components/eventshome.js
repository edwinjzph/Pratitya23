import React, { useCallback, useEffect, useState } from 'react'
import "./all.css"
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField , IconButton} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Eventshome = ({events,general,cate}) => {
  const location = useLocation();
  const [search,setSearch] = useState("")
  const [events2,setEvents] = useState()
  const [categorieid,setCategorieid] = useState(100)


  useEffect(()=>{
    setEvents(events)
  },[events])
  useEffect(() => {
    if(search===""){
      setEvents(events)
    }
  
  }, [search])
  useEffect(() => {
    if(location?.pathname==='/events'){
      document.title = "Events";
    }
  }, [location]);
  const handleChange = useCallback((e,menu) => {
    if(e.target.value===""){
      setEvents(events)
    }
    if(e.target){
      const {value } = e.target;
      setSearch( value );
      function  searchfilterfun(value2){
        if(value2[1]?.Event_name.toString().toLowerCase().includes(value.toLowerCase()) || value2[1]?.description.toString().toLowerCase().includes(value.toLowerCase())){
          return value2[0]
        }
      }
      const searchfilter= Object.entries(menu)?.filter(searchfilterfun)
     const filtered ={}
      searchfilter.map(value =>{
filtered[value[0]] =value[1]
      })
      setEvents(filtered)
    } 
  },[search]);
  useEffect(() => {
    if(search===""){
      filtercategorie(100)
    }
  
  }, [search])
    
  function filtercategorie(id){
    setCategorieid(id)
    if(id===100){
  setEvents(events)
    }else{
      const filtered = Object.entries(events).filter(innerfilter)
      function innerfilter(value){
        if(value[1]?.categorieid ===id){
  
          return value
        }
      }
      const filteredcate ={}
      filtered.map(value =>{
filteredcate[value[0]] =value[1]
      })
      setEvents(filteredcate)
      
    setEvents(filteredcate)
    }
  
  }
if(general)
  return (
    <div className='events_home' id='event' style={{paddingBottom:"20px",marginTop:`${location.pathname==='/events'?"80px":"20px"}`,}}>
      <div style={{width:"90%",margin:"auto"}}>
      <h1 >Events</h1> 
      <div className="search">

<TextField value={search} onChange={e => {handleChange(e,events)}} color='action' fullWidth label="SEARCH" id="fullWidth"    InputProps={{
startAdornment: (
  <InputAdornment position="start">
    <SearchIcon />
  </InputAdornment>

),
endAdornment: (
  search!=="" ?
  <IconButton disabled={search===""} onClick={() => setSearch("")} >
    <ClearIcon />
  </IconButton>:""
)
}}/></div>
   <div className='categorie_list'>
    <div onClick={() => {filtercategorie(100)}}  className={`categorie_select ${100===categorieid?"selected":""}`} style={{  border:`.5px solid ${general?.themeColor}`,backgroundColor:`${100===categorieid?`${general?.themeColor}`:""}`}}>
  <p>All</p>
</div>
{cate&& Object.entries(cate).map(value => {
  return(
<div key={value[0]} onClick={() => {filtercategorie(value[0])}} className={`categorie_select ${value[0]===categorieid?"selected":""}`} style={{  border:`.5px solid ${general?.themeColor}`,backgroundColor:`${value[0]===categorieid?`${general?.themeColor}`:""}`}}>
  <p>{value[1].cate}</p>
</div>

  )
})}
    </div>
<Grid container spacing={1} style={{marginTop:"6px",width:"85%",margin:"auto"}} rowSpacing={3} >
{events2 && Object.entries(events2).map(([Id,eventData]) =>
{
         return(
     
          <Grid key={Id} item xs={12} sm={6} md={4}>
                 <Link to={`event/${Id}`}>
<div  className='card' style={{display:"flex",flexDirection:"column",position:"relative",maxWidth:"300px",margin:"auto", boxShadow:  `${general?.themeColor}  0px 3px 8px `,borderRadius:"20px"}}>
  <img  alt={eventData?.Event_name} style={{height:"400px",objectFit:"cover",maxWidth:"300px ",borderRadius:"15px"}} src={eventData?.imageurl}></img>
  <div className='crd_cnt' style={{padding:"15px",display:"flex",flexDirection:"column",gap:"7px",background:"black",borderRadius:"15px",position:"absolute",bottom:"0",width:"100%"}}>
  <h3 style={{fontSize:"25px",fontWeight:"300"}}>{eventData?.Event_name}</h3>
  { (eventData?.registration===false || general?.registration===false) && <p style={{fontSize:"15px",fontWeight:"500",color:"red"}}>Registration Closed</p>
  }
  </div>
  <div style={{position:"absolute",top:"0",padding:"10px",background:`${general?.themeColor}`,borderRadius:"15px 0 0 0"}}>
  <h5 style={{fontSize:"10px",color:"black"}}>{eventData?.date}</h5>
  </div>

</div>
</Link>
          </Grid>
        
)
})}
</Grid>
      </div>

    </div>
  )
}

export default Eventshome