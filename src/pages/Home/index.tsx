import React from "react";

import Logo from "../../assets/images/png/logoHorizontal.png";
import { Container, Content, Image, Links, Main } from "./styles";

export function Home() {
    return (
        <Main>
            <Container>
                <Content>
                    <div className="animate__animated animate__fadeIn animate__slow">
                        <Image src={Logo} alt="Rega" />
                    </div>
                    <div className="animate__delay-1s animate__animated animate__fadeIn animate__slow">
                        <Links>
                            <a href="/portfolio">PORTFÓLIO</a>
                            <a href="/about-me">SOBRE MIM</a>
                            <a href="/contact">CONTATO</a>
                        </Links>
                    </div>
                </Content>
            </Container>
        </Main>
    );
}
