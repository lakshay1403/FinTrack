import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "../src/Components/Home/HomePage"
import PublicNavbar from "../src/Components/Navbar/PublicNavbar";
import LoginForm from "../src/Components/Users/Login";
import RegistrationForm from "../src/Components/Users/Register";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
import AddCategory from "./Components/Category/Addcategory";
import CategoriesList from "./Components/Category/CategoryList";
import UpdateCategory from "./Components/Category/UpdateCategory";
import TransactionForm from "./Components/Transactions/TransactionForm";
import Dashboard from "./Components/Users/Dashboard";



function App() {
  const user = useSelector((state)=> state?.auth?.user);
  return (
    <BrowserRouter>
    {user ? <PrivateNavbar/> : <PublicNavbar/>}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Login" element = {<LoginForm/>} />
        <Route path="/register" element = {<RegistrationForm/>} />
        <Route path="/add-category" element = {<AddCategory/>} />
        <Route path="/categories" element = {<CategoriesList/>} />
        <Route path="/update-category/:id" element = {<UpdateCategory/>} />
        <Route path="/add-transaction" element = {<TransactionForm/>}/>
        <Route path="/dashboard" element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
