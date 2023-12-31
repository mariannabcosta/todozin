import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const url = "http://localhost:3001/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(url);

      const allTasks = response.data;
      setTasks(allTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async () => {
    if (taskInput.trim() === "") {
      toast.error("Insira uma tarefa");
      return;
    }

    try {
      const response = await axios.post(url, {
        title: taskInput,
        completed: false,
      });
      setTasks([...tasks, response.data]);
      setTaskInput("");
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${url}/${taskId}`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };
  const updateTaskCompletion = async (taskId) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        const updatedTask = {
          ...taskToUpdate,
          completed: !taskToUpdate.completed,
        };
        await axios.put(`${url}/${taskId}`, updatedTask);
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? updatedTask : task
        );
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        taskInput,
        setTaskInput,
        deleteTask,
        updateTaskCompletion,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
