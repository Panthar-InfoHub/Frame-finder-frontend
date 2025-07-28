import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router';


const CustomButton = () => {
  // const handleClick=()=>{
  //   console.log("clicked")
  //   window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfZ5T619PSJyjsPxJrNVYDgOP9gDW_I811OaA8_51k-Aa--7w/viewform?usp=dialog"
  // }
  return (
    <Button className="px-4 py-6 text-lg rounded-md text-center bg-green-300 text-black active:bg-green-500 hover:bg-green-400 cursor-pointer"><Link to="/onBoard">Onboard Now!</Link></Button>
  )
}

export default CustomButton