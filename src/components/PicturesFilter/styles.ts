import styled from "styled-components";

export const Container = styled.div`
    border-radius: 4px;
    position: relative;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;

    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
    margin-bottom: 1rem;
    font-size: 3rem;

    span {
        font-weight: 500;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const CategorySelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
    margin-bottom: 1rem;
    flex-direction: column;
    gap: 1rem;

    span {
        font-size: 1.25rem;
        font-weight: 500;
    }

    @media (min-width: 700px) {
        display: none;
    }
`;
