import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeBanner } from "../../components/HomeBanner";
import { PicturesFilter } from "../../components/PicturesFilter";
import { Gallery } from "../../components/ResponsiveGallery";
import { Spacer } from "./styles";

export function Home() {
    return (
        <div>
            <Header />
            <Spacer />
            <section id="home" />
            <HomeBanner />
            <section id="portfolio" />
            <PicturesFilter />
            <Gallery />
            <section id="contact" />
            <Footer />
        </div>
    );
}
