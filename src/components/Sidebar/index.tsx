import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/images/png/logoWhite.png";
import { Title, LogoSpacer, Item, Linked } from "./styles";

export function Sidebar() {
    return (
        <Menu customBurgerIcon={<GiHamburgerMenu />}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <LogoSpacer />
            <Title>TRABALHOS</Title>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- FINE ART
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- ESTÚDIO
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- ENSAIOS EXTERNOS
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- CASAMENTOS
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- PRÉ CASAMENTO
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- TEATRO
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- 15 ANOS
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- GASTRÔNOMIA
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- INFANTIL
            </Item>
            <Item className="menu-item" href="/portfolio">
                &nbsp;- COMERCIAL
            </Item>
            <LogoSpacer />
            <Linked href="/about-me">SOBRE MIM</Linked>
            <Linked href="/contact">CONTATO</Linked>
        </Menu>
    );
}
