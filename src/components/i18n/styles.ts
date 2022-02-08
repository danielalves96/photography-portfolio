import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    width: 48px;
    height: 48px;
    margin: 10px;
    filter: grayscale(1);
    display: flex;
    gap: 10px;

    &:hover {
        filter: grayscale(0.5);
    }
`;
