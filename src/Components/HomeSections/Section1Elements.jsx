import styled from "styled-components";
import background from "../../assets/background.png";
import courthouse from "../../assets/courthouse.jpg";

export const Section1Container = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 70% 25% 5%;
    margin-top: -31px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 60% 40%;
    }
`

export const NavbarIcon = styled.div`

`

export const BackgroundImg = styled.div`
    background-image: url(${background});
    grid-area: header-start;
    background-size: cover;
    grid-row: 1/4;
    grid-column: 2/3;
    box-shadow: 2px 2px 6px 2px #000000;
`

export const Section1Content = styled.div`
    position: relative;
    margin-top: 100px;
    height: 1000px;
    grid-row: 1/3;
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 40% 60%;

    @media screen and (max-width: 768px) {
        grid-template-columns: 30% 30% 40%;
    }

    @media screen and (max-width: 550px) {
        transform: translateY(-1.5rem);
    }
`

export const SloganContent = styled.div`
    ${Section1Content}
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 500px;
    margin-left: 40px;
    z-index: 2;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/3;

    @media screen and (max-width: 768px) {
        background: rgba(255, 255, 255, 0.63);
        grid-column: 1/4;
    }
`

export const SloganH1 = styled.h1`
    ${SloganContent}
    color: #060606;
    text-shadow: 1px 1px 1.5px #000000;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    width: 80%;

    @media screen and (max-width: 1150px) {
        font-size: 2.5rem;
        width: 90%;
    }
    @media screen and (max-width: 875px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 2.3rem;
    }
`

export const SloganP = styled.p`
    ${SloganContent}
    color: #FAF9F6;
    width: 70%;
    text-shadow: 8px 8px 12px #000000;
    font-size: 1.3rem;
    height: max-content;

    @media screen and (max-width: 1150px) {
        font-size: 1rem;
        width: 75%;
    }

    @media screen and (max-width: 875px) {
        width: 85%;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        color: #060606;
    }

    @media screen and (max-width: 425px) {
        font-size: 1.1rem;
    }
`

export const SearchBoxContainer = styled.div`
    position: relative;
    box-shadow: 2px 2px 10px 4px #000000;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid rgba(216, 216, 216, 0.56);
    width: max-content;
    background: white;
    padding: 25px;

    @media screen and (max-width: 1024px) {
        gap: 8px;
    }
    @media screen and (max-width: 768px) {
        border: none;
        gap: 1rem;
        padding-left: 6px;
        padding-right: 2rem;
        border-radius: 0px 20px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (max-width: 430px) {
        width: 100%;
    }
    & > * {
        padding: 1rem;
        @media screen and (max-width: 800px) {
            padding: 0.8rem;
        }
        @media screen and (max-width: 768px) {
            padding: 0rem;
        }
    }
`

export const LocationContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px) {
        align-items: flex-start;
    }
    span {
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
        height: 2rem;
    }
    input {
        border: none;
        outline: 1px solid gray;
        padding: 0.2rem 0.5rem;
        font-size: 1rem;
        color: black;
        width: 300px;
        height: 28px;
        @media screen and (max-width: 430px) {
            width: 100%;
        }
    }
    select {
        border: none;
        outline: 1px solid gray;
        padding: 0.2rem 0.5rem;
        width: 120px;
        height: 28px;
        font-size: 1rem;
        color: black;
        @media screen and (max-width: 430px) {
            width: 100%;
        }
        option {
            color: black;
        }
    }
    :after {
    position: absolute;
        content: "";
        background: rgba(216, 216, 216, 0.56);
        padding-top: 4rem;
        padding-right: 1px;
        right: -6px;
        top: 50%;
        transform: translateY(-50%);
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`

export const PriceContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px) {
        align-items: flex-start;
    }
    span {
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
        height: 2rem;
    }
    input {
        border: none;
        outline: 1px solid gray;
        padding: 0.2rem 0.5rem;
        font-size: 1rem;
        color: black;
        width: 300px;
        height: 28px;
        @media screen and (max-width: 430px) {
            width: 100%;
        }
    }
    select {
        border: none;
        outline: 1px solid gray;
        padding: 0.2rem 0.5rem;
        width: 120px;
        height: 28px;
        font-size: 1rem;
        color: black;
        @media screen and (max-width: 430px) {
            width: 100%;
        }
        option {
            color: black;
        }
    }
`

export const SearchButton = styled.div`
    display: flex;
    border: none;
    outline: none;
    background: #060606;
    transform: translateY(0.35rem);
    margin-right: 1rem;
    padding: 0;

    @media screen and (max-width: 768px) {
        transform: translateY(0);
        margin-right: 0rem;
        margin-top: 2rem;
    }
    a {
    padding: 0.5rem 1.5rem;
    font-size: 1.3rem;
    color: whitesmoke;
    border: 1px solid transparent;
    align-self: center;
    transition: all ease-in-out 300ms;
    @media screen and (max-width: 768px) {
        padding: 0.5rem 4rem;
    }
    &:hover {
        background: white;
        border-color: #060606;
        color: #060606;
    }
}
`

export const HeroImgContainer = styled.div`
    grid-row: 1/3;
    grid-column: 1/3;
    width: 93%;
    height: 95%;
    margin-top: 27px;
    background-image: url(${courthouse});
    box-shadow: 2px 2px 8px 3px #000000;
    background-size: cover;
    
    @media screen and (max-width: 768px) {
        position: absolute;
        top: 0;
        right: 0;
    }
    @media screen and (max-width: 550px) {
        right: -20%;
        width: 100%;
        height: 100%;
        grid-column: unset;
    }
`

export const HeroImgOverlay = styled.div`
    height: 100%;
    background: rgba(255,255,255,0.3);
`
