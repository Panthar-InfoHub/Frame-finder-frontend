// import Navbar from "@/components/Navbar/navbar";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import FilterPage from "./FilterPage/FilterPage";
import ProductPage from "./ProductPage/ProductPage";
import CustomizationPage from "./CustomizationPage/CustomizationPage";
import OnBoardingForm from "./components/OnBoardingForm/OnBoardingForm";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/onBoard" element={<OnBoardingForm />} />
      <Route path="/customize" element={<CustomizationPage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
// <div className="min-h-screen w-full">
// <HomePage/>
{/* <FilterPage/> */}
{/* <ProductPage/> */}
{/* <CustomizationPage/> */}
{/* <OnBoardingForm/> */}
// </div>
