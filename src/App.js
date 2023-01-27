import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
function App() {
  return (
    <>
      <Navigation />

      <div className=" mt-[150px]">
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/article" element={<p>Article</p>}></Route>
          <Route path="/contact" element={<p>Contact</p>}></Route>
          <Route path="/about" element={<p>About me</p>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
