import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import { useSelector } from "react-redux";
import SearchModal from "./components/SearchModal";

import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  HomePage,
  AboutUsPage,
  ContactUsPage,
  DeveloperPage,
  ProfilePage,
  SearchPage,
  AuthPage,
  SignUpPage,
  SamplePage,
} from "./pages";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGoogleUser } from "./redux/slices/AuthSlice";
function App() {
  const { isSearchOpen } = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setGoogleUser(JSON.parse(user)));
    }// addding comment
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 h-screen w-screen border border-none">
      <Router>
        <Navbar />

        <main className="">
          <Routes>
            <Route path="/" element={<HomekkPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/sample" element={<SamplePage />} />

            <Route
              path="/auth"
              element={
                <GoogleOAuthProvider
                  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                >
                  <AuthPage />
                </GoogleOAuthProvider>
              }
            />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <BottomNavbar />
        {isSearchOpen && <SearchModal />}
      </Router>
    </div>
  );
}

export default App;
