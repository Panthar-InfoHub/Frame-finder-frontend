import React, { useEffect, useState } from "react";
import { Menu, Home, Folder, Users, Settings } from "lucide-react"; // using lucide-react for icons
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
// import FilterComponent from "./components/FilterComponent";

const FilterComponent = ({filters,toggleSidebar,filterItems,funcFilters}) => {
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

  return (
    // <div
    //   className={`h-screen bg-[#FBFBFB] text-black rounded-4xl ease-in-out transition-all duration-300 ${
    //     isCollapsed ? "w-0" : "min-w-100"
    //   } flex justify-center items-center overflow-hidden`}
    // >
      <>
      <div className="w-3/5 flex flex-col">
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-[22px] font-bold">Filters</h1>
        </div>

        {/* Navigation */}
        <ScrollArea className="h-[800px] w-full ">
          {filterItems.map((item, idx) => (
            <div key={idx} className=" px-3 py-2 rounded mb-6">
              <div className="font-bold text-lg mb-5">{item.type}</div>
              <div className="flex flex-col gap-5">
                {item.filters.map((filter, idx) => (
                  <div className="flex gap-4" key={idx}>
                    <Checkbox
                      checked={filters.includes(filter)}
                      onCheckedChange={(value) => funcFilters(filter, value)}
                      id={filter}
                    />
                    <label
                      htmlFor={filter}
                      className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {filter}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      </>
    // </div> 
  );
};

export default FilterComponent;
