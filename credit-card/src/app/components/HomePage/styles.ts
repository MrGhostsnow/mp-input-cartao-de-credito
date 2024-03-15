import styled from "styled-components";

export const ContainerHomePage = styled.div`
    height: 503px;
    width: 893px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #F3F4F6;

    @media (max-width: 768px) {
        width: 730px;
    }

    @media (max-width: 425px) {
        width: 375px;
        height: 650px;
        flex-direction: column;
        justify-content: center;
    }
`