import "animate.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import homeImage from "../../assets/images/jpg/cigano.jpg";
import logoHome from "../../assets/images/png/LogoHome.png";
import { ContainerImg, ContainerText, LogoHome } from "./styles";

export function HomeBanner() {
    const { t } = useTranslation();
    return (
        <ContainerImg>
            <img
                src={homeImage}
                alt="Owner"
                className="animate__animated animate__fadeIn animate__slow "
            />
            <LogoHome>
                <img
                    src={logoHome}
                    alt="Logo"
                    className="animate__animated animate__flipInX animate__slow"
                />
            </LogoHome>
            <ContainerText className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
                <ul>
                    <li>
                        <HashLink smooth to="/#portfolio">
                            {` `}
                            {`>`} {t(`homeBanner.PORTFOLIO`)}
                        </HashLink>
                    </li>
                    <li>
                        <Link to="projects">
                            {`>`} {t(`homeBanner.PROJECTS`)}
                        </Link>
                    </li>
                    <li>
                        <Link to="about-me">
                            {`>`} {t(`homeBanner.ABOUT_ME`)}
                        </Link>
                    </li>
                    <li>
                        <Link to="contact">
                            {`>`} {t(`homeBanner.CONTACT`)}
                        </Link>
                    </li>
                </ul>
            </ContainerText>
        </ContainerImg>
    );
}
