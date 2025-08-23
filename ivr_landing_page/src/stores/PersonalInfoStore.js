import { create } from "zustand";

const personalInfoStore = create((set, get) => ({
  credentials: {
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
  },
  normalPrescription: {
    sph_od: 0,
    sph_os: 0,
    cyl_od: 0,
    cyl_os: 0,
    axis_od: 0,
    axis_os: 0,
    pd: 0,
    age: false,
  },
  sphericalPrescription: {
    sph_od: 0,
    sph_os: 0,
    box_od: 0,
    box_os: 0,
    age: false,
  },
  setCredentials: (cred) => set({ credentials: cred }),
  setNormalPrescription: (pres) => {
    console.log("from setNormalPrescription",pres)
    set((state) => (state.normalPrescription = pres));
  },
  setSphericalPrescription: (pres) => {
    console.log("from setSphericalPrescription", pres);
    set((state) => (state.sphericalPrescription = pres));
  },
}));
// set((state) => newState, true)

export default personalInfoStore;
// const [error, setError] = useState({});
