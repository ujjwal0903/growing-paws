import Homepage from './body/sections/export-all';
import SignIn from './pages/Sign-up-page';
import Login from './pages/Login_page'
import { Route, Routes } from 'react-router-dom';
import Webstory from './utility/webstory';

export default function Routing(){
    return (
        <>
      {/* ---- THIS IS FOR THE HOMEPAGE COMPONENTS ------*/}

      <Routes>
        {/* <Homepage/> */}
        <Route path='/' element={<Homepage/>} />

        {/* ----SIGN-IN PAGE COMPONENT----- */}
        <Route path='signup' element={<SignIn/>} />
        {/* <SignIn/> */}

        {/* -----Login Page--------- */}
          <Route path='login' element={<Login/>}/>

           {/*Web stories  */}
           <Route path='webstory' element={<Webstory/>}/>
      </Routes>

      
    </>
    );
}