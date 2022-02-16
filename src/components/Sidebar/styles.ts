import styled from "styled-components";

export const LogoSpacer = styled.div`
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    color: #d7d7d7;
    margin-bottom: 5px;
`;

export const Linked = styled.a`
    font-size: 1.1rem;
    color: #d7d7d7;
    padding: 5px;
    border-radius: 8px;
    margin-bottom: 5px;

    &:hover {
        opacity: 0.9;
        background-color: #181818;
    }
`;

export const Item = styled.a`
    line-height: 2;
    color: #d7d7d7;
    border-radius: 8px;
    font-size: 0.9rem;

    &:hover {
        opacity: 0.9;
        background-color: #181818;
    }
`;
