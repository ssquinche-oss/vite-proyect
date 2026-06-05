import React from 'react';
import "./styles/home.css";
import { type Task } from '../types/Task';
import TaskFormulario from '../componentes/TaskFormulario';
import TaskLista from '../componentes/TaskLista';

interface TareasProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

function Tareas({ tasks, setTasks }: TareasProps) {
  const agregarTarea = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const completarTarea = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: true } : t
    ));
  };

  const eliminarTarea = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="div-pagina">
      <div className="div-contenedor">
        <h1 className="Titulo">Tareas</h1>
        <p className="mensaje">Agrega y gestiona tus tareas.</p>
        <TaskFormulario onAdd={agregarTarea} />
        <TaskLista
          tasks={tasks}
          onComplete={completarTarea}
          onDelete={eliminarTarea}
        />
      </div>
    </div>
  );
}

export default Tareas;
