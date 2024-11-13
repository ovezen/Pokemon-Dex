import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home 페이지 라우트 */}
        <Route path="/dex" element={<Dex />} /> {/* Dex 페이지 라우트 */}
      </Routes>
    </Router>
  );
};

export default App;
