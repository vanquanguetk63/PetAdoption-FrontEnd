import Home from "./components/Home/Home";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    }
]

export default routes