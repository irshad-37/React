import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/grocery",
            element:(
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
            )
        }
      ]
    }
]);

const rootEle=ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(
    <RouterProvider router={router}/>
);