import './App.css';
import  Header  from './components/common/header/Header';
import { Link, Router,Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route exact path = "/" element = {<><Header/></>}></Route>
      </Routes>
    </>
  );
}

export default App;
{/* <Route path='/' element = {<Home/>}/>
<Route path='/about' element = {<About/>}/>
<Route path='/politics' element = {<Politics/>}/>
<Route path='/meme' element = {<Meme/>}/>
<Route path='/sports' element = {<Sports/>}/>
<Route path='/boxed' element = {<Boxed/>}/>
<Route path='/reviews' element = {<Reviews/>}/> */}