import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/portfolio" element={<Gallery />} />
                <Route path="/about-me" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
