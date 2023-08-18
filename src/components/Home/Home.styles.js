import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    font-size: 4vw;
  }

  img {
    width: 13vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 100vw;

  h2 {
    color: var(--white);
    font-size: 1.5vw;
    margin-top: 20px;
  }
`;
