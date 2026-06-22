import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "../src/Components/Home/HomePage"
import PublicNavbar from "../src/Components/Navbar/PublicNavbar";
import LoginForm from "../src/Components/Users/Login";
import RegistrationForm from "../src/Components/Users/Register";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import { getUserFromStorage } from "./utils/GetUserFromStorage";

function App() {
  const token = getUserFromStorage();
  return (
    <BrowserRouter>
    {token ? <PrivateNavbar/> : <PublicNavbar/>}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Login" element = {<LoginForm/>} />
        <Route path="/register" element = {<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
