import { useEffect, useState } from 'react';
import { message } from 'antd';
import { type Task } from '../types/Task';
import TaskFormulario from '../componentes/TaskFormulario';
import TaskLista from '../componentes/TaskLista';
import { fetchData, createDataFetch, deleteDataFetch, project } from '../services/api';

function Tareas() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const cargarTareas = async () => {
    try {
      const data = await fetchData(project);
      setTasks(data);
    } catch {
      message.error('Error al cargar tareas');
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const handleAdd = async (task: Task) => {
    try {
      await createDataFetch(project, {
        Titulo: task.Titulo,
        Prioridad: task.Prioridad,
        Completar: false,
      });
      message.success('Tarea creada');
      cargarTareas();
    } catch {
      message.error('Error al crear la tarea');
    }
  };

  const handleComplete = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, Completar: true } : t
    ));
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteDataFetch(`${project}/${id}`);
      message.success('Tarea eliminada');
      cargarTareas();
    } catch {
      message.error('Error al eliminar');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ color: '#fff' }}>Administrador de Tareas</h1>
      <TaskFormulario onAdd={handleAdd} />
      <TaskLista
        tasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Tareas;