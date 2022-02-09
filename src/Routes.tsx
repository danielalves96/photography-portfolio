import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
    return (
        <Router>
            <Route exact component={Home} />
            <Route path="*" component={NotFound} />
        </Router>
    );
}
