import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Edit from "./components/Edit";
import Tables from "./test/Tables";
import Home from "./test/Home";
import Other from "./test/Other";

export default function App() {
  return (
    <div>

       {/* <-------------- use local storage --------------> */}

      {/* <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<Add />} />
      </Routes> */}

{/* <------------- use location use ke liye ------------> */}
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/add" element={<Home />} />
      </Routes>
    </div>
  );
}
