import Address from "./views/Address";
import Education from "./views/Education";
import GetStarted from "./views/GetStarted";
import Login from "./views/Login";
import PersonalInfo from "./views/PersonalInfo";
import Programme from "./views/Programme";
import Register from "./views/Register";


export const routes = [
    // {
    //     name: "Get Started",
    //     path: "/",
    //     element: <GetStarted />,

    // },
    {
        name: "Login",
        path: "/login",
        element: <Login />,

    },
    {
        name: "Register",
        path: "/register",
        element: <Register />,

    },
    {
        name: "Personal",
        path: "/personalinfo",
        element: <PersonalInfo />,

    },
    {
        name: "Education",
        path: "/education",
        element: <Education />,

    },
    {
        name: "Programme",
        path: "/programmes",
        element: <Programme />,

    },

];