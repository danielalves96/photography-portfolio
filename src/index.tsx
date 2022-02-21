import "bulma/css/bulma.min.css";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./i18n";
import { PhotosProvider } from "./providers/photos.jsx";

ReactDOM.render(
    <React.StrictMode>
        <PhotosProvider>
            <App />
        </PhotosProvider>
    </React.StrictMode>,
    document.getElementById(`root`)
);
