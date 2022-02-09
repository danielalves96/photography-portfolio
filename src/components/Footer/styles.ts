import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    position: relative;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 800px) {
        justify-content: center;
    }
`;
