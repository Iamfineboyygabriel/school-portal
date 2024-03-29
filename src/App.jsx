import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authentication/LoginPage";
import SignUp from "./pages/authentication/SignUp";
import Portal from "./pages/dashboardPage/sections/Portal";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </BrowserRouter>
  );
}
