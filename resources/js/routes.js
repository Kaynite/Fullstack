import Home from "./components/Home";
import Test from "./components/Test";

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
