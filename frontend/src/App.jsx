import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "../src/Components/Home/HomePage"
import PublicNavbar from "../src/Components/Navbar/PublicNavbar";
import LoginForm from "../src/Components/Users/Login";
import RegistrationForm from "../src/Components/Users/Register";

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
