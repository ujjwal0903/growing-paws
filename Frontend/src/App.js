
import Homepage from './body/sections/export-all';
import SignIn from './pages/Sign-up-page';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      {/* ---- THIS IS FOR THE HOMEPAGE COMPONENTS ------*/}

      <Routes>
        {/* <Homepage/> */}
        <Route path='/' element={<Homepage/>} />

        {/* ----SIGN-IN PAGE COMPONENT----- */}
        <Route path='/signup' element={<SignIn/>} />
        {/* <SignIn/> */}
      </Routes>
    </>
  );
}
