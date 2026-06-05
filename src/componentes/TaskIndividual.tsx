import { type Task } from '../types/Task';
import { Button, Tag } from 'antd';

interface TaskIndividualProps {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskIndividual({ task, onComplete, onDelete }: TaskIndividualProps) {
  const colorPrioridad: Record<string, string> = {
    Alta: 'red',
    Media: 'orange',
    Baja: 'green',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      marginBottom: '10px',
      borderRadius: '8px',
      background: task.completed ? '#1a1a1a' : '#2a2a2a',
      opacity: task.completed ? 0.6 : 1,
      border: '1px solid #444',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : '#fff',
          fontSize: '16px',
        }}>
          {task.completed ? '✔ ' : '○ '}{task.title}
        </span>
        <Tag color={colorPrioridad[task.priority]}>{task.priority}</Tag>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          size="small"
          type="primary"
          onClick={() => onComplete(task.id)}
          disabled={task.completed}
        >
          Completar
        </Button>
        <Button
          size="small"
          danger
          onClick={() => onDelete(task.id)}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default TaskIndividual;
