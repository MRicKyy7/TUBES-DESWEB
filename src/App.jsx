import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import DetailJsPage from "./pages/DetailJsPage";
import DetailPyPage from "./pages/DetailPyPage";
import DetailHtmlPage from "./pages/DetailHtmlPage";
import DetailCssPage from "./pages/DetailCssPage";
import Detail from "./pages/DetailPage";
import DetailJsBeginnerPage from "./pages/DetailJsBeginnerPage";
import DetailPyIntermediatePage from "./pages/DetailPythonIntermediatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regis" element={<Register />} />
          <Route path="/detailPython" element={<DetailPyPage/>} />
          <Route path="/detailJS" element={<DetailJsPage />} />
          <Route path="/detailHtml" element={<DetailHtmlPage />} />
          <Route path="/detailCss" element={<DetailCssPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detailJsBeginner" element={<DetailJsBeginnerPage />} />
          <Route path="/detailPythonintermediate" element={<DetailPyIntermediatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
