import styled from "styled-components";

export const LoginContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4DA7FF;
    
    
`;

export const DisplayContent = styled.div`
    width: 700px;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1565C0;

    @media (max-width: 1400px) {
        display: none;
    }
`;

export const DisplayImg = styled.img`
    width: 90%;
`;

export const LoginContent = styled.div`
    width: 700px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;

    @media (max-width: 540px) {
        width: 97%;
        height: 98%;

        :nth-child(3n) {
            width: 90%;   
        }
    }
`;

export const LoginTitle = styled.h1`
    font-size: 22px;
    margin-bottom: 50px;
`;

export const Span = styled.span`
    font-weight: 600;
 `;

export const InputArea = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 540px) {
        
        :nth-child(1n) {
            
            align-self: center;
            width: 95.5%;
            
        }

    }
 `;

 export const Question = styled.p`
    color: #000000;
    font-size: 18px;
    margin: 20px 0;
    cursor: pointer;
 `;