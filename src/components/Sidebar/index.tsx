/* eslint-disable react/jsx-no-bind */
import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import logo from "../../assets/images/png/logoWhite.png";
import { Title, LogoSpacer } from "./styles";

export function Sidebar() {
    function closeSidebar() {
        const button = document.getElementById(
            `react-burger-cross-btn`
        ) as HTMLElement;

        button.click();
    }

    return (
        <Menu customBurgerIcon={<GiHamburgerMenu />}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <LogoSpacer />
            <Title>TRABALHOS</Title>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio` }}
                onClick={closeSidebar}
            >
                &nbsp;- TODOS
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `fine_art` }}
                onClick={closeSidebar}
            >
                &nbsp;- FINE ART
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `studio` }}
                onClick={closeSidebar}
            >
                &nbsp;- ESTÚDIO
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `external` }}
                onClick={closeSidebar}
            >
                &nbsp;- ENSAIOS EXTERNOS
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `marriage` }}
                onClick={closeSidebar}
            >
                &nbsp;- CASAMENTOS
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `pre_wedding` }}
                onClick={closeSidebar}
            >
                &nbsp;- PRÉ CASAMENTO
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `theater` }}
                onClick={closeSidebar}
            >
                &nbsp;- TEATRO
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `15yo` }}
                onClick={closeSidebar}
            >
                &nbsp;- 15 ANOS
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `gastronomy` }}
                onClick={closeSidebar}
            >
                &nbsp;- GASTRÔNOMIA
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `children` }}
                onClick={closeSidebar}
            >
                &nbsp;- INFANTIL
            </Link>
            <Link
                className="menu-item"
                to={{ pathname: `/portfolio`, search: `commertial` }}
                onClick={closeSidebar}
            >
                &nbsp;- COMERCIAL
            </Link>
            <LogoSpacer />
            <Link className="linked" to="/about-me">
                SOBRE MIM
            </Link>
            <Link className="linked" to="/contact">
                CONTATO
            </Link>
        </Menu>
    );
}
