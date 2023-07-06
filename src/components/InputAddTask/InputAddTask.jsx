/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { StyledButton } from "../Button/Button.styles";
import { StyledInputAddTask, StyledUl } from "./InputAddTask.styles";
import { TaskContext } from "../../Context/TaskContext";
import { StyledDeleteButton } from "../DeleteButton/DeleteButton.styles";
import lixeira from "../../assets/lixeira.png";

const Input = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const { tasks, taskInput, setTaskInput, createTask, deleteTask } =
    useContext(TaskContext);
  return (
    <>
      <div>
        <StyledInputAddTask
          type="text"
          placeholder="Type a task here..."
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
        />
        <StyledButton onClick={createTask}>Create task</StyledButton>
      </div>
      <StyledUl>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" onChange={handleCheckboxChange} />
            {task.title}
            <StyledDeleteButton onClick={() => deleteTask(task.id)}>
              <img src={lixeira} alt="" />
            </StyledDeleteButton>
          </li>
        ))}
      </StyledUl>
    </>
  );
};

export default Input;
