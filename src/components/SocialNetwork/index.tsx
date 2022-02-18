import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { Container } from "./styles";

export function SocialNetwork() {
    return (
        <div className="ContactForm animate__delay-1s animate__animated animate__fadeIn animate__slow">
            <Container>
                <a
                    href="https://www.instagram.com/gsrega/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsInstagram color="#fff" size={40} />
                </a>
                <a
                    href="https://www.linkedin.com/in/gsrega/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin color="#fff" size={40} />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=+554196507727"
                    target="_blank"
                    rel="noreferrer"
                >
                    <IoLogoWhatsapp color="#fff" size={45} />
                </a>
                <a href="mailto:gabrielsrega@gmail.com">
                    <MdEmail color="#fff" size={50} />
                </a>
            </Container>
        </div>
    );
}
