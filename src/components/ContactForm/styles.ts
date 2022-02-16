import styled from "styled-components";

export const Container = styled.div`
    padding: 0.8rem;
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    span {
        color: #f5f5f5;
        font-size: 3rem;
        font-weight: 600;
    }

    @media (max-width: 800px) {
        span {
            font-size: 2rem;
        }
    }
`;
