import "animate.css";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function Footer() {
    const { t } = useTranslation();
    return (
        <Container className="animate__animated animate__fadeIn animate__slow ">
            <span>
                © {t(`footer.DEVELOPED_BY`)} <strong>Daniel L. Alves</strong> @
                {new Date().getFullYear()}
            </span>
        </Container>
    );
}
