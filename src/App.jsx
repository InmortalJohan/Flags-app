import "./App.css";
import "./Pages/Start.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Start from "./Pages/Start.jsx";
import Rootlayout from "./Layouts/Rootlayout.jsx";
import Country from "./Pages/Country.jsx"
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Start />} /> 
      <Route path=":id" element={<Country/>}/>
      <Route path="/country/:id" element={<Country />} />
    </Route>
      
  )
);

function App() {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
