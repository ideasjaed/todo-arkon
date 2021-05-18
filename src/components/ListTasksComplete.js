import { useEffect, useState } from "react";
import Task from "./Task";
import fakeData from "../utils/fakeData";
import { List, Container } from "@material-ui/core/";
import "../styles/FormTask.css";

function ListTasksComplete() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(fakeData());
  }, []);

  return (
    <Container>
      <List>
        {Array.from(tasks.values())
          .filter((task) => task.isComplete)
          .map((task, index) => (
            <Task key={task.id} task={task} />
          ))}
      </List>
    </Container>
  );
}

export default ListTasksComplete;
