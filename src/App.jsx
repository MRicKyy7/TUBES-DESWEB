import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regis" element={<Register />} />
          <Route path="/detail" element={<DetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
