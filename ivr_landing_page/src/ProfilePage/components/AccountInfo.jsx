import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const AccountInfo = () => {
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
  });
  // useEffect(()=>{
  //   console.log(account)
  // },[account])
  return (
    <div className="animate-fadeIn">
      <div className=" text-4xl mb-10">Account Information</div>
      <div className="flex gap-6 w-2/5 h-fit mb-8">
        <div className="flex-[1] h-fit space-y-3">
          <div className="text-xl">First Name</div>
          <input
            type="text"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            className="w-full border-2 h-12 text-2xl px-2 rounded-lg focus:border-green-300 focus:ring-offset-2 focus:ring-2 outline-none focus:ring-green-300"
          />
        </div>
        <div className="flex-[1] h-fit space-y-3">
          <div className="text-xl">Last Name</div>
          <input
            type="text"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            className="w-full border-2 h-12 text-2xl px-2 rounded-lg focus:border-green-300 focus:ring-offset-2 focus:ring-2 outline-none focus:ring-green-300"
          />
        </div>
      </div>
      <div className="flex gap-6 w-2/5 h-fit pb-15 border-b-2">
        <div className="flex-[1] h-fit space-y-3">
          <div className="text-xl">Phone</div>
          <input
            type="number"
            value={account.phone}
            onChange={(e) => setAccount({ ...account, phone: e.target.value })}
            className="w-full border-2 h-12 text-2xl px-2 rounded-lg focus:border-green-300 focus:ring-offset-2 focus:ring-2 outline-none focus:ring-green-300 appearance-none  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="flex-[1] h-fit space-y-3">
          <div className="text-xl">Gender</div>
          <select
            name=""
            id=""
            onChange={(e) => setAccount({ ...account, gender: e.target.value })}
            className="w-full border-2 h-12 text-2xl px-2 appearance-none cursor-pointer rounded-lg focus:border-green-300 focus:ring-offset-2 focus:ring-2 outline-none focus:ring-green-300"
          >
            <option defaultChecked hidden>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <Button className="bg-theme-color1 cursor-pointer px-4 py-6 text-lg mt-15 hover:bg-green-700">
        Save & Continue
      </Button>
    </div>
  );
};

export default AccountInfo;
