import rocket from "../../assets/rocket.png";

import { Container, ContainerTitle } from "./Home.styles";

import Lottie from "react-lottie";
import FlexWrapper from "../../Styles/Wrapper";
import { useState } from "react";
import { StyledTitle } from "../Title/Title.styles";
import Input from "../InputAddTask/InputAddTask";
import { StyledDivTasks } from "../InputAddTask/InputAddTask.styles";
import { RocketAnimation } from "../LottieAnimation/RocketAnimation";
import { LineAnimation } from "../LottieAnimation/LineAnimation";

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
          <StyledTitle>Todolist</StyledTitle>
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
