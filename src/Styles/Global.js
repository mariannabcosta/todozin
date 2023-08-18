import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --light-green: #E4E390;
    --white: #F9EAC0;
    --orange:#C96F32;
    --dark-green: #09400E;
}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;

        /* Scrollbar - Firefox */
        scrollbar-width: thin;
        scrollbar-color:  transparent;
    }

    /* Scrollbar - Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 0.5rem;
    }

    *::-webkit-scrollbar-thumb {

        border-radius: 0.6rem;
        border: 0 none ;
    }
    body{
        

        overflow-x:hidden ;
        scroll-behavior: smooth;
        
        background-color: #25252b;
    }

    button{
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    img{
        max-width: 100%;
    }

    p {
        font-weight: 300;
        text-transform: uppercase;
    }

`;
