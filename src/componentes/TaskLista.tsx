import { type Task } from '../types/Task';
import TodoIndividual from './TaskIndividual';

interface TaskListaProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskLista({ tasks, onComplete, onDelete }: TaskListaProps) {
  if (tasks.length === 0) {
    return (
      <p style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>
        No hay tareas aún. ¡Agrega una!
      </p>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {tasks.map((task) => (
        <TodoIndividual
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskLista;
