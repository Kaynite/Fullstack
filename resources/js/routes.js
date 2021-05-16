import Home from "./components/Home";
import Test from "./views/Template";

let routes = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/test",
        component: Test,
        name: "Test"
    },
];

export default routes;
