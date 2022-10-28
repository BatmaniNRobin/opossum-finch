import "./App.css";

import { ContextProvider } from "./Context";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import { DashBoardPage } from "./pages/DashBoardPage";
import { BadgeDetailPage } from "./pages/BadgeDetailPage";
import { BadgeCreationPage } from "./pages/BadgeCreationPage";
import SignInPage from "./pages/SignInPage";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// const isLoggedIn = (onAuthStateChanged(auth, (user) => {
//   console.log(user)
// }) ? true : false)
// // const isLoggedIn = (auth.user ? true : false);
// // console.log(auth.currentUser);

export default function App() {
  const navStyles = ({ isActive }) =>
    isActive
      ? {
          color: "#fff",
          background: "#7600dc",
        }
      : { color: "#545e6f", background: "#f0f0f0" };

  return (
    <section>
      {/* {auth ? ( */}
        <div>
          <ContextProvider>
            <BrowserRouter>
              <div className="container">
                {/* {
                  // isLoggedIn &&
                  <NavLink to={"/dashboard"} style={navStyles}>
                    Home
                  </NavLink>
                }
                {
                  // isLoggedIn &&
                  <NavLink to={"/badgeCreation"} style={navStyles}>
                    Badge Creation
                  </NavLink>
                } */}
              </div>
              <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/create" element={<BadgeCreationPage />} />
                <Route path="/dashboard" element={<DashBoardPage />} />
                <Route path="/detail/:badge" element={<BadgeDetailPage />} />
              </Routes>
            </BrowserRouter>
          </ContextProvider>
        </div>
      {/* ) : (
        <SignInPage />
      )} */}
    </section>
  );
}
