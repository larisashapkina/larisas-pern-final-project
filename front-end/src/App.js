import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className= "App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stilettos" element={<Index />} />
            <Route path="/stilettos/:id" element={<Show />} />
            <Route path="/stilettos/new" element={<New />} />
            <Route path="/stilettos/:id/edit" element={<Edit/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
