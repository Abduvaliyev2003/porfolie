import { Suspense, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./companent/footer/Footer";
import Header from "./companent/header/Header";
import Meadia from "./companent/media/Meadia";
import { getAboutData, getHomeHeadData, getBigProData, getContactMedData, getContactTData, getMyFunData,getSkllisData,getSmallProData} from "./slice/GetApiRes";
import { PublicRouter } from "./routes";
import axios from "./servise/axios";
import Loading from "./companent/loading/Loading";
import MediaHeader from "./companent/header/MediaHeader";
const array = ['home_head', 'about', 'my_fun', 'big_project', 'small_project', 'contact_t', 'contact_media', 'skills']
function getObject(){
      const data = array?.map(async (el) => {
        const res = await axios.get(`${el}`, {
          headers: {
            'Accept-Language': localStorage.getItem('lang') || 'uz'
          }
        })
        return res.data
      })
      const arr =    Promise.all(data).then((values) => {
        return values
      })
     
      return arr
}


function App() {
  
  const {data, error , isError, isLoading} = useQuery('getObject' ,  getObject)
  const dispatch = useDispatch();


  useEffect(() => {
    const aboutData = data?.filter((el, i) => {
      if(  i == 1){
        return el
      }
    })
    const homeData = data?.filter((el, i) => {
      if(  i == 0){
        return el.data
      }
    })
    const myFunData = data?.filter((el, i) => {
      if(  i == 2){
        return el.data
      }
    })
    const bigProject  = data?.filter((el, i) => {
      if(  i == 3){
        return el.data
      }
    })
    const smallPro  = data?.filter((el, i) => {
      if(  i == 4){
        return el.data
      }
    })
    const contactT   = data?.filter((el, i) => {
      if(  i == 5){
        return el.data
      }
    })
    const contactM  = data?.filter((el, i) => {
      if(  i == 6){
        return el.data
      }
    })
    const skillsData  = data?.filter((el, i) => {
      if(  i == 7){
        return el.data
      }
    })
     dispatch(getAboutData(aboutData))
     dispatch(getHomeHeadData(homeData))
     dispatch(getMyFunData( myFunData))
     dispatch(getBigProData(bigProject))
     dispatch(getSmallProData(smallPro))
     dispatch(getContactMedData(contactM))
     dispatch(getContactTData(contactT))
     dispatch(getSkllisData(skillsData))
   }, [data])
   useEffect(() => {
    AOS.init();
  }, [])
  const useOutsideClick = (callback) => {
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };
  if(isLoading) {return <Loading />}
  if(isError) {console.log(error.message)}

  return (
    <Router>
     
      <header className="fixed top-0 w-full bg-[#282C33] z-10 ">
        <Header />
        <MediaHeader useOutsideClick={useOutsideClick}/>
      </header>
       <main className="relative sm:mt-[110px] md:mt-[90px]">
         
           <Suspense fallback={<Loading />}>
              <Routes>
                {PublicRouter?.map((route, i) => (
                  <Route key={route.path + i} path={route.path} element={route.element} />
                ))}
              </Routes>
           </Suspense>
        
       </main>
       <ToastContainer position='top-right' />
      <footer className=" border-t-[1px] border-solid border-gray mt-[60px]">
        <Footer />
      </footer>
      </Router>
  );
}

export default App;
