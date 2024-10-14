import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';


// Import pages
import Shop from './pages/machine/Shop';
import Product from './pages/machine/Product';
import UsersTiles from './pages/machine/UserTiles';
import CompanyProfile from './pages/machine/CompanyProfile';


import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';


import Account from './pages/settings/Account';
import Feedback from './pages/settings/Feedback';



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); 

  return (
    <>
      <Routes>

        {/* <Route exact path="/" element={<Landing />} /> */}
        
        {/* Signing in routes */}
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />

        {/** Creativity Machine Sequance Routes */}
        <Route path="/ecommerce/shop" element={<Shop />} />
        <Route path="/ecommerce/product" element={<Product />} />
        <Route path="/community/users-tiles" element={<UsersTiles />} />
        <Route path="/job/company-profile" element={<CompanyProfile />} />


        {/** My Account */}
        <Route path="/settings/account" element={<Account />} />


        {/** Feedback */}
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/utility/faqs" element={<Faqs />} />


        {/** Defaults */}
        <Route path="/utility/empty-state" element={<EmptyState />} />
        <Route path="/utility/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />


        
      </Routes>
    </>
  );
}

export default App;
