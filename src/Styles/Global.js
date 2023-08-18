import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --white: #F9EAC0;
    --bg-dark: #25252b;
    --orange: #d6625e;
    --gray: #222;
}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

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
        border: 0 none;
    }
    body{
        

        overflow-x: hidden;
        scroll-behavior: smooth;
        
        background-color: var(--bg-dark);

        min-width: 100vw;
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

`;
