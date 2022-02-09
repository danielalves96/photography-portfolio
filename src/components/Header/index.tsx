import "animate.css";
import { useTranslation } from "react-i18next";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import logoHeader from "../../assets/images/png/logoHeader.png";
import { I18n } from "../i18n";
import {
    Container,
    Buttons,
    Dropdown,
    Controls,
    Translator,
    TranslatorDropdown,
} from "./styles";

export function Header() {
    const { t } = useTranslation();
    return (
        <div className="header">
            <Container className="animate__animated animate__fadeIn animate__slow ">
                <Controls>
                    <img src={logoHeader} alt="logo" />
                    <Buttons>
                        <a href="/#" className="button is-light" type="button">
                            {t(`header.HOME`)}
                        </a>
                        <HashLink
                            smooth
                            to="/#portfolio"
                            className="button is-light"
                            type="button"
                        >
                            {t(`header.PORTFOLIO`)}
                        </HashLink>
                        <Link
                            to="projects"
                            className="button is-light"
                            type="button"
                        >
                            {t(`header.PROJECTS`)}
                        </Link>
                        <Link
                            to="about-me"
                            className="button is-light"
                            type="button"
                        >
                            {t(`header.ABOUT_ME`)}
                        </Link>
                        <Link
                            to="contact"
                            className="button is-light"
                            type="button"
                        >
                            {t(`header.CONTACT`)}
                        </Link>
                    </Buttons>
                    <Dropdown>
                        <div className="dropdown is-right is-hoverable">
                            <div className="dropdown-trigger">
                                <button
                                    className="button"
                                    aria-haspopup="true"
                                    aria-controls="dropdown-menu"
                                    type="button"
                                >
                                    <AiOutlineMenu />
                                </button>
                            </div>
                            <div
                                className="dropdown-menu"
                                id="dropdown-menu"
                                role="menu"
                            >
                                <div className="dropdown-content">
                                    <a href="/#" className="dropdown-item">
                                        {t(`header.HOME`)}
                                    </a>
                                    <HashLink
                                        smooth
                                        to="/#portfolio"
                                        className="dropdown-item"
                                    >
                                        {t(`header.PORTFOLIO`)}
                                    </HashLink>
                                    <a href="/#" className="dropdown-item">
                                        {t(`header.PROJECTS`)}
                                    </a>
                                    <a href="/#" className="dropdown-item">
                                        {t(`header.ABOUT_ME`)}
                                    </a>
                                    <a href="/#" className="dropdown-item">
                                        {t(`header.CONTACT`)}
                                    </a>
                                    <TranslatorDropdown>
                                        <I18n />
                                    </TranslatorDropdown>
                                </div>
                            </div>
                        </div>
                    </Dropdown>
                </Controls>
                <Translator>
                    <I18n />
                </Translator>
            </Container>
        </div>
    );
}
