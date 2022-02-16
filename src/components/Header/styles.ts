import styled from "styled-components";

export const Container = styled.div`
    background-color: #181818;
    position: relative;
    padding: 1rem 1.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    justify-content: space-between;

    @media (max-width: 790px) {
        justify-content: space-between;
    }
`;

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 790px) {
        width: -webkit-fill-available;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2rem;

    @media (max-width: 790px) {
        display: none;
    }
`;

export const Translator = styled.div`
    display: flex;
    @media (max-width: 790px) {
        display: none;
    }
`;

export const Dropdown = styled.div`
    display: none;
    align-items: center;
    padding-left: 2rem;

    @media (max-width: 790px) {
        display: flex;
    }
`;

export const TranslatorDropdown = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 9px;
`;
