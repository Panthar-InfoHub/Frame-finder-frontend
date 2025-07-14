import React, { useEffect, useState } from "react";
import { Menu, Home, Folder, Users, Settings, ChevronRight, ChevronLeft } from "lucide-react"; // using lucide-react for icons
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterComponent from "./components/FilterComponent";
import ProductCard from "./components/ProductCard";
import eyeGlass1 from "@/assets/eyeGlass1.jpg";
import FilterPageAdd from "@/assets/FilterPageAdd.jpg";
import Footer from "@/HomePage/components/Footer";
import FilterPageTopImage from "@/assets/FilterPageTopImage.jpg";

// const FilterPage = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [filters, setFilters] = useState([]);

//   useEffect(() => {
//     console.log(filters.forEach((val) => console.log(val)));
//   }, [filters]);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const filterItems = [
//     {
//       type: "Category",
//       filters: ["EyeGlasses", "SunGlasses", "Frames"],
//     },
//     {
//       type: "Brand",
//       filters: ["Clarity", "RetroSpecs", "UrbanView", "SunGuard", "Visionary"],
//     },
//     {
//       type: "Style",
//       filters: ["Classic", "Modern", "Retro", "Sporty"],
//     },
//     {
//       type: "Material",
//       filters: ["Metal", "Plastic", "Mixed", "Titanium"],
//     },
//     {
//       type: "Price Range",
//       filters: [],
//     },
//   ];

//   const funcFilters = (filterValue, present) => {
//     if (present) setFilters((prevfilters) => [...prevfilters, filterValue]);
//     else
//       setFilters((prevfilters) =>
//         prevfilters.filter((val) => val !== filterValue)
//       );
//   };

//   return (
//     <div
//       className={`h-screen bg-[#FBFBFB] text-black  transition-all duration-300 ${
//         isCollapsed ? "w-0" : "w-100"
//       } flex justify-center items-center overflow-hidden`}
//     >
//       <div className="w-3/5 flex flex-col">
//         {/* Toggle Button */}
//         <div className="flex items-center justify-between p-4">
//           {!isCollapsed && <h1 className="text-[22px] font-bold">Filters</h1>}
//           <button onClick={toggleSidebar}>
//             <Menu />
//           </button>
//         </div>

//         {/* Navigation */}
//         <ScrollArea className="h-[800px] w-full ">
//           {filterItems.map((item, idx) => (
//             <div key={idx} className=" px-3 py-2 rounded mb-6">
//               <div className="font-bold text-lg mb-5">{item.type}</div>
//               <div className="flex flex-col gap-5">
//                 {item.filters.map((filter, idx) => (
//                   <div className="flex gap-4" key={idx}>
//                     <Checkbox
//                       checked={filters.includes(filter)}
//                       onCheckedChange={(value) => funcFilters(filter, value)}
//                       id={filter}
//                     />
//                     <label
//                       htmlFor={filter}
//                       className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                     >
//                       {filter}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//               {/* {!isCollapsed && <span>{item.label}</span>} */}
//             </div>
//           ))}
//         </ScrollArea>
//       </div>
//     </div>
//   );
// };

const FilterPage = () => {
  // ?to set the filter section collapsed or not collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);
  // ?to set filters
  const [filters, setFilters] = useState([]);
  // ?to set filtered products
  const {filteredProducts, setFilteredProducts} = useState([]);
  // ? contains products from API
  let products;

  useEffect(() => {
    // !TODO: IMPLEMENT API FOR GETTING ALL PRODUCTS
    // ? set products declared on line 105 to the products returnedefrom API
    // ? set filteredProducts to products
  },[])

  useEffect(() => {
    // !TODO: SET filteredProducts ACCORDING TO FILTERS
    console.log(filters.forEach((val) => console.log(val)));
  }, [filters]);

  // !TODO: IMPLEMENT RESET FUNCTION WHICH WORKS WHEN RESET ON LINE 167 IS CLICKED

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const filterItems = [
    {
      type: "Category",
      filters: ["EyeGlasses", "SunGlasses", "Frames"],
    },
    {
      type: "Brand",
      filters: ["Clarity", "RetroSpecs", "UrbanView", "SunGuard", "Visionary"],
    },
    {
      type: "Style",
      filters: ["Classic", "Modern", "Retro", "Sporty"],
    },
    {
      type: "Material",
      filters: ["Metal", "Plastic", "Mixed", "Titanium"],
    },
    {
      type: "Price Range",
      filters: [],
    },
  ];

  const funcFilters = (filterValue, present) => {
    if (present) setFilters((prevfilters) => [...prevfilters, filterValue]);
    else
      setFilters((prevfilters) =>
        prevfilters.filter((val) => val !== filterValue)
      );
  };
  return (
    <div className="w-full">
      <div className="w-full h-screen flex justify-center items-center mb-20" style={{ overflow: "hidden",backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundImage: `url(${FilterPageTopImage})` }}>
        <div className="text-white font-bold text-[150px] w-fit">EYEWARE GLASSES</div>
      </div>
      <div className="text-2xl font-bold w-4/5 mx-auto flex justify-between mb-12">
        <div className="flex justify-between items-center gap-2 px-3 py-2 rounded-md hover:bg-zinc-100 cursor-pointer active:bg-zinc-200" onClick={toggleSidebar}>
          <div className="">FILTERS</div>
          {isCollapsed?<ChevronRight className="w-7 h-7 text-green-400"/>:<ChevronLeft className="w-7 h-7 text-green-400"/>}
        </div>
        {/* SET FILTEREDPRODUCTS.LENGTH IN PLACE OF FILTERS.LENGTH */}
        <div className="">{filters.length} PRODUCTS</div>
        {/* IMPLEMENT RESET FUNCTION */}
        <div className="">RESET</div>
      </div>
      <div className="flex gap-14">
        <FilterComponent
          isCollapsed={isCollapsed}
          filters={filters}
          filterItems={filterItems}
          funcFilters={funcFilters}
        />
        <div className="max-w-4/5 mx-auto">
          {/* FILTER LIST */}
          <div className="flex flex-wrap gap-4 h-fit mb-10">
            {filters.map((val) => (
              <div className="px-4 py-3 bg-[#E8EDF5] font-[500] rounded-md">{val}</div>
            ))}
            {/* <div className="px-4 py-3 bg-[#E8EDF5] font-[500] rounded-md">
              EyeGlasses
            </div>
            <div className="px-4 py-3 bg-[#E8EDF5] font-[500] rounded-md">
              SunGlasses
            </div>
            <div className="px-4 py-3 bg-[#E8EDF5] font-[500] rounded-md">
              Frames
            </div>
            <div className="px-4 py-3 bg-[#E8EDF5] font-[500] rounded-md">
              All
            </div> */}
          </div>

          {/* PRODUCT LIST */}
          <div className="flex gap-10 flex-wrap">
            {/*  */}
            {Array.from({ length: 15 }).map((_, index) => (
              <ProductCard key={index} image={eyeGlass1} />
            ))}
          </div>
        </div>
      </div>
      {/* FILTER PAGE ADD */}
      <div className="w-4/5 mx-auto mt-26 h-100">
        <img
          src={FilterPageAdd}
          className="w-full h-full"
          alt="Addvertisments"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default FilterPage;
