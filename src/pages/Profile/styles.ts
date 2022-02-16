import styled from "styled-components";

import profileImage from "../../assets/images/jpg/cigano.jpg";
import profileMobile from "../../assets/images/png/profileMobile.png";

export const Main = styled.div`
    background-image: url(${profileImage});
    width: 100vw;
    height: 100vh;
    background-size: cover;

    @media (max-width: 800px) {
        background-image: url(${profileMobile});
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    top: 14%;
    position: absolute;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        margin-top: 1.5rem;
        font-size: 3rem;
        color: #333;
        font-weight: bold;
    }

    span {
        max-width: 700px;
        font-size: 1.3rem;
        font-weight: 500;
        color: #333;
    }

    @media (max-width: 1024px) {
        span {
            font-size: 1rem;
        }
    }

    @media (max-width: 800px) {
        position: sticky;
        top: 13%;
        align-items: center;

        h1 {
            font-size: 2rem;
        }

        span {
            font-size: 0.95rem;
            max-width: 95%;
            text-align: justify;
            padding: 1.2rem;
            font-weight: 500;
            color: #fff;
            background-color: #333333ed;
            border-radius: 8px;
        }
    }

    @media (max-width: 375px) {
        position: sticky;
        top: 13%;
        align-items: center;

        h1 {
            font-size: 1.5rem;
        }

        span {
            font-size: 0.7rem;
            max-width: 95%;
            text-align: justify;
            padding: 1.2rem;
            font-weight: 500;
            color: #fff;
            background-color: #333333d1;
            border-radius: 8px;
        }
    }
`;
