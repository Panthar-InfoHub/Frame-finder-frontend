// import Navbar from "@/components/Navbar/navbar";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import FilterPage from "./FilterPage/FilterPage";
import ProductPage from "./ProductPage/ProductPage";
import CustomizationPage from "./CustomizationPage/CustomizationPage";
import OnBoardingForm from "./components/OnBoardingForm/OnBoardingForm";

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* <HomePage/> */}
      {/* <FilterPage/> */}
      {/* <ProductPage/> */}
      {/* <CustomizationPage/> */}
      <OnBoardingForm/>
    </div>
  );
}

export default App;
