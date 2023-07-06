import styled from "styled-components";

export const StyledDivTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const StyledInputAddTask = styled.input`
  font-family: "Poppins", sans-serif;
  color: black;
  width: 27vw;
  height: 3vw;
  border-radius: 5px;
  background: none;
  border: 2px solid black;
  margin-right: 5px;

  ::placeholder {
    font-family: "Poppins", sans-serif;
    color: var(--dark-green);
    text-transform: uppercase;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 20px;
  margin-top: 20px;
  color: var(--white);

  li {
    width: 30vw;
    border-bottom: 2px solid var(--dark-green);
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
`;
