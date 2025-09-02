// src/Routing.tsx



import Landing from './pages/Landing/Landing'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import VerificationPage from './pages/Login/VerficationPage';
import Signup from './pages/signup/Signup';
import Payment from './pages/payment/Payment';
import CreateProject from './pages/CreateProject/CreateProject';
import Dashboard from './pages/dashboard/dashboard';
import Project from './pages/project/Project';
import MyCampaigns from './pages/my campaigns/MyCampaigns';
import MyContributions from './pages/myContributions/MyContributions';

export default function Routing() {
  return (
    <div>
      <Routes>        
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/login/verify' element={<VerificationPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/create-campaign' element={<CreateProject/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/mycampaigns' element={<MyCampaigns/>}/>
        <Route path='/mycontributions' element={<MyContributions/>}/>
      </Routes>
    </div>
  );
}