import React, { useEffect, useState } from "react";
import dustbin from "@/assets/dustbin.png";
import pencil from "@/assets/pencil.png";
import { Button } from "@/components/ui/button";
import Input from "./Input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import personalInfoStore from "@/stores/PersonalInfoStore";

const Address = () => {
  // !State default values:-
  //   firstName: "",
  //   lastName: "",
  //   gender: "Male",
  //   mobile: "",
  //   email: "",
  //   add1: "",
  //   add2: "",
  //   postal: "",
  //   city: "",
  //   country: "",
  //   state: "",
  //   default: false,

  const { credentials, setCredentials } = personalInfoStore();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    console.log(credentials);
  }, [credentials]);
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  const empty = {
    firstName: "",
    lastName: "",
    gender: "Male",
    mobile: "",
    email: "",
    add1: "",
    add2: "",
    postal: "",
    city: "",
    country: "",
    state: "",
    default: false,
  };

  const cred = {
    firstName: "Ankit",
    lastName: "Bose",
    gender: "Male",
    mobile: "9580989205",
    email: "ankit@gmail.com",
    add1: "877",
    add2: "Near Phillips Play Center Sipri Bazar",
    postal: "284003",
    city: "Jhansi",
    country: "INDIA",
    state: "Uttar Pradesh",
    default: true,
  };

  const handleSwitch = (bool, cred) => {
    setOpen(bool);
    if (bool) setState({ ...cred });
  };

  const onChange = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const handleCheck = () => {
    const newError = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.mobile) newError.mobile = "Enter a Phone Number";
    else if (state.mobile.length != 10)
      newError.mobile = "Enter a valid phone number";
    if (!state.postal) newError.postal = "Enter a Postal Number";
    else if (state.postal.length != 6)
      newError.postal = "Enter a valid Zip/Postal code";
    if (!state.email) newError.email = "Enter your Email Id";
    else if (!emailRegex.test(state.email))
      newError.email = "Enter a valid Email Id";
    if (!state.firstName) newError.firstName = "Enter the First Name";
    if (!state.lastName) newError.lastName = "Enter the Last Name";
    if (!state.add1) newError.add1 = "Enter the Address Line 1";
    if (!state.add2) newError.add2 = "Enter the Address Line 2";
    if (!state.city) newError.city = "Enter your City";
    if (!state.country) newError.country = "Enter your Country";
    if (!state.state) newError.state = "Enter your State";
    return newError;
  };

  const handleForm = () => {
    const newError = handleCheck();
    if (Object.keys(newError).length !== 0) {
      setError({ ...newError });
      return;
    }
    if (Object.keys(error).length !== 0) setError({});
    setCredentials(state);
  };

  if (open)
    return (
      <div className="w-4/5 border-2 border-zinc-600 h-full overflow-y-scroll scrollbar-hidden rounded-2xl p-6 animate-slideLeft">
        {/* Heading & Back */}
        <div className="flex justify-between mb-12">
          <div className="text-4xl">Edit Address</div>
          <Button
            className="px-8 py-5 bg-theme-color1 hover:bg-green-700 cursor-pointer text-xl"
            onClick={() => handleSwitch(false)}
          >
            Back
          </Button>
        </div>
        {/* First Name & Last Name */}
        <div className="flex gap-6 mb-7">
          <div className="relative w-full">
            <Input
              head={"First Name"}
              value={state.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">
              {error.firstName}
            </div>
          </div>
          <div className="relative w-full">
            <Input
              head={"Last Name"}
              value={state.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">
              {error.lastName}
            </div>
          </div>
        </div>
        {/* Gender */}
        <div className="flex gap-6 mb-7">
          <div className="text-2xl">Gender:</div>
          <RadioGroup
            defaultValue={state.gender}
            className="flex gap-4"
            onValueChange={(val) => onChange("gender", val)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Male"
                id="Male"
                className="border-2 focus:border-green-300 cursor-pointer"
                indicator="fill-theme-color1"
              />
              <Label htmlFor="Male" className="text-xl cursor-pointer">
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Female"
                id="Female"
                className="border-2 focus:border-green-300 cursor-pointer"
                indicator="fill-theme-color1"
              />
              <Label htmlFor="Female" className="text-xl cursor-pointer">
                Female
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* Mobile & Email */}
        <div className="flex gap-6 mb-7 pb-7 border-b-2 border-zinc-500 border-dashed">
          <div className="relative w-full">
            <Input
              head={"Mobile"}
              type="number"
              value={state.mobile}
              onChange={(e) => onChange("mobile", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.mobile}</div>
          </div>
          <div className="relative w-full">
            <Input
              head={"Email"}
              value={state.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.email}</div>
          </div>
        </div>
        {/* Address 1 & Address 2 */}
        <div className="flex gap-6 mb-9">
          <div className="flex-[1]">
            <div className="relative w-full">
              <Input
                head={"Address Line 1"}
                value={state.add1}
                onChange={(e) => onChange("add1", e.target.value)}
              />
              <div className="">Hostel/Flat No.</div>
              <div className="absolute text-red-400 text-sm">{error.add1}</div>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="relative w-full">
              <Input
                head={"Address Line 2"}
                value={state.add2}
                onChange={(e) => onChange("add2", e.target.value)}
              />
              <div className="">Area, Street & Landmark</div>
              <div className="absolute text-red-400 text-sm">{error.add2}</div>
            </div>
          </div>
        </div>
        {/* Zip/Postal Code & City */}
        <div className="flex gap-6 mb-8">
          <div className="relative w-full">
            <Input
              head={"Zip/Postal Code"}
              type="number"
              value={state.postal}
              onChange={(e) => onChange("postal", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.postal}</div>
          </div>
          <div className="relative w-full">
            <Input
              head={"City/District"}
              value={state.city}
              onChange={(e) => onChange("city", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.city}</div>
          </div>
        </div>
        {/* Country & State */}
        <div className="flex gap-6 mb-7">
          <div className="relative w-full">
            <Input
              head={"Country"}
              value={state.country}
              onChange={(e) => onChange("country", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.country}</div>
          </div>
          <div className="relative w-full">
            <Input
              head={"State"}
              value={state.state}
              onChange={(e) => onChange("state", e.target.value)}
            />
            <div className="absolute text-red-400 text-sm">{error.state}</div>
          </div>
        </div>
        {/* Set as Default Address */}
        <div className="flex gap-2 mb-7">
          <Checkbox
            id="default"
            checked={state.default}
            onCheckedChange={(check) => onChange("default", check)}
            className="data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400 cursor-pointer"
          />
          <Label htmlFor="default" className=" cursor-pointer">
            Default Shipping Address
          </Label>
        </div>
        {/* Cancel & Save */}
        <div className="flex justify-end gap-6">
          <Button className="bg-red-400 hover:bg-red-600 px-8 cursor-pointer text-xl">
            Cancel
          </Button>
          <Button
            className="bg-green-400 hover:bg-green-600 px-8 cursor-pointer text-xl"
            onClick={handleForm}
          >
            Save
          </Button>
        </div>
      </div>
    );
  else
    return (
      <div className="w-3/5 animate-fadeIn">
        <div className="text-4xl mb-12">Address</div>
        <div
          onClick={() => handleSwitch(true, empty)}
          className="text-xl mb-10 text-theme-color1 px-4 py-8 border-t-3 border-b-3 border-theme-color1 border-dashed cursor-pointer hover:bg-zinc-100 transition-all ease-in-out"
        >
          + ADD NEW ADDRESS
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="text-xl">
              {cred.firstName} {cred.lastName}
            </div>
            <div className="flex gap-4">
              <img
                src={dustbin}
                alt=""
                className="h-11 w-10 p-3 cursor-pointer rounded-xl bg-red-200 active:bg-red-400"
              />
              <img
                src={pencil}
                alt=""
                className="h-11 w-10 p-3 cursor-pointer rounded-xl bg-green-200 active:bg-green-400"
                onClick={() => handleSwitch(true, cred)}
              />
            </div>
          </div>
          <div className="text-lg text-zinc-400">
            {cred.add1}, {cred.add2}, {cred.city}, {cred.state},{cred.postal}{" "}
            {cred.country}
            <div className="">Phone: {cred.mobile}</div>
          </div>
        </div>
      </div>
    );
};

export default Address;
