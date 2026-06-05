import './App.css'
import { useState } from 'react'
import Menu from './componentes/Menu';
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import Estadisticas from './pages/Estadisticas';
import { type Task } from './types/Task';

function App() {
  const [page, setPage] = useState<'Inicio' | 'Tareas' | 'Estadisticas'>('Inicio');
  const [tasks, setTasks] = useState<Task[]>([]);

  const renderPage = () => {
    switch (page) {
      case 'Tareas':
        return <Tareas tasks={tasks} setTasks={setTasks} />;
      case 'Estadisticas':
        return <Estadisticas tasks={tasks} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <>
      <Menu OnNavigate={setPage} />
      {renderPage()}
    </>
  )
}


export default App;
