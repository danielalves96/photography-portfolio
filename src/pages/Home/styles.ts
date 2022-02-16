import styled from "styled-components";

import mobileImage from "../../assets/images/jpg/mobileImage.jpg";
import homeImage from "../../assets/images/png/homeImage.png";

export const Main = styled.div`
    background-image: url(${homeImage});
    width: 100vw;
    height: 100vh;
    background-size: cover;

    @media (max-width: 800px) {
        background-image: url(${mobileImage});

        background-position: center;
    }

    /* box-sizing: border-box; */
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    top: 24%;
    position: absolute;
    left: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        position: inherit;
    }
`;

export const Image = styled.img`
    width: 300px;

    @media (max-width: 800px) {
        margin-top: 5px;
        width: 150px;
    }

    @media (max-width: 400px) {
        margin-top: 5px;
        width: 100px;
    }
`;

export const Links = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 3rem;

    a {
        font-size: 1.2rem;
        color: #c3c3c3;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 800px) {
        margin-top: 5px;
        gap: 2rem;

        a {
            font-size: 0.8rem;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    @media (max-width: 800px) {
        a {
            font-size: 0.6rem;
        }
    }
`;
