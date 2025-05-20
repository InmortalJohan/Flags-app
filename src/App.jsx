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
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Start />} />
      
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
