import { useContext, useState } from "react";
import { StyledButton } from "../AddTaskButton/AddTaskButton.styles";
import {
  StyledAddTaskInput,
  StyledUl,
  StyledLabel,
} from "./AddTaskInput.styles";
import { TaskContext } from "../../Context/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Input = () => {
  const {
    tasks,
    taskInput,
    setTaskInput,
    createTask,
    deleteTask,
    updateTaskCompletion,
  } = useContext(TaskContext);

  const [placeholder, setPlaceholder] = useState("Qual a sua próxima tarefa?");

  // Essa função é chamada quando o valor do input é alterado
  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Essa função é chamada quando o botão é pressionado
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    if (taskInput.trim() === "") {
      toast.error("Insira uma tarefa!");
      return;
    }

    // Cria a tarefa com o texto fornecido e redefine o input para vazio
    createTask(taskInput);
    setTaskInput("");
  };

  // Esta função é chamada quando o checkbox de uma tarefa é alterado
  const handleCheckboxChange = (taskId) => {
    updateTaskCompletion(taskId);
  };

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (taskInput.trim() === "") {
      setPlaceholder("Qual a sua próxima tarefa?");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Input para digitar a tarefa */}
          <StyledAddTaskInput
            type="text"
            placeholder={placeholder}
            value={taskInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {/* Botão para criar a tarefa */}
          <StyledButton type="submit">
            <FontAwesomeIcon
              icon={faPlus}
              fade
              size="2xl"
              style={{ color: "var(--white)" }}
            />
          </StyledButton>
        </form>
      </div>
      {/* Lista de tarefas */}
      <StyledUl>
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Checkbox para marcar a conclusão da tarefa */}
            <div className="custom-checkbox">
              <input
                id={task.id}
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <StyledLabel for={task.id} iscompleted={task.completed}>
                {task.title}
              </StyledLabel>
            </div>
            {/* Botão para deletar a tarefa */}
            <button onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon
                icon={faMinus}
                size="2xl"
                style={{ color: "#dd0808" }}
              />
            </button>
          </li>
        ))}
      </StyledUl>
    </>
  );
};

export default Input;
