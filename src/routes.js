import AboutUs from "./components/Home/AboutUs";
import Adopt from "./pages/Adopt/Adopt";
import Contact from "./pages/Contact/Contact";
import Donate from "./pages/Donate/Donate";
import Home from "./pages/Home/Home";
import Volunteer from "./pages/Volunteer/Volunteer";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    },
    {
        path: "/adopt",
        exact: true,
        main: () => <Adopt/>
    },
    {
        path: "/contact",
        exact: true,
        main: () => <Contact/>
    },
    {
        path: "/donate",
        exact: true,
        main: () => <Donate/>
    },
    {
        path: "/volunteer",
        exact: true,
        main: () => <Volunteer/>
    },
    {
        path: "/about-us",
        exact: true,
        main: () => <AboutUs/>
    },
]

export default routes