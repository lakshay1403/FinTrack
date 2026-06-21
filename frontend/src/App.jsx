import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "../Components/Home/HomePage"
import PublicNavbar from "../Components/Navbar/PublicNavbar";
import LoginForm from "../Components/Users/Login";
import RegistrationForm from "../Components/Users/Register";

function App() {
  return (
    <BrowserRouter>
    <PublicNavbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Login" element = {<LoginForm/>} />
        <Route path="/register" element = {<RegistrationForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
