import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.2rem;
    margin-top: 2rem;

    a {
        margin-bottom: 3rem;
        &:hover {
            opacity: 0.8;
        }
    }
`;
