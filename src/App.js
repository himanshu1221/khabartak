import './App.css';
import  Header  from './components/common/header/Header';
import { Route, Routes} from 'react-router-dom'
import { Homepages } from './components/Homepages';


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<><Header/><Homepages/></>}></Route>
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