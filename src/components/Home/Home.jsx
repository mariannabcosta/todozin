import { Container, ContainerTitle } from "./Home.styles";

import FlexWrapper from "../../Styles/Wrapper";
import { useState } from "react";
import { StyledTitle } from "../Title/Title.styles";
import Input from "../AddTaskInput/AddTaskInput";
import { StyledDivTasks } from "../AddTaskInput/AddTaskInput.styles";
import { RocketAnimation } from "../LottieAnimation/RocketAnimation";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const newTaskObject = { id: tasks.length + 1, title: newTask };
    setTasks([...tasks, newTaskObject]);
  };
  return (
    <>
      <FlexWrapper>
        <ContainerTitle>
          <StyledTitle>Todozin</StyledTitle>
          <RocketAnimation />
        </ContainerTitle>
        <Container>
          <StyledDivTasks>
            <Input addTask={addTask} />
          </StyledDivTasks>
        </Container>
      </FlexWrapper>
    </>
  );
};

export default Home;
