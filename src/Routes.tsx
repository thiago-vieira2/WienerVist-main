import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import NovaVistoria from "./pages/NovaVistoria";
import Header from "./components/header";
import Profile from "./pages/Profile";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />


            <div className="flex items-center justify-center">
                <Routes>


                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/NovaVistoria" element={<NovaVistoria />} />
                    <Route path="/Perfil" element={<Profile/>} />



                </Routes>
            </div>
        </BrowserRouter>
    )
}