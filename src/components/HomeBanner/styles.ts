import styled from "styled-components";

export const ContainerImg = styled.div`
    img {
        width: 100%;
    }
`;

export const LogoHome = styled.div`
    position: absolute;
    width: 40rem;
    height: 19rem;
    left: 5rem;
    top: 10rem;

    @media (max-width: 1300px) {
        top: 20rem;
    }

    @media (max-width: 1055px) {
        top: 15rem;
        width: 30rem;
    }

    @media (max-width: 890px) {
        top: 15rem;
        width: 25rem;
    }

    @media (max-width: 782px) {
        left: 2rem;
    }

    @media (max-width: 690px) {
        top: 10rem;
        width: 20rem;
    }

    @media (max-width: 512px) {
        top: 10rem;
        width: 15rem;
    }

    @media (max-width: 400px) {
        top: 9rem;
        width: 10rem;
    }
`;

export const ContainerText = styled.div`
    position: absolute;
    width: 44rem;
    height: 19rem;
    left: 5rem;
    top: 26rem;
    background: linear-gradient(
        108.14deg,
        rgba(255, 255, 255, 0.36) -7.7%,
        rgba(104, 104, 104, 0.06) 100%
    );
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border-radius: 56px;
    z-index: 5;
    border: 3px solid;

    border-color: rgba(255, 255, 255, 0.2);

    padding: 3rem;

    @media (max-width: 1300px) {
        display: none;
    }

    li {
        margin-bottom: 1rem;
        a {
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 37px;

            letter-spacing: 0.005em;

            color: #ffffff;

            mix-blend-mode: normal;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;
