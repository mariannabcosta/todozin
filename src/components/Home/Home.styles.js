import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
  }

  img {
    width: 12vw;
  }
`;

export const Container = styled.div`
  background-color: #b656f8;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  border: 2px solid var(--dark-green);
  border-radius: 35px;

  width: 50%;
  margin: 0 auto;
`;
