import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SetBackgroundContext from "./Context/SetBackgroundContext.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import Blog from "./Components/Blog.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Card from "./Components/Card.jsx";
import FProductDetails from "./Sections/FProductDetails.jsx";
import MainContext from "./Context/MainContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<FProductDetails />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Cart" element={<Card />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <SetBackgroundContext>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </SetBackgroundContext>
    </MainContext>
  </StrictMode>
);
