import "./App.css";
import HomePage from "./HomePage/HomePage";
import FilterPage from "./FilterPage/FilterPage";
import ProductPage from "./ProductPage/ProductPage";
import CustomizationPage from "./CustomizationPage/CustomizationPage";
import OnBoardingForm from "./components/OnBoardingForm/OnBoardingForm";
import { Route, Routes } from "react-router";
import CheckOutPage from "./CheckOutPage/CheckOutPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/onBoard" element={<OnBoardingForm />} />
      <Route path="/customize" element={<CustomizationPage />} />
      <Route path="/filter/:type" element={<FilterPage />} />
      <Route path="/product/:type" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
