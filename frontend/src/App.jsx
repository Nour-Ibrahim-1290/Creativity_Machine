import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';


// Import pages
import Layout from './layout';
import MachineWelcome from './pages/machine/Welcome';
import MachineInstruct from './pages/machine/Instructions';
import MachinePickDevice from './pages/machine/PickDevice';



import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPasswordRequest from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';



import Account from './pages/settings/Account';
import Feedback from './pages/settings/Feedback';


import { Provider } from 'react-redux';
import store from './store';



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <Provider store={store}>

      <Layout>
        <Routes>
          
          {/* Signing in routes */}
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ResetPasswordRequest />} />
          <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />

          {/** Creativity Machine Sequance Routes */}
          <Route path="/machine/welcome" element={<MachineWelcome />} />
          <Route path="/machine/instructions" element={<MachineInstruct />} />
          <Route path="/machine/pickdevice" element={<MachinePickDevice />} />
          
          
          {/** Creativity Machine History Routes */}
          


          {/** User Account */}
          <Route path="/settings/account" element={<Account />} />


          {/** Feedback */}
          <Route path="/settings/feedback" element={<Feedback />} />
          


          {/** Defaults */}
          <Route path="/utility/empty-state" element={<EmptyState />} />
          <Route path="/utility/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />


          
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
