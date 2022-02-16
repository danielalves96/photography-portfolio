import styled from "styled-components";

export const NotFoundCss = styled.div`
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;

    div {
        display: table-cell;
        vertical-align: middle;
        span {
            font-size: 50px;
            display: inline-block;
            padding-right: 12px;
            animation: type 0.5s alternate infinite;
        }

        a {
            font-family: helvetica;
            font-weight: 400;
        }
    }

    @keyframes type {
        from {
            box-shadow: inset -3px 0px 0px #888;
        }
        to {
            box-shadow: inset -3px 0px 0px transparent;
        }
    }
`;
