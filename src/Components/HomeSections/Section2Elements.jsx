import styled from "styled-components";

export const Section2Container = styled.div`
    display: grid;
    grid-template-columns: 30% 15% 55%;
    margin-top: 4rem;   
    justify-items: center;
`

export const Section2ImgContainer = styled.div`
    grid-column: 1/3;
    grid-row: 1/3;
    margin: 2rem;
    position: relative;
    
`

export const Section2Img = styled.div`
    ${Section2ImgContainer}
    width: 80%;
    height: 700px;
    overflow: hidden;
    display: flex;
    box-shadow: 2px 2px 4px 0.5px #000000;

    @media screen and (max-width: 1024px) {
        height: 650px;
    }
    @media screen and (max-width: 678px) {
        height: 850px;
        width: 400px;
    }
`

export const Section2Slogan = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    padding-left: 100px;

    @media screen and (max-width: 678px) {
        grid-column: 2/4;
        background: rgba(255, 255, 255, 0.4);
        padding: 0.2rem 1.5rem;
        text-align: start;
    }

    @media screen and (max-width: 500px) {
        grid-column: 1/4;
    }
`

export const Section2Heading = styled.h1`
    ${Section2Slogan}
    color: #060606;
    font-size: 3rem;
    width: 80%;

    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.2rem;
        width: 95%;
    }

    @media screen and (max-width: 678px) {
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        width: 100%;
    }
`

export const Section2P = styled.p`
    
`

export const Section2ContentContainer = styled.div`
    grid-column: 2/4;
    grid-row: 2/3;
    display: flex;
    height: fit-content;
    z-index: 2;
    gap: 1.2rem;
    background: white;
    padding: 3rem 2rem;
    margin-right: 25px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px 2px #000000;

    @media screen and (max-width: 805px) {
        grid-column: 1/4;
        margin-left: 1rem;
        gap: 1.5rem;
    }

    @media screen and (max-width: 678px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        padding: 1rem 1.5rem;
        gap: 2rem;
        margin-top: 1rem;
    }
`

export const Content1Container = styled.div`
    ${Section2ContentContainer}
    display: flex;
    flex-direction: column;
`

export const Content1Heading = styled.h1`
    ${Section2ContentContainer}
    ${Content1Container}
    color: #060606;
    margin-bottom: 0.5rem;
`

export const Content1P = styled.p`
    ${Section2ContentContainer}
    ${Content1Container}
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    color: gray;
`

export const Content2Container = styled.div`
    ${Section2ContentContainer}
    display: flex;
    flex-direction: column;
`

export const Content2Heading = styled.h1`
    ${Section2ContentContainer}
    ${Content2Container}
    color: #060606;
    margin-bottom: 0.5rem;
`

export const Content2P = styled.p`
    ${Section2ContentContainer}
    ${Content2Container}
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    color: gray;
`

export const Content3Container = styled.div`
    ${Section2ContentContainer}
    display: flex;
    flex-direction: column;
`

export const Content3Heading = styled.h1`
    ${Section2ContentContainer}
    ${Content3Container}
    color: #060606;
    margin-bottom: 0.5rem;
`

export const Content3P = styled.p`
    ${Section2ContentContainer}
    ${Content3Container}
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    color: gray;
`
