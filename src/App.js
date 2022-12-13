import './App.css';
import  Header  from './components/common/header/Header';
import { Route, Routes} from 'react-router-dom'
import { Homepages } from './components/Homepages';
import Culture from './components/culture/Culture';
import Footer from './components/common/footer/Footer';
import Singlepages from './components/SinglePages/Singlepages';
import Heading from './components/Heading/Heading';


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<><Homepages/></>}></Route>
        <Route path = "/culture" element = {<><Header/><Culture/><Footer/></>}></Route> 

      </Routes>
    </>
  );
}

export default App;

/* <Route path='/' element = {<Home/>}/>
<Route path='/about' element = {<About/>}/>
<Route path='/politics' element = {<Politics/>}/>
<Route path='/meme' element = {<Meme/>}/>
<Route path='/sports' element = {<Sports/>}/>
<Route path='/boxed' element = {<Boxed/>}/>
<Route path='/reviews' element = {<Reviews/>}/> */