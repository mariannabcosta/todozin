import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 4vw;
    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }

  img {
    width: 13vw;
    @media (max-width: 768px) {
      width: 30vw;
    }
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    min-height: 100vh;

    h2 {
      font-size: 4vw;
      margin-top: 10px;
    }
  }
`;
