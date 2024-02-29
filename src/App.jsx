import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-yellow">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
