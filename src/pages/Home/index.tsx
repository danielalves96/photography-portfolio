import { Link } from "react-router-dom";

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
                            <Link to="/portfolio">PORTFÓLIO</Link>
                            <Link to="/about-me">SOBRE MIM</Link>
                            <Link to="/contact">CONTATO</Link>
                        </Links>
                    </div>
                </Content>
            </Container>
        </Main>
    );
}
