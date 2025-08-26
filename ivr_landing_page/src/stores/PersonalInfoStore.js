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
  sunGlassPrescription: {
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
  toricPrescription: {
    sph_od: 0,
    sph_os: 0,
    power_od: 0,
    power_os: 0,
    axis_od: 0,
    axis_os: 0,
    box_od: 1,
    box_os: 1,
    age: false,
  },
  multiFocalPrescription: {
    sph_od: 0,
    sph_os: 0,
    power_od: 0,
    power_os: 0,
    box_od: 1,
    box_os: 1,
    age: false,
  },
  setCredentials: (cred) => set({ credentials: cred }),
  setSunGlassPrescription: (pres) => {
    console.log("from setSunGlassPrescription",pres)
    set((state) => (state.sunGlassPrescription = pres));
  },
  setSphericalPrescription: (pres) => {
    console.log("from setSphericalPrescription", pres);
    set((state) => (state.sphericalPrescription = pres));
  },
  setToricPrescription: (pres) => {
    console.log("from setToricPrescription", pres);
    set((state) => (state.toricPrescription = pres));
  },
  setMultiFocalPrescription: (pres) => {
    console.log("from multiFocalPrescription", pres);
    set((state) => (state.multiFocalPrescription = pres));
  },
}));
// set((state) => newState, true)

export default personalInfoStore;
// const [error, setError] = useState({});
