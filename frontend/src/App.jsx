import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import './App.css'
import Services from './components/services'
import Login from './components/Login'
import Signup from './components/Signup'
// import About from './components/About'
import PlanningServices from './components/PlanningServices'
import LaunchingServices from './components/LaunchingServices'
import ManagingServices from './components/ManagingServices'
import AddServices from './components/AddServices'
import { AppProvider } from '../AppContext'
import { SnackbarProvider } from 'notistack'
import Roadmap from './components/Roadmap'
import UserAuth from './UserAuth';
import Pmanage from './components/Pmanage'
import Lmanage from './components/Lmanage'
import Mmanage from './components/Mmanage'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
import ViewService from './components/ViewService'
import Contact2 from './components/Contact2'
import Admin from './components/Admin/Index'
import Header from './components/Admin/Header'
import Main from './components/Admin/Index';
import Sidebar from './components/Admin/Sidebar'
import Base from './components/Admin/Base'
// import ExpertChat from './components/ExpertCaht'
// import UserChat from './components/UserChat'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              
              <Route path='/PlanningServices' element={<PlanningServices />} />
              <Route path='/LaunchingServices' element={<LaunchingServices />} />
              <Route path='/ManagingServices' element={<ManagingServices />} />
              <Route path='/AddServices' element={<UserAuth><AddServices /> </UserAuth> } />
              <Route path='/Roadmap' element={<Roadmap />} />
              <Route path='/Contact2' element={<Contact2 />} />
              <Route path='/Pmanage' element={<Pmanage />} />
              <Route path='/Lmanage' element={<Lmanage />} />
              <Route path='/Mmanage' element={<Mmanage />} />
              <Route path='/UserProfile' element={<UserAuth><UserProfile /></UserAuth>} />
              <Route path='/view/:id' element={<ViewService />} />
              <Route path='/Dashboard' element={<Dashboard />} /> 
              <Route path='/Admin' element={<Main />} >
                <Route path='Header' element={<Header />} />
                <Route path='Base' element={<Base />} />
                {/* <Route path='/Main' element={<Index />} /> */}
                {/* <Route path='Sidebar' element={<Sidebar />} /> */}
              </Route>

              {/* <Route path='/ExpertChat' element={<ExpertChat />} /> 
              <Route path='/UserChat' element={<UserChat />} />  */}

            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App