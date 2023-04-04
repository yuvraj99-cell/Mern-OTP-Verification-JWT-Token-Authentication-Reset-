import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/* ===============import all components================ */

import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import UserName from './components/UserName';

/* ===============Import End ======================= */



/*===================All routes======================= */



const router= createBrowserRouter([
  {
    path : '/',
    element:<UserName>UserName</UserName>
  
  },
  {
    path : '/register',
    element:<Register>Register Route</Register>
  
  },
  {
    path : '/profile',
    element:<Profile>Profile</Profile>
  
  },
  
  {
    path : '/password',
    element:<Password>Password</Password>
  
  },
  {
    path : '/recovery',
    element:<Recovery>Recovery </Recovery>
  
  },
  {
    path : '/reset',
    element:<Reset>Reset</Reset>
  
  },
  {
    path : '*',
    element:<PageNotFound>Page Not found </PageNotFound>
  
  },


  /* ==================All routes ends======================  */

])
function App() {
  return (
    <main>
   
     <RouterProvider router={router}></RouterProvider>

  </main>
  );
}

export default App;
