import "animate.css";

import { useTranslation } from "react-i18next";

import logoHeader from "../../assets/images/png/logoWhite.png";
import { Container, Controls } from "./styles";

export function Header() {
    const { t } = useTranslation();
    return (
        <div className="header">
            <Container className="animate__animated animate__fadeIn animate__slow ">
                <Controls>
                    <a href="/">
                        <img
                            src={logoHeader}
                            alt="logo"
                            width="230"
                            style={{ display: `flex ` }}
                        />
                    </a>
                </Controls>
                {/* <Translator>
                    <I18n />
                </Translator> */}
            </Container>
        </div>
    );
}
