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
  prescription: {
    sph_od: undefined,
    sph_os: undefined,
    cyl_od: undefined,
    cyl_os: undefined,
    axis_od: undefined,
    axis_os: undefined,
    spherical_od:undefined,
    spherical_os:undefined,
    box_od:undefined,
    box_os:undefined,
    pd: undefined,
    age: false,
    save: false,
  },
  setCredentials: (cred) => set({ credentials: cred }),
  setPrescription: (pres) => set({ prescription: pres }),
}));

export default personalInfoStore;
// const [error, setError] = useState({});
