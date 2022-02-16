import { NotFoundCss } from "./styles";

export function NotFound() {
    return (
        <NotFoundCss>
            <div>
                <span>ERRO 404 | PÁGINA NÃO ENCONTRADA.</span>
                <br />
                <br />
                <a href="/" className="button is-dark">
                    Voltar ao início
                </a>
            </div>
        </NotFoundCss>
    );
}
