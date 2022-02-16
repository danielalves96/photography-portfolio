import styled from "styled-components";

export const Container = styled.div`
    color: #f5f5f5;
    background: #181818;
    position: relative;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.94rem;

    @media (max-width: 800px) {
        justify-content: center;
    }

    @media (max-width: 400px) {
        span {
            font-size: 0.6rem;
        }
    }
`;
