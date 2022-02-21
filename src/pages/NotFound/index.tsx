import { Link } from "react-router-dom";

import { NotFoundCss } from "./styles";

export function NotFound() {
    return (
        <NotFoundCss>
            <div>
                <span>ERRO 404 | PÁGINA NÃO ENCONTRADA.</span>
                <br />
                <br />
                <Link to="/" className="button is-dark">
                    Voltar ao início
                </Link>
            </div>
        </NotFoundCss>
    );
}
