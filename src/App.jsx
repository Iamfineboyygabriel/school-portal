import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/authentication/LoginPage";
import SignUp from "./pages/authentication/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
