import { useState } from 'react';
import { Input, Select, Button } from 'antd';
import { type Task } from '../types/Task';

interface TaskFormularioProps {
  onAdd: (task: Task) => void;
}

function TaskFormulario({ onAdd }: TaskFormularioProps) {
  const [titulo, setTitulo] = useState('');
  const [prioridad, setPrioridad] = useState('Media');

  const handleAgregar = () => {
    if (!titulo.trim()) return;

    const nuevaTarea: Task = {
      id: Date.now(),
      title: titulo,
      priority: prioridad,
      completed: false,
    };

    onAdd(nuevaTarea);
    setTitulo('');
    setPrioridad('Media');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      background: '#2a2a2a',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
    }}>
      <Input
        placeholder="Nombre de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        style={{ background: '#1a1a1a', color: '#fff', borderColor: '#444' }}
      />
      <Select
        value={prioridad}
        onChange={(value) => setPrioridad(value)}
        style={{ width: '100%' }}
        options={[
          { value: 'Alta', label: 'Alta' },
          { value: 'Media', label: 'Media' },
          { value: 'Baja', label: 'Baja' },
        ]}
      />
      <Button type="primary" onClick={handleAgregar} block>
        Agregar tarea
      </Button>
    </div>
  );
}

export default TaskFormulario;
