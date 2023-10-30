import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Register from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/regis" element={<Register/>}/>


      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
