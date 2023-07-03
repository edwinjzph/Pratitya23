import { useEffect, useState,lazy,Suspense} from 'react';
import './App.css';
import db from './firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from './components/loader';




const Footer = lazy(() => import('./components/footer'));
const Home = lazy(() => import('./components/home'));
const Event = lazy(() => import('./components/event'));
const Contents= lazy(() => import('./components/contents'));
const Throwback = lazy(() => import('./components/throwback'));
const Nav = lazy(() => import('./components/Nav'));
const Eventshome = lazy(() => import('./components/eventshome'));
const Contact = lazy(() => import('./components/contact'));




function App() {
  const [events, setEvents] = useState();
  const [images, setImages] = useState();
  const [general, setGeneral] = useState();
  const [cate, setCate] = useState();


  useEffect(() =>{
    const unsubscribe =  db.collection('general')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          setGeneral(doc.data())
      });
  });
    return () =>{
      unsubscribe();
  
    }
        },[])
useEffect(() =>{
  const unsubscribe =  db.collection('events').where("active","==",true).orderBy("price", "desc")
  .onSnapshot((querySnapshot) => {
    const event  = {};
    querySnapshot.forEach((doc) => {
        event[doc.id] = doc.data()
    });
    setEvents(event)
});

  return () =>{
    unsubscribe();

  }
      },[])

      useEffect(() =>{
        const unsubscribe =  db.collection('images')
        .onSnapshot((querySnapshot) => {
          const image = {};
          querySnapshot.forEach((doc) => {
              image[doc.id] = doc.data()
          });
          setImages(image)
      });
      
        return () =>{
          unsubscribe();
      
        }
            },[])
            useEffect(() =>{
              const unsubscribe =  db.collection('categories')
              .onSnapshot((querySnapshot) => {
                const cate = {};
                querySnapshot.forEach((doc) => {
                    cate[doc.id] = doc.data()
                });
                setCate(cate)
            });
            
              return () =>{
                unsubscribe();
            
              }
                  },[])
            useEffect(() => {
              if(general){
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = general?.favicon;}
            }, [general]);
 
           
  return (
    <div className="App">
      {!general || !events || !images?
      <Loader/>:
      
      <BrowserRouter>
         <Suspense fallback={<Loader/>} >
         <Nav general={general}/>
      </Suspense>
      <Switch>
        <Route exact path="/"> 
 <Suspense fallback={<Loader/>} >
 <Home general={general}/>
 <Contents general={general} />
 <Eventshome events={events} general={general} cate={cate}/>
 <Throwback  images={images} general={general}/>
 <Footer general={general}/>
      </Suspense>
        </Route>
        <Route exact path="/event/:id">
        <Suspense fallback={<Loader/>} >
        <Event events={events} general={general}/>
      </Suspense>
        </Route>
        <Route exact path="/events">
        <Suspense fallback={<Loader/>} >
        <Eventshome events={events} general={general} cate={cate}/>
      </Suspense>     
        </Route> 
        <Route exact path="/contact">
        <Suspense fallback={<Loader/>} >
        <Contact general={general}/>
      </Suspense>
        </Route>
      </Switch>
      </BrowserRouter>
    }
    </div>
  );
}

export default App;
