import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NewGallery } from "../../components/NewGallery/index.jsx";
import { ResposiveGallery } from "../../components/ResponsiveGallery/index.jsx";
import { Sidebar } from "../../components/Sidebar";

export function Gallery() {
    return (
        <div>
            <Header />
            <Sidebar />
            {/* <ResposiveGallery /> */}
            <NewGallery />
            <Footer />
        </div>
    );
}
