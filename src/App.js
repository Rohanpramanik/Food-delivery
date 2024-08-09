import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./appStore/store";
import Cart from "./components/Cart";
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <ToastContainer />
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
};

const  appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Contact",
                element: <Suspense><Contact /></Suspense>
            },
            {
                path: "/Restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/Cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);