
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainBody from './components/mainBody/MainBody';
import Admin from "./components/admin/Admin";



function App() {
  return (
    <>
    <Routes>
    {/* <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/' element={<Intro/>}/>
    <Route path='/Skill' element={<Skill/>}/>
    <Route path='/Projects' element={<Projects/>}/> */}
    <Route path='/' element={<MainBody/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    {/* <Route path='/Footer' element={<Footer/>}/> */}
    </Routes>
      {/* <Navbar/>
      <Intro/>
      <Skill/>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route exact path="/admin" Component={Admin}/>
      </Routes>
      <Footer/> */}
    </>
  );
}

export default App;
