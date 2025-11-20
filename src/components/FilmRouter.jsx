import { HashRouter, Route, Routes } from "react-router";
import Home from "./Home";
import EventInfo from "./EventInfo";
import FilmDetails from "./FilmDetails";
import Bios from "./Bios";

export default function FilmRouter(){
    return <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<Home />} />
                <Route path='/event' index element={<EventInfo/>}/>
                <Route path='/details' index element={<FilmDetails/>}/>
                <Route path='/bios' index element={<Bios/>}/>
            </Route>
        </Routes>
    </HashRouter>
}