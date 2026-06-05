import './App.css'
import { useState } from 'react'
import Menu from './componentes/Menu';
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import Estadisticas from './pages/Estadisticas';

function App() {
  const [page, setPage] = useState<'Inicio' | 'Tareas' | 'Estadisticas'>('Inicio');

  const renderPage = () => {
    switch (page) {
      case 'Tareas':
        return <Tareas />;
      case 'Estadisticas':
        return <Estadisticas />;
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