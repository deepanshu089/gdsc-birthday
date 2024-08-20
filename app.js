import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Quiz from "./components/Quiz";
import Party from "./components/Party";
import Wishes from "./components/Wishes";
import { Outlet } from "react-router-dom";
import Timer from "./components/Timer";
import Album from "./components/Album";





const AppLayout=() =>{
    return(
        <div className="app">
        <Header/>
      
        <Outlet/>
        </div>
     );
};

const appRouter =createBrowserRouter([
    {path:"/",
     element:<AppLayout/> ,
    children:[
        {path:"/quiz",
            element:<Quiz/> 
           },
           {path:"/party",
            element:<Party/> 
           },
           {path:"/wishes",
            element:<Wishes/> 
           },
           {path:"/",
            element:<Timer/> 
           },
           {path:"/album",
            element:<Album/> 
           }
    ],
}
  ]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
