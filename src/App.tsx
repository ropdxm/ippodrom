import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.tsx';
import './css/layout.css'
import Register from './components/Register.tsx';
import Login from './components/Login.tsx';
import Catalogue from './components/Catalogue.tsx';
import Order from './components/Order.tsx';
import { MyContext } from "./context.ts";
import Profile from "./components/Profile.tsx";
import Wrapper from "./components/Wrapper.tsx";
import { useState } from "react";
import type { UserType } from "./utils.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper Component={Home} />
  },
  {
    path: "/register",
    element: <Wrapper Component={Register} />
  },
  {
    path: "/login",
    element: <Wrapper Component={Login} />
  },
  {
    path: "/catalogue",
    element: <Wrapper Component={Catalogue} />
  },
  {
    path: "/order",
    element: <Wrapper Component={Order} />
  },
  {
    path: "/profile",
    element: <Wrapper Component={Profile} />
  }
])

const App = () => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <MyContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  )
}

export default App