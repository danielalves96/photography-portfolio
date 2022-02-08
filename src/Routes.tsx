import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
