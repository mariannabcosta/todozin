import rocket from "../../assets/rocket.png";

import { Container, ContainerTitle } from "./Home.styles";

import FlexWrapper from "../../Styles/Wrapper";
import { useState } from "react";
import { StyledTitle } from "../Title/Title.styles";
import { StyledSubtitle } from "../Subtitle/Subtitle.styles";
import Input from "../InputAddTask/InputAddTask";
import { StyledDivTasks } from "../InputAddTask/InputAddTask.styles";

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
          <img src={rocket} alt="Rocket Icon" />
        </ContainerTitle>
        <Container>
          <StyledSubtitle>What do you have to do today?</StyledSubtitle>
          <StyledDivTasks>
            <Input addTask={addTask} />
          </StyledDivTasks>
        </Container>
      </FlexWrapper>
    </>
  );
};

export default Home;
