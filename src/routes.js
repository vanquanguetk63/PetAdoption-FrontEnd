import Home from "./pages/Home/Home";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    }
]

export default routes