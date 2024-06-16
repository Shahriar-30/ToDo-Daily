import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import NavBar from "./components/ReUse/navBar";
import ProfilePage from "./pages/ProfilePage";
import TodayPage from "./pages/TodayPage";

const App = () => {
  let location = useLocation();

  let allPath: string[] = ["/admin/profile", "/admin/today"];

  const showNavBar: boolean = allPath.includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/signup" element={<SignupPage />} />
        <Route path="/user/signin" element={<SigninPage />} />
        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/admin/today" element={<TodayPage />} />
      </Routes>
    </>
  );
};

export default App;
