import { useEffect, useState } from "react";
import FormTask from "./FormTask";
import Task from "./Task";
import fakeData from "../utils/fakeData";
import { List, Container } from "@material-ui/core/";
import AlertDelete from "./AlertDelete";
import Temporizador from "./Temporizador";
import { createUUID } from "../utils/generateUUID";
import "../styles/FormTask.css";
import formatTiempoTranscurrido from "../utils/formatTiempoTranscurrido";

function ListTasks() {
  //Estados
  const [tasks, setTasks] = useState([]);
  const [idEdit, setIdEdit] = useState(0);
  const [idEditTimer, setIdEditTimer] = useState(0);
  const [deleteSelecTask, onDeleteSelecTask] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [sendData, setSendData] = useState("");
  const [openTemporizador, setOpenTemporizador] = useState(false);
  const [dataTemporizador, setDataTemporizador] = useState("");

  useEffect(() => {
    setTasks(fakeData());
  }, []);

  useEffect(() => {
    console.log(openTemporizador);
  }, [openTemporizador]);

  //Modal de confirmacion al eliminar una tarea
  useEffect(() => {
    deleteSelecTask !== null && setShowDeleteConfirm(true);
  }, [deleteSelecTask]);

  //Funcion para Eliminar una tarea
  const onDeleteTask = (id) => {
    onDeleteSelecTask(null);
    setShowDeleteConfirm(false);
    tasks.delete(id);
    setTasks(tasks);
  };

  //Funcion para marcar como completada la tarea
  const handleCheckTask = (id) => {
    tasks.get(id).isComplete = true;
    setTasks(new Map(tasks));
  };

  //Funcion para editar una tarea
  const onChangeTask = (id, key, value) => {
    tasks.get(id)[key] = value;
    setTasks(new Map(tasks));
    setIdEdit(null);
    setIdEditTimer(null);
  };

  const onChangeTaskTimer = (timer, id) => {
    tasks.get(id).duracion = 1699;
    setTasks(tasks);
  };

  //Funcion para crear una tarea
  const addNewTask = () => {
    const id = createUUID();
    tasks.set(id, {
      id: id,
      text: sendData,
      duracion: 0,
      transcurrido: 0,
      dateComplete: 0,
      isComplete: false,
    });
    setTasks(new Map(tasks));
    setSendData("");
  };

  //Funcion para inicializar el tiempo de la tarea
  const handlePlayButton = (duracion, transcurrido) => {
    setDataTemporizador(formatTiempoTranscurrido(duracion, transcurrido));
    setOpenTemporizador(true);
  };

  return (
    <div>
      <Container>
        <FormTask
          className="container-form"
          onSubmit={() => addNewTask()}
          value={sendData}
          onChange={(value) => {
            setSendData(value);
          }}
        />
        <List>
          {[...tasks.values()]
            .filter((task) => !task.isComplete)
            .map((task, index) => (
              <>
                <Task
                  key={task.id}
                  task={task}
                  onEdit={(id) => setIdEdit(id)}
                  onEditTimer={(id) => setIdEditTimer(id)}
                  isEdit={idEdit === task.id}
                  isEditTimer={idEditTimer === task.id}
                  onDeleteTask={() => onDeleteSelecTask(task.id)}
                  handleCheckTask={() => handleCheckTask(task.id)}
                  onAceptEditChanges={(text) =>
                    onChangeTask(task.id, "text", text)
                  }
                  onAceptEditTimerChanges={(duracion) =>
                    onChangeTask(task.id, "duracion", duracion)
                  }
                  onPlay={() =>
                    handlePlayButton(task.duracion, task.transcurrido)
                  }
                />
              </>
            ))}
        </List>
        <Temporizador
          open={openTemporizador}
          onClose={() => setOpenTemporizador(false)}
          data={dataTemporizador}
        />

        {deleteSelecTask !== null && (
          <AlertDelete
            title={tasks.get(deleteSelecTask).text}
            open={showDeleteConfirm}
            handleClose={() => setShowDeleteConfirm(false)}
            handleAcept={() => onDeleteTask(deleteSelecTask)}
          />
        )}
        {}
      </Container>
    </div>
  );
}

export default ListTasks;
