import "react-toastify/dist/ReactToastify.min.css";

import { ContactForm } from "../../components/ContactForm";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SocialNetwork } from "../../components/SocialNetwork";
import { Spacer } from "../Gallery/styles";
import { Main } from "./styles";

export function Contact() {
    return (
        <Main>
            <Header />
            <Sidebar />
            <Spacer />
            <ContactForm />
            <SocialNetwork />
        </Main>
    );
}
