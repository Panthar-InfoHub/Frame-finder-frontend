import React, { useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import BackGround from "@/assets/back.png";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import RatingStars from "./RatingStars";
// import { createHTML, sendMail } from "./Mail";
// const { createHTML, sendMail } = require("./Mail.js");

const OnBoardingForm = () => {
  const [form, setForm] = useState({
    bussinessName: "",
    fullName: "",
    email: "",
    city: "",
    role: "",
    gst: "yes",
    gstno: "",
    state: "",
    phone: "",
    password: "",
    pincode: "",
    website: "yes",
    insta: "yes",
    marketPlace: "yes",
    address: "",
    businessTypeOptions: [],
    productCategories: [],
  });

  const [rating, setRating] = useState(0); // selected rating

  const [errors, setErrors] = useState({});

  // const bussinessNameRef = useRef(null);
  // const fullNameRef = useRef(null);
  // const gstnoRef = useRef(null);
  // const addressRef = useRef(null);
  // const stateRef = useRef(null);
  // const cityRef = useRef(null);
  // const phoneRef = useRef(null);
  // const roleRef = useRef(null);
  // const pincodeRef = useRef(null);
  // const emailRef = useRef(null);
  // const businessTypeOptionsRef = useRef(null);
  // const productCategoriesRef = useRef(null);

  const fieldRefs = {
    bussinessName: useRef(),
    fullName: useRef(),
    address: useRef(),
    gstno: useRef(),
    state: useRef(),
    city: useRef(),
    phone: useRef(),
    role: useRef(),
    pincode: useRef(),
    email: useRef(),
    businessTypeOptions: useRef(),
    productCategories: useRef(),
  };

  const productCategories = [
    "Spectacles With Prescribed Lenses",
    "Sunglasses",
    "Contact Lenses",
    "Lens Solutions",
    "Accessories (Cases, Selvets, Chains, etc.)",
  ];
  const bussinessTypeOptions = [
    "Individual Seller (Through Instagram, WhatsApp or Website)",
    "Retail Store",
    "Manufacturer",
    "Wholesaller",
    "Distributor",
    "Others",
  ];

  const handleChange = (key, value) => {
    console.log(key, value);
    if (key != "bussinessTypeOptions" && key != "productCategories")
      setForm({ ...form, [key]: value });
    else if (key == "bussinessTypeOptions") {
      if (!form.businessTypeOptions.includes(value))
        setForm({
          ...form,
          businessTypeOptions: [...form.businessTypeOptions, value],
        });
      else
        setForm({
          ...form,
          businessTypeOptions: form.businessTypeOptions.filter(
            (val) => val !== value
          ),
        });
    } else if (key == "productCategories") {
      if (!form.productCategories.includes(value))
        setForm({
          ...form,
          productCategories: [...form.productCategories, value],
        });
      else
        setForm({
          ...form,
          productCategories: form.productCategories.filter(
            (val) => val !== value
          ),
        });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.bussinessName.trim())
      newErrors.bussinessName = "Bussiness Name is required";
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (form.gst.trim() == "yes" && !form.gstno.trim())
      newErrors.gstno = "GST No. is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.phone.trim()) newErrors.phone = "Phone No. is required";
    else if(form.phone.length != 10)newErrors.phone = "Phone No. should be of 10 digits";
    if (!form.role.trim()) newErrors.role = "Role is required";
    if (!form.pincode.trim()) newErrors.pincode = "PinCode is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (form.businessTypeOptions.length == 0)
      newErrors.businessTypeOptions = "Select atleast 1 Business Type";
    if (form.productCategories.length == 0)
      newErrors.productCategories = "Select atleast 1 Product Category";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // console.log("✅ Ratings:", rating);
      // if(!rating){
        const formObj={...form,rating};
      // }
      console.log("✅ Form submitted:", formObj);
      // try {
      //   const html = createHTML({ ...form, rating });
      //   const info = await sendMail(html);
      //   console.log(info)
      // } catch (error) {
      //   console.error(error);
      // }
      // Submit form to API or handle onboarding flow
    } else {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      if (firstErrorKey && fieldRefs[firstErrorKey]?.current) {
        fieldRefs[firstErrorKey].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        fieldRefs[firstErrorKey].current.focus();
      }
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-blue-100">
        <img src={BackGround} className="w-full h-full object-cover" alt="bg" />
      </div>

      <div class="relative z-10 text-white">
        <Navbar />
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 w-2xl space-y-6 mx-auto my-50"
        >
          <div className="text-xl font-bold text-center text-gray-600 mt-4">
            Bussiness Details
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">
              Do you have GST Registration
            </label>

            <RadioGroup
              defaultValue="yes"
              onValueChange={(val) => setForm({ ...form, gst: val })}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="yes" id="r1" />
                <Label htmlFor="r1" className="text-gray-700 text-lg">
                  YES
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="no" id="r2" />
                <Label htmlFor="r2" className="text-gray-700 text-lg">
                  NO
                </Label>
              </div>
            </RadioGroup>

            {form.gst == "yes" && (
              <div className="">
                <label className="block text-gray-700 mb-1 text-lg">
                  Enter your GST No.
                </label>
                <input
                  ref={fieldRefs.gstno}
                  type="text"
                  name="gstno"
                  value={form.gstno}
                  onChange={(e) => handleChange("gstno", e.target.value)}
                  className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.gstno && (
                  <p className="text-red-500 text-sm mt-1">{errors.gstno}</p>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">
              Bussiness Name
            </label>
            <input
              ref={fieldRefs.bussinessName}
              type="text"
              name="bussinessName"
              value={form.bussinessName}
              onChange={(e) => handleChange("bussinessName", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.bussinessName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.bussinessName}
              </p>
            )}
          </div>

          <div ref={fieldRefs.businessTypeOptions}>
            <label className="block text-gray-700 mb-1 text-lg">
              Bussiness Type
            </label>
            {bussinessTypeOptions.map((option, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox
                  id={`option-${index}`}
                  checked={form.businessTypeOptions.includes(option)}
                  onCheckedChange={() =>
                    handleChange("bussinessTypeOptions", option)
                  }
                />
                <label
                  htmlFor={`option-${index}`}
                  className="text-gray-700 leading-snug text-lg"
                >
                  {option}
                </label>
              </div>
            ))}
            {errors.businessTypeOptions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessTypeOptions}
              </p>
            )}
          </div>

          <div className="text-xl font-bold text-center text-gray-600 mt-15">
            Store Location
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">Address</label>
            <input
              ref={fieldRefs.address}
              type="text"
              name="address"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">City</label>
            <input
              ref={fieldRefs.city}
              type="text"
              name="city"
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">State</label>
            <input
              ref={fieldRefs.state}
              type="text"
              name="state"
              value={form.state}
              onChange={(e) => handleChange("state", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">PinCode</label>
            <input
              ref={fieldRefs.pincode}
              type="text"
              name="pincode"
              value={form.pincode}
              onChange={(e) => handleChange("pincode", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
            )}
          </div>

          <div className="text-xl font-bold text-center text-gray-600 mt-15">
            Contact Person
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">
              Full Name
            </label>
            <input
              ref={fieldRefs.fullName}
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">Email</label>
            <input
              ref={fieldRefs.email}
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">
              Designation/Role
            </label>
            <input
              ref={fieldRefs.role}
              type="text"
              name="role"
              value={form.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg">
              Phone No.
            </label>
            <input
              ref={fieldRefs.phone}
              type="number"
              name="phone"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div ref={fieldRefs.productCategories}>
            <label className="block text-gray-700 mt-10 text-lg">
              Product Categories you offer
            </label>
            {productCategories.map((option, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Checkbox
                  id={`option-${index}`}
                  checked={form.productCategories.includes(option)}
                  onCheckedChange={() =>
                    handleChange("productCategories", option)
                  }
                />
                <label
                  htmlFor={`option-${index}`}
                  className="text-lg text-gray-700 leading-snug"
                >
                  {option}
                </label>
              </div>
            ))}
            {errors.productCategories && (
              <p className="text-red-500 text-sm mt-1">
                {errors.productCategories}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-lg mt-10">
              Online Presence
            </label>
            <div className="flex items-center justify-between">
              <label className="block text-gray-700 mb-1 text-lg">
                Website
              </label>

              <RadioGroup
                defaultValue="yes"
                className="flex"
                onValueChange={(val) => setForm({ ...form, website: val })}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1" className="text-gray-700 text-lg">
                    YES
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2" className="text-gray-700 text-lg">
                    NO
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center justify-between">
              <label className="block text-gray-700 mb-1 text-lg">
                Instagram / Facebook Page:
              </label>

              <RadioGroup
                defaultValue="yes"
                className="flex"
                onValueChange={(val) => setForm({ ...form, insta: val })}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1" className="text-gray-700 text-lg">
                    YES
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2" className="text-gray-700 text-lg">
                    NO
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center justify-between">
              <label className="block text-gray-700 mb-1 text-lg">
                Marketplace Store Links (Amazon, Flipkart, etc.):
              </label>

              <RadioGroup
                defaultValue="yes"
                className="flex"
                onValueChange={(val) => setForm({ ...form, marketPlace: val })}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1" className="text-gray-700 text-lg">
                    YES
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2" className="text-gray-700 text-lg">
                    NO
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mt-10 text-lg">
              Why Join FrameFinder?
            </label>
            <ul className="text-gray-700 list-disc text-lg">
              <li>Zero onboarding fee during the pre-launch phase</li>
              <li>Early access to promotions and marketing support</li>
              <li>Dedicated dashboard to manage products and orders</li>
              <li>Customer base focused purely on eyewear</li>
              <li>Sell your product to Pan-India</li>
            </ul>
          </div>

          <div>
            <label className="block text-gray-700 mt-10 mb-5 text-lg">
              How Much Do you like this New Startup Ecommerce Platform?
            </label>
            <RatingStars
              onRate={(value) => console.log("Rated:", value)}
              rating={rating}
              setRating={setRating}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-10"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default OnBoardingForm;
