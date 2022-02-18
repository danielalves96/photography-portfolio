import "animate.css";

import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function Footer() {
    const { t } = useTranslation();

    return (
        <Container className="animate__animated animate__fadeIn animate__slow ">
            <span>
                © {t(`footer.DEVELOPED_BY`)}
                {` `}
                <b>
                    <a
                        href="https://daniel-luiz-alves.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Daniel L. Alves
                    </a>
                    {` `}
                </b>
                {` `}@{new Date().getFullYear()}
            </span>
        </Container>
    );
}
