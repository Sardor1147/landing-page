import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/about";
import Create from "./components/Register/Create";
import Enter from "./components/Login/Enter";
import Blog from "./components/blog/blog";
import Dasturlash from "./components/dasturlash/dasturlash";
import Dizayn from "./components/dizayn/dizayn";
import Marketing from "./components/marketing/marketing";
import Foundation from "./components/foundation/foundation";
import Team from "./components/team/team";
function App() {
  return (
    <div className="container">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/login" element={<Enter/>}></Route>
      <Route path="/sign-up" element={<Create/>}></Route>
      <Route path="/kurs/online/dasturlash" element={<Dasturlash/>}></Route>
      <Route path="/kurs/online/dizayn" element={<Dizayn/>}></Route>
      <Route path="/kurs/online/marketing" element={<Marketing/>}></Route>
      <Route path="/kurs/online/dasturlash/foundation" element={<Foundation/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
