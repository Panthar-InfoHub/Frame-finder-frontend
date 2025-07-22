// import Navbar from "@/components/Navbar/navbar";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import FilterPage from "./FilterPage/FilterPage";
import ProductPage from "./ProductPage/ProductPage";
import CustomizationPage from "./CustomizationPage/CustomizationPage";

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* <HomePage/> */}
      {/* <FilterPage/> */}
      {/* <ProductPage/> */}
      <CustomizationPage/>
    </div>
  );
}

export default App;
