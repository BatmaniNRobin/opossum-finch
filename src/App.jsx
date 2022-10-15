import './App.css';

import { ContextProvider } from './Context';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

import { DashBoardPage } from "./pages/DashBoardPage";
import { BadgeDetailPage } from "./pages/BadgeDetailPage";
import { BadgeCreationPage } from "./pages/BadgeCreationPage";

// Import the functions you need from the SDKs you need
// import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import {useAuthState} from 'react-firebase-hooks';
// import {useCollectionData} from 'react-firebase-hooks/firestore';

import fireBaseAPI from './api/fireBaseAPI';

// Initialize Firebase
const app = initializeApp(fireBaseAPI);
const analytics = getAnalytics(app);

export default function App() {
  
  const navStyles =  ({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#7600dc',
        }
      : { color: '#545e6f', background: '#f0f0f0' }

  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <div className="container">
            <NavLink to={"/"} style={navStyles}>
              Home
            </NavLink>
            <NavLink to={"/badgeCreation"} style={navStyles}>
              Badge Creation
            </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<BadgeCreationPage />} /> {/* fixme change this back to DashBoardPage */}
            <Route path="/detail/:badge" element={<BadgeDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}
