import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import { useSelector } from "react-redux";
import SearchModal from "./components/SearchModal";

import {
  HomePage,
  AboutUsPage,
  ContactUsPage,
  DeveloperPage,
  ProfilePage,
  SearchPage,
} from "./pages";

function App() {
  const { isSearchOpen } = useSelector((state) => state.UI);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen w-screen border border-none">
      <Router>
        <Navbar />

        <main className="pt-0 pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />

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
