import './App.css'
import { ContextProvider } from './Context'
import {BrowerRouter, Router, Route, Routes} from "react-router-dom"

// Import the functions you need from the SDKs you need
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {useAuthState} from 'react-firebase-hooks';
import {useCollectionData} from 'react-firebase-hooks/firestore';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <ContextProvider>
      <BrowerRouter>
        <Router>
          <Routes>
            {/* <Route path='/'></Route> */}
            <div className='App'>

            </div>
          </Routes>
        </Router>
      </BrowerRouter>
    </ContextProvider>
  )
}
