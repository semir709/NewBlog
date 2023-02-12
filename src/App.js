import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./containers/Home";
import Article from "./containers/Article";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import About from "./containers/About";
import Contact from "./containers/Contact";
function App() {
  return (
    <>
      <Navigation />

      <div className=" mt-[70px] flex justify-center">
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/article/:slug" element={<Article />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
