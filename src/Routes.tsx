import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import NovaVistoria from "./pages/NovaVistoria";
import Header from "./components/header";

export default function Rotas () {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element ={<Login/>}/>
                <Route path = "/home" element ={<Home/>}/>
                <Route path = "/NovaVistoria" element = {<NovaVistoria/>}/>
            </Routes>
        </BrowserRouter>
    )
}